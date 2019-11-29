
from contextlib import suppress
from transaction.interfaces import NoTransaction
from webtest import TestApp as ShellApp


def setup(env):
    request = env['request']
    request.host = 'www.example.com'
    request.scheme = 'https'

    env['testapp'] = ShellApp(env['app'])

    # start a transaction which can be used in the shell
    request.tm.begin()

    # if using the SQLAlchemy backend from our cookiecutter, the dbsession is
    # connected to the transaction manager above
    env['tm'] = request.tm
    env['dbsession'] = request.dbsession
    try:
        yield

    finally:
        with suppress(NoTransaction):
            request.tm.abort()


def mysetup(env):
    print("setup called---->{}".format(env))
