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

from ..models.usergroup import User, Group, UserGroup


Model_Map = dict(boss=Boss, company=Company, worker=Worker,
                 worksession=WorkSession)

apiroot = '/api/dev/company'
crudroot = os.path.join(apiroot, 'crud/{model}')

class CompanyCrudView(SimpleModelResource):
    def __permitted_methods__(self):
        return ['collection_get', 'get']

    def __acl__(self):
        acl = [
            (Allow, 'group:admin', 'permission'),
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
            return super(SunnyCrudModelView, self).serialize_object(dbobj)
        

    
