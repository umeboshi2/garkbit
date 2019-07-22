import os
import argparse
import pickle
import requests


from pyramid.paster import (
    get_appsettings,
    setup_logging,
    )


def login(name, passwords):
    login_data = dict(
        username=name,
        password=passwords.get(name)
    )
    url = os.path.join(rootUrl, 'login')
    res = requests.post(url, data=login_data)
    if not res.ok:
        raise RuntimeError("Something bad happened.")
    return res.json()


def make_headers(token):
    headers = {
        "Accept": "application/json, text/javascript, */*",
        "Authorization": "Bearer {}".format(token),
    }
    return headers


def refresh_token(tokens, name):
    headers = make_headers(tokens[name])
    url = os.path.join(rootUrl, 'auth/refresh')
    res = requests.get(url, headers=headers)
    return res.json()['token']


def save_tokens(tokens, filename):
    with open(filename, 'wb') as outfile:
        pickle.dump(tokens, outfile)


def make_initial_tokens(filename):
    tokens = dict()
    for name in passwords:
        data = login(name, passwords)
        tokens[name] = data['token']
    return tokens


def refresh_tokens(tokens, filename):
    new_tokens = dict()
    for name in tokens:
        print("Refreshing {}".format(name))
        new_tokens[name] = refresh_token(tokens, name)
    save_tokens(new_tokens, filename)


def main():
    parser = argparse.ArgumentParser(description='get otr')
    parser.add_argument('inifile',
                        help="inifile to use")
    args = parser.parse_args()
    settings = get_appsettings(args.inifile)
    setup_logging(args.inifile)

    global passwords, rootUrl
    rootUrl = settings.get('rootUrl', 'http://localhost:8081')
    passwords_filename = settings.get('passwords_filename', 'passwords.pickle')
    if not os.path.isfile(passwords_filename):
        raise RuntimeError("You need to create {}.".format(passwords_filename))
    passwords = pickle.load(open(passwords_filename, 'rb'))

    tokens_filename = settings.get('tokens_filename', 'tokens.pickle')
    if os.path.isfile(tokens_filename):
        TOKENS = pickle.load(open(tokens_filename, 'rb'))
    else:
        print("No {} available.".format(tokens_filename))
        TOKENS = make_initial_tokens(tokens_filename)
        save_tokens(TOKENS, tokens_filename)
    if not os.path.isfile(tokens_filename):
        raise RuntimeError("Unable to locate {}".format(tokens_filename))
    TOKENS = pickle.load(open(tokens_filename, 'rb'))
    refresh_tokens(TOKENS, tokens_filename)
