import os
import json
import datetime

# from paste.deploy.converters import asbool
from pyramid.config import Configurator
from pyramid.authorization import ACLAuthorizationPolicy
from pyramid.renderers import JSON

from pympler import tracker

from .util import groupfinder


def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    # memory tracker
    settings['memory_tracker'] = tracker.SummaryTracker()
    config = Configurator(settings=settings)
    config.include('.models')

    renderer = JSON()
    renderer.add_adapter(datetime.date, lambda obj, request: obj.isoformat())
    config.add_renderer('json', renderer)

    here = os.path.dirname(__file__)
    stats_filename = os.path.join(here, 'dist', 'entrypoints.json')
    if os.path.isfile(stats_filename):
        with open(stats_filename) as infile:
            stats = json.load(infile)
    else:
        stats = dict(
            entrypoints=dict(index=dict(assets=list()),
                             admin=dict(assets=list())))
    config.add_request_method(
        lambda r: stats,
        'webpack_entrypoints',
        reify=True
        )

    favicon_stats = os.path.join(here, 'dist', 'favicon-stats.json')
    if os.path.isfile(favicon_stats):
        with open(favicon_stats) as infile:
            iconstats = json.load(infile)
    else:
        iconstats = dict(html=list())
    config.add_request_method(
        lambda r: iconstats,
        'favicon_stats',
        reify=True
        )

    # FIXME make tests
    JWT_SECRET = os.environ.get('JWT_SECRET', 'secret')
    config.set_jwt_authentication_policy(JWT_SECRET,
                                         callback=groupfinder)

    authz_policy = ACLAuthorizationPolicy()
    config.set_authorization_policy(authz_policy)

    config.include('.routes')

    # config.set_request_property is removed in pyramid > 1.9
    # config.set_request_property('.util.get_user', 'user', reify=True)

    config.add_request_method('.util.get_user', 'user', reify=True)
    application = config.make_wsgi_app()
    # add wsgi middleware here

    return application
