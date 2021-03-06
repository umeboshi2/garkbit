#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""The setup script."""

from setuptools import setup, find_packages

with open('README.rst') as readme_file:
    readme = readme_file.read()

with open('HISTORY.rst') as history_file:
    history = history_file.read()

requirements = [
    'Akhet',
    'alembic',
    'GeoAlchemy2',
    'gunicorn',
    'hattie>=0.2.23',
    'Pympler>=0.7',
    'pyramid_jinja2',
    'pyramid_retry',
    'pyramid_force_https',
    'pyramid_jwt',
    'trumpet>=0.2.11',
    'WSGIProxy2>=0.4.6',
    # testing
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

console_scripts = [
    'initialize_garkbit_db = garkbit.scripts.initializedb:main',
    'initialize_garkbit_localdb = garkbit.scripts.initializelocaldb:main',
    'garkbit_refresh_tokens = garkbit.scripts.refresh_tokens:main',
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
        'console_scripts': console_scripts
    },
    include_package_data=True,
    install_requires=requirements,
    dependency_links=[],
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
