#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""The setup script."""

from setuptools import setup, find_packages

with open('README.rst') as readme_file:
    readme = readme_file.read()

with open('HISTORY.rst') as history_file:
    history = history_file.read()

requirements = [
    'hornstone',
    'trumpet',
    'hattie',
    'gunicorn',
    'Akhet',
    'plaster_pastedeploy',
    'pyramid >= 1.9a',
    'SQLAlchemy',
    'alembic',
    'transaction',
    'zope.sqlalchemy',
    'pyramid_jinja2',
    'pyramid_mako',
    'pyramid_retry',
    'pyramid_tm',
    'pyramid_force_https',
    'waitress',
    'cornice',
    'psycopg2-binary',
    'pyramid_jwt',
    'bcrypt',
    'robobrowser',
    'beautifulsoup4',
    'lxml',
    # testing
    'pyramid_jsonapi',
    'paginate_sqlalchemy',
]

tests_require = [
    'WebTest >= 1.3.1',  # py3 compat
    'pytest',
    'pytest-cov',
]

setup_requirements = [
    'pytest-runner',
    # TODO(umeboshi2): put setup requirements (distutils extensions, etc.) here
]

test_requirements = [
    'WebTest >= 1.3.1',  # py3 compat
    'pytest',
    'pytest-cov',
    # TODO: put package test requirements here
]

setup(
    name='garkbit',
    version='0.1.0',
    description="The waiter at the end of the universe.",
    long_description=readme + '\n\n' + history,
    author="Joseph Rawson",
    author_email='joseph.rawson.works@gmail.com',
    url='https://github.com/umeboshi2/garkbit',
    packages=find_packages(include=['garkbit', 'garkbit.*']),
    entry_points={
        'paste.app_factory': [
            'main = garkbit:main',
        ],
        'console_scripts': [
            'initialize_garkbit_db = garkbit.scripts.initializedb:main',
        ]
    },
    include_package_data=True,
    install_requires=requirements,
    dependency_links=[
        'https://github.com/umeboshi2/hattie/archive/master.tar.gz#egg=hattie'
    ],
    license="UNLICENSED",
    zip_safe=False,
    keywords='garkbit',
    classifiers=[
        'Development Status :: 2 - Pre-Alpha',
        'Intended Audience :: Developers',
        'License :: Public Domain',
        'Natural Language :: English',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
    ],
    test_suite='tests',
    tests_require=test_requirements,
    setup_requires=setup_requirements,
)
