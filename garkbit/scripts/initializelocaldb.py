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
    make_local_settings,
    get_engine,
    get_session_factory,
    get_tm_session,
    )

from ..models import hubby  # noqa:F401


def usage(argv):
    cmd = os.path.basename(argv[0])
    print(('usage: %s <config_uri> [var=value]\n'
          '(example: "%s development.ini")' % (cmd, cmd)))
    sys.exit(1)


def main(argv=sys.argv):
    if len(argv) < 2:
        usage(argv)
    config_uri = argv[1]
    options = parse_vars(argv[2:])
    setup_logging(config_uri)
    settings = get_appsettings(config_uri, options=options)

    # if settings['environment'] == 'production':
    #     url = os.environ['DATABASE_URL']
    #     print("Using dburl {}".format(url))
    #     settings['sqlalchemy.url'] = url
    local_settings = make_local_settings(settings)
    local_engine = get_engine(local_settings)
    Base.metadata.create_all(local_engine)

    session_factory = get_session_factory(local_engine)

    with transaction.manager:
        dbsession = get_tm_session(session_factory, transaction.manager)
        print("Populate local database", dbsession)
