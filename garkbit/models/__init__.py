import os
from sqlalchemy import engine_from_config
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import configure_mappers
import zope.sqlalchemy

# import or define all models here to ensure they are attached to the
# Base.metadata prior to any initialization routines

# from .mymodel import MyModel  # flake8: noqa
# from . import ebcsv
# from . import hubby

# run configure_mappers after defining all of the models to ensure
# all relationships can be setup
configure_mappers()


def make_local_settings(settings):
    local_settings = dict()
    hattie_dburl = settings.get('hattie_dburl', settings['sqlalchemy.url'])
    local_settings['sqlalchemy.url'] = hattie_dburl
    if 'tm.manager_hook' in settings:
        local_settings['tm.manager_hook'] = settings['tm.manager_hook']
    return local_settings


def get_engine(settings, prefix='sqlalchemy.'):
    return engine_from_config(settings, prefix)


def get_session_factory(engine):
    factory = sessionmaker()
    factory.configure(bind=engine)
    return factory


def get_tm_session(session_factory, transaction_manager):
    """
    Get a ``sqlalchemy.orm.Session`` instance backed by a transaction.

    This function will hook the session to the transaction manager which
    will take care of committing any changes.

    - When using pyramid_tm it will automatically be committed or aborted
      depending on whether an exception is raised.

    - When using scripts you should wrap the session in a manager yourself.
      For example::

          import transaction

          engine = get_engine(settings)
          session_factory = get_session_factory(engine)
          with transaction.manager:
              dbsession = get_tm_session(session_factory, transaction.manager)

    """
    dbsession = session_factory()
    zope.sqlalchemy.register(
        dbsession, transaction_manager=transaction_manager)
    return dbsession


def includeme(config):
    """
    Initialize the model for a Pyramid app.

    Activate this setup using ``config.include('garkbit.models')``.

    """
    settings = config.get_settings()
    environment = settings.get('environment', 'development')
    if environment == 'production':
        url = os.environ['DATABASE_URL']
        settings['sqlalchemy.url'] = url
    settings['tm.manager_hook'] = 'pyramid_tm.explicit_manager'

    # use pyramid_tm to hook the transaction lifecycle to the request
    config.include('pyramid_tm')

    # use pyramid_retry to retry a request when transient exceptions occur
    config.include('pyramid_retry')

    session_factory = get_session_factory(get_engine(settings))
    config.registry['dbsession_factory'] = session_factory

    # make request.dbsession available for use in Pyramid
    config.add_request_method(
        # r.tm is the transaction manager used by pyramid_tm
        lambda r: get_tm_session(session_factory, r.tm),
        'dbsession',
        reify=True
    )

    local_settings = make_local_settings(settings)
    local_session_factory = get_session_factory(get_engine(local_settings))
    config.registry['local_dbsession_factory'] = session_factory

    # make request.dbsession available for use in Pyramid
    config.add_request_method(
        # r.tm is the transaction manager used by pyramid_tm
        lambda r: get_tm_session(local_session_factory, r.tm),
        'local_dbsession',
        reify=True
    )
