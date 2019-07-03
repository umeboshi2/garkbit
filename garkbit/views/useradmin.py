import os
# from configparser import ConfigParser
# from datetime import datetime
# from urllib.error import HTTPError

from cornice.resource import resource
# from cornice.resource import view
# from pyramid.response import Response
# from pyramid.httpexceptions import HTTPNotFound, HTTPFound, HTTPForbidden
# from sqlalchemy.orm.exc import NoResultFound
from pyramid.security import Allow, Authenticated
import transaction
# import requests
from alchemyjsonschema import SchemaFactory
from alchemyjsonschema import NoForeignKeyWalker

# from hornstone.alchemy import TimeStampMixin
# from trumpet.views.resourceviews import BaseResource
from trumpet.views.resourceviews import SimpleModelResource
from trumpet.util import encrypt_password

from ..models.usergroup import USERMODELS

APIROOT = '/api/dev/bapi'
modelpath = os.path.join(APIROOT, 'useradmin', '{model}')


@resource(collection_path=modelpath,
          path=os.path.join(modelpath, '{id}'),
          permission='useradmin')
class GenericView(SimpleModelResource):
    def __init__(self, request, context=None):
        super(GenericView, self).__init__(request, context=context)
        self.factory = SchemaFactory(NoForeignKeyWalker)

    @property
    def model_map(self):
        return USERMODELS

    def __acl__(self):
        return [(Allow, Authenticated, 'useradmin')]

    def collection_post_user(self):
        with transaction.manager:
            m = self.model()
            for field in self.request.json:
                value = self.request.json[field]
                if type(value) is dict:
                    print("value of field {} is dict".format(field))
                setattr(m, field, value)
            # FIXME: add better password here
            m.password = encrypt_password('1234')
            self.db.add(m)
            self.db.flush()
        return self.serialize_object(m)

    def collection_post_generic(self):
        with transaction.manager:
            m = self.model()
            for field in self.request.json:
                value = self.request.json[field]
                if type(value) is dict:
                    print("value of field {} is dict".format(field))
                setattr(m, field, value)
            # FIXME
            if hasattr(m, 'user_id'):
                m.user_id = self.request.user.id
            self.db.add(m)
            self.db.flush()
        return self.serialize_object(m)

    def collection_post(self):
        model = self.request.matchdict['model']
        if model == 'users':
            return self.collection_post_user()
        else:
            return self.collection_post_generic()
