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
