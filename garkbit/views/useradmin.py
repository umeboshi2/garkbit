import os
# from configparser import ConfigParser
# from datetime import datetime
# from urllib.error import HTTPError

from cornice.resource import resource
# from cornice.resource import view

# from cornice.resource import view
# from pyramid.response import Response
# from pyramid.httpexceptions import HTTPNotFound, HTTPFound, HTTPForbidden
from sqlalchemy.orm.exc import NoResultFound
from pyramid.security import Allow
# from pyramid.security import Deny, Everyone, Authenticated
import transaction
# import requests
# from alchemyjsonschema import SchemaFactory
# from alchemyjsonschema import NoForeignKeyWalker

# from hornstone.alchemy import TimeStampMixin
# from trumpet.views.resourceviews import BaseResource
from trumpet.views.resourceviews import SimpleModelResource
from trumpet.views.resourceviews import BaseResource
from trumpet.util import encrypt_password

from ..models.usergroup import USERMODELS
from ..models.usergroup import UserGroup

APIROOT = '/api/dev/useradmin'
modelpath = os.path.join(APIROOT, 'crud', '{model}')


@resource(collection_path=modelpath,
          path=os.path.join(modelpath, '{id}'),
          permission='useradmin')
class GenericView(SimpleModelResource):
    def __init__(self, request, context=None):
        super(GenericView, self).__init__(request, context=context)
        # self.factory = SchemaFactory(NoForeignKeyWalker)

    @property
    def model_map(self):
        return USERMODELS

    def __permitted_methods__(self):
        return ['collection_get', 'collection_post',
                'get', 'post', 'put', 'delete']

    def __acl__(self):
        return [(Allow, 'group:admin', 'useradmin')]

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
            self.db.add(m)
            self.db.flush()
        return self.serialize_object(m)

    def collection_post(self):
        model = self.request.matchdict['model']
        if model == 'users':
            return self.collection_post_user()
        else:
            return self.collection_post_generic()

    def serialize_object_for_collection_query(self, dbobj):
        model = self.request.matchdict['model']
        if model == 'users':
            data = dbobj.serialize()
            data['groups'] = [g.serialize() for g in dbobj.groups]
            return data
        else:
            instance = super(GenericView, self)
            return instance.serialize_object_for_collection_query(dbobj)

    def serialize_object(self, dbobj):
        model = self.request.matchdict['model']
        if model == 'users':
            data = dbobj.serialize()
            data['groups'] = [g.serialize() for g in dbobj.groups]
            return data
        else:
            return super(GenericView, self).serialize_object(dbobj)


usergroup_path = os.path.join(APIROOT, 'usergroup')


@resource(collection_path=usergroup_path,
          path=os.path.join(usergroup_path, '{gid}', '{uid}'),
          permission='useradmin')
class UserGroupResource(BaseResource):
    def __init__(self, request, context=None):
        super(UserGroupResource, self).__init__(request, context=context)

    def __acl__(self):
        return [(Allow, 'group:admin', 'useradmin')]

    def _get_model(self):
        group_id = self.request.matchdict['gid']
        user_id = self.request.matchdict['uid']
        query = self.request.dbsession.query(UserGroup)
        query = query.filter_by(group_id=group_id)
        query = query.filter_by(user_id=user_id)
        return query.one()

    def get(self):
        model = self._get_model()
        return model.serialize()

    def put(self):
        model_present = True
        try:
            model = self._get_model()
        except NoResultFound:
            model_present = False
        if model_present:
            raise RuntimeError("We are supposed to be abusing PUT")
        with transaction.manager:
            model = UserGroup()
            model.group_id = self.request.matchdict['gid']
            model.user_id = self.request.matchdict['uid']
            self.request.dbsession.add(model)
            self.request.dbsession.flush()
        return model.serialize()

    def delete(self):
        with transaction.manager:
            model = self._get_model()
            self.request.dbsession.delete(model)
        return dict(result="success")
