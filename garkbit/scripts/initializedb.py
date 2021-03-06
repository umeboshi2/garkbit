import os
import sys
import transaction

from pyramid.paster import (
    get_appsettings,
    setup_logging,
    )

from pyramid.scripts.common import parse_vars

from ..models.meta import Base
from ..models import (
    get_engine,
    get_session_factory,
    get_tm_session,
    )

from ..models import (  # noqa: F401
    usergroup,
    hourly,
    company,
    wikipage,
    todo,
    site_document,
    geoposition,
    sunny,
    )


def usage(argv):
    cmd = os.path.basename(argv[0])
    print(('usage: %s <config_uri> [var=value]\n'
          '(example: "%s development.ini")' % (cmd, cmd)))
    sys.exit(1)


def main(argv=sys.argv):
    print("running main()")
    if len(argv) < 2:
        usage(argv)
    config_uri = argv[1]
    options = parse_vars(argv[2:])
    setup_logging(config_uri)
    settings = get_appsettings(config_uri, options=options)
    if settings['environment'] == 'production':
        url = os.environ['DATABASE_URL']
        print("Using dburl {}".format(url))
        settings['sqlalchemy.url'] = url

    engine = get_engine(settings)
    Base.metadata.create_all(engine)

    session_factory = get_session_factory(engine)

    with transaction.manager:
        dbsession = get_tm_session(session_factory, transaction.manager)

        usergroup.populate(dbsession)
        user_stuff = """  # noqa: F841
        #admins = Group(group_name="admins")
        #group_permission = GroupPermission(perm_name='root_administration')
        #dbsession.add(admins)
        #admins.permissions.append(group_permission)
        #dbsession.flush()

        #users = Group(group_name="users")
        #dbsession.add(users)
        #dbsession.flush()



        #admin = User(user_name='admin', name='Admin User',
        #            email='admin@localhost')
        #admin = User()
        #admin.user_name = 'admin'
        #admin.email = 'admin@localhost'
        #admin.name = 'Admin User'

        #dbsession.add(admin)
        #dbsession.flush()
        #admin.set_password('admin')
        #admin.regenerate_security_code()
        #admins.users.append(admin)
        #dbsession.flush()

        ADMIN_PERMISSIONS = ['read', 'edit', 'create', 'delete']
        for perm in ADMIN_PERMISSIONS:
            gp = GroupPermission(perm_name=perm,
                                 group_id=admins.id)
            dbsession.add(gp)


        people = [
            dict(user_name='horace', email='rumpole@bailey',
                 name='Horace Rumpole'),
            dict(user_name='hilda', email='hilda@gloucester.flats',
                 name='She who Must be Obeyed'),
            ]
        for person in people:
            u = User()
            for key in person:
                setattr(u, key, person[key])
            u.set_password(u.user_name)
            dbsession.add(u)
            dbsession.flush()
            ug = UserGroup(group_id=users.id, user_id=u.id)
            dbsession.add(ug)
            dbsession.flush()
        """
