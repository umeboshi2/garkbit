import os
from datetime import datetime

from dateutil.parser import parse as dateparse
from pyramid.security import Allow
from pyramid.security import Authenticated
# from pyramid.view import view_config
from cornice.resource import resource
from cornice.resource import view
# from pyramid.httpexceptions import HTTPNotFound
from pyramid.httpexceptions import HTTPNotAcceptable

import transaction
from sqlalchemy import desc
from sqlalchemy import func
from sqlalchemy.orm.exc import NoResultFound

from trumpet.views.base import BaseViewCallable
from trumpet.views.resourceviews import SimpleModelResource
from trumpet.views.resourceviews import BaseModelResource
from trumpet.views.util import get_start_end_from_request

from ..models.company import (
    Boss,
    Company,
    Worker,
    WorkSession,
    )

# from ..models.usergroup import User, Group, UserGroup

apiroot = '/api/dev/company'


boss_root = os.path.join(apiroot, 'boss')


@resource(collection_path=boss_root,
          path=os.path.join(boss_root, '{id}'),
          permission='boss')
class BossResource(BaseModelResource):
    model = Boss

    def __permitted_methods__(self):
        return ['collection_post',
                'get', 'put']

    def __acl__(self):
        acl = [
            (Allow, 'group:boss', 'boss'),
            ]
        return acl


company_root = os.path.join(apiroot, 'company')


@resource(collection_path=company_root,
          path=os.path.join(company_root, '{id}'),
          permission='boss')
class CompanyResource(BaseModelResource):
    model = Company

    def __permitted_methods__(self):
        return ['collection_post', 'collection_get',
                'get', 'put']

    def __acl__(self):
        acl = [
            (Allow, 'group:boss', 'boss'),
            ]
        return acl

    def collection_query(self):
        query = self.db.query(self.model)
        query = query.filter_by(boss_id=self.request.authenticated_userid)
        return query


Model_Map = dict(boss=Boss, company=Company, worker=Worker,
                 worksession=WorkSession)
crudroot = os.path.join(apiroot, 'crud/{model}')


@resource(collection_path=crudroot,
          path=os.path.join(crudroot, '{id}'),
          permission='admin')
class CompanyCrudView(SimpleModelResource):
    model_map = Model_Map

    def __permitted_methods__(self):
        return ['collection_get', 'collection_post',
                'get']

    def __acl__(self):
        acl = [
            (Allow, 'group:admin', 'admin'),
            ]
        return acl

    def get_model_name(self):
        return self.request.matchdict['model']

    def serialize_object(self, dbobj):
        model = self.get_model_name()
        if model == 'worker':
            user = dbobj.user.serialize()
            data = dict(id=str(dbobj.id), user=user, status=dbobj.status)
            return data
        else:
            return super(CompanyCrudView, self).serialize_object(dbobj)
        

    
