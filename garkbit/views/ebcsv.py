import os
# from configparser import ConfigParser
# from datetime import datetime
# from urllib.error import HTTPError

from cornice.resource import resource
from pyramid.response import Response
from pyramid.security import Allow, Authenticated
# from pyramid.httpexceptions import HTTPNotFound, HTTPFound, HTTPForbidden

# from bs4 import BeautifulSoup
# from sqlalchemy.orm.exc import NoResultFound
# import transaction
import requests

# from alchemyjsonschema import SchemaFactory
# from alchemyjsonschema import NoForeignKeyWalker

# from hornstone.alchemy import TimeStampMixin
# from trumpet.views.resourceviews import BaseResource
from trumpet.views.resourceviews import SimpleModelResource

from ..models.ebcsv import EBMODELS

APIROOT = '/api/dev/bapi'

rscroot = os.path.join(APIROOT, 'main')


def get_clzpage(request):
    path = os.path.join(*request.matchdict['path'])
    url = os.path.join('http://core.collecterz.com', path)
    r = requests.get(url)
    return Response(r.content)


modelpath = os.path.join(APIROOT, 'sofi', '{model}')


@resource(collection_path=modelpath,
          path=os.path.join(modelpath, '{id}'),
          permission='ebclz')
class EbClzView(SimpleModelResource):
    def __init__(self, request, context=None):
        super(EbClzView, self).__init__(request, context=context)
        self.limit = 25
        self._use_pagination = True
        # self.factory = SchemaFactory(NoForeignKeyWalker)

    @property
    def model_map(self):
        return EBMODELS

    def __acl__(self):
        return [(Allow, Authenticated, 'ebclz')]
