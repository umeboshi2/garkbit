from configparser import ConfigParser
from io import StringIO

from sqlalchemy import Column
from sqlalchemy import Integer, Boolean
from hornstone.models.usergroup import UserMixin, GroupMixin, UserGroupMixin

from .meta import Base

# imports for populate()
import transaction
from sqlalchemy.exc import IntegrityError


class User(Base, UserMixin):
    def __init__(self, name=None):
        self.username = name


class Group(Base, GroupMixin):
    def __init__(self, name=None):
        self.name = name


class UserGroup(Base, UserGroupMixin):
    def __init__(self, gid=None, uid=None):
        self.group_id = gid
        self.user_id = uid


USERMODELS = dict(users=User, groups=Group,
                  UserGroup=UserGroup)


def populate_groups(session):
    groups = ['admin', 'editor', 'manager']
    for gname in groups:
        try:
            with transaction.manager:
                group = Group(gname)
                session.add(group)
        except IntegrityError:
            pass


def populate_users(session, admin_username='admin'):
    from trumpet.util import encrypt_password
    with transaction.manager:
        users = [admin_username]
        # Using id_count to presume
        # the user's id, which should work
        # when filling an empty database.
        for uname in users:
            user = User(uname)
            user.password = encrypt_password(uname)
            user.fullname = "Admin User"
            session.add(user)


def populate_usergroups(session, admin_username='admin'):
    with transaction.manager:
        admin_groupname = 'admin'
        user = session.query(User).filter_by(username=admin_username).one()
        group = session.query(Group).filter_by(name=admin_groupname).one()
        ulist = [(group.id, user.id)]
        for gid, uid in ulist:
            row = UserGroup(gid, uid)
            session.add(row)


def populate(session, admin_username='admin'):
    # populate groups
    try:
        populate_groups(session)
    except IntegrityError:
        transaction.abort()
    # populate users
    try:
        populate_users(session, admin_username=admin_username)
    except IntegrityError:
        transaction.abort()
    # add users to groups
    try:
        populate_usergroups(session)
    except IntegrityError:
        transaction.abort()
