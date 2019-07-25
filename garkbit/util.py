import os
import pickle
import requests

from .models.usergroup import User


def make_token(request, user):
    claims = dict(name=user.username, fullname=user.fullname,
                  email=user.email, uid=str(user.id),
                  groups=user.get_groups())
    return request.create_jwt_token(str(user.id), **claims)


def get_user(request):
    userid = request.unauthenticated_userid
    return request.dbsession.query(User).get(userid)


def groupfinder(userid, request):
    """
    Default groupfinder implementaion for pyramid applications

    :param userid:
    :param request:
    :return:
    """
    if userid and hasattr(request, 'user') and request.user:
        groups = ['group:%s' % g.name for g in request.user.groups]
        return groups
    return []


class AuthRequest(object):
    def __init__(self, root_url, tokens):
        self.root_url = root_url
        self.tokens = tokens
        self.user = 'admin'
        self.apiroot = os.path.join(self.root_url, 'api/dev')

    def set_user(self, name):
        if name not in self.tokens:
            raise RuntimeError("No token found for {}".format(name))
        self.user = name

    def _make_headers(self, token):
        headers = {
            "Accept": "application/json, text/javascript, */*",
            "Authorization": "Bearer {}".format(token),
        }
        return headers

    def make_headers(self):
        token = self.tokens[self.user]
        return self._make_headers(token)

    def refresh_token(self):
        headers = self.make_headers()
        url = os.path.join(self.root_url, 'auth/refresh')
        res = requests.get(url, headers=headers)
        if not res.ok:
            raise RuntimeError("Error refreshing token")
        token = res.json()['token']
        self.tokens[self.user] = token

    def refresh_tokens(self):
        for name in self.tokens:
            self.set_user(name)
            self.refresh_token()

    def save_tokens(self, filename=None):
        if filename is None:
            filename = '.tokens.pickle'
        with open(filename, 'wb') as outfile:
            pickle.dump(self.tokens, outfile)

    def http_method(self, method, path, **kwargs):
        url = os.path.join(self.apiroot, path)
        headers = self.make_headers()
        self.res = getattr(requests, method)(url,
                                             headers=headers,
                                             **kwargs)
        if not self.res.ok:
            raise RuntimeError("{} Error {}".format(
                method.upper(),
                self.res.status_code))
        return self.res.json()

    def get(self, path, params=None):
        return self.http_method('get', path, params=params)

    def put(self, path, data=None):
        return self.http_method('put', path, data=data)

    def post(self, path, json=None, data=None):
        url = os.path.join(self.apiroot, path)
        headers = self.make_headers()
        self.res = requests.post(url,
                                 headers=headers,
                                 json=json,
                                 data=data)
        if not self.res.ok:
            method = 'post'
            raise RuntimeError("{} Error {}".format(
                method.upper(),
                self.res.status_code))
        return self.res.json()
