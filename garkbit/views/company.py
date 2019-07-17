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


worker_root = os.path.join(apiroot, 'worker')


@resource(collection_path=worker_root,
          path=os.path.join(worker_root, '{id}'),
          permission='boss')
class WorkerResource(BaseModelResource):
    model = Worker

    def __permitted_methods__(self):
        return ['collection_post', 'collection_get',
                'get', 'put']

    def __acl__(self):
        acl = [
            (Allow, 'group:boss', 'boss'),
            (Allow, 'group:worker', 'get_worker'),
            ]
        return acl

    def collection_query(self):
        query = self.db.query(self.model)
        return query

    def serialize_object(self, dbobj):
        user = dbobj.user.serialize()
        data = dbobj.serialize()
        data['user'] = user
        #data = dict(id=str(dbobj.id), user=user, status=dbobj.status)
        return data

    @view(permission='get_worker')
    def get(self):
        return super(WorkerResource, self).get()
    
##################################################
# CRUD resource
##################################################
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


##################################################
# potential workers
##################################################
pwroot = os.path.join(apiroot, 'potential-workers')


@resource(collection_path=pwroot, path=os.path.join(pwroot, '{id}'),
          permission='boss')
class PotentialWorkerView(BaseModelResource):
    model = Worker

    def __permitted_methods__(self):
        return ['collection_get']

    def __acl__(self):
        acl = [
            (Allow, 'group:boss', 'boss'),
            ]
        return acl

    def collection_query(self):
        if 'company_id' not in self.request.GET:
            raise HTTPNotAcceptable
        # company_id = self.request.GET['company_id']
        worker_group = self.db.query(Group).filter_by(name='worker').one()
        worker_id_query = self.db.query(self.model.id)
        boss_id_query = self.db.query(Boss.id)
        q_worker_user = self.db.query(UserGroup.user_id)
        q_worker_user = q_worker_user.filter_by(group_id=worker_group.id)
        query = self.db.query(User)
        query = query.filter(User.id.in_(q_worker_user))
        query = query.filter(~User.id.in_(worker_id_query))
        query = query.filter(~User.id.in_(boss_id_query))
        query = query.filter(User.username != 'admin')
        return query


##################################################
# time clock view
##################################################
clock_root = os.path.join(apiroot, 'time-clock')


@resource(collection_path=clock_root,
          path=os.path.join(clock_root, '{id}'),
          permission='punch')
class TimeClockView(BaseModelResource):
    def __permitted_methods__(self):
        return ['collection_post', 'collection_get',
                'put']

    def __acl__(self):
        acl = [
            (Allow, 'group:worker', 'punch'),
            ]
        return acl

    @view(permission='punch')
    def collection_post(self):
        """Worker clocks in."""
        worker = self.db.query(Worker).get(self.request.user.id)
        if worker.status == 'on':
            raise HTTPNotAcceptable
        print("POST: WORKER IS", worker)
        with transaction.manager:
            session = WorkSession()
            session.worker_id = worker.id
            self.db.add(session)
            worker.status = 'on'
            self.db.add(worker)

    def _get_latest_session(self, worker_id):
        q = self.db.query(WorkSession).filter_by(worker_id=worker_id)
        q = q.order_by(desc('start')).limit(1)
        return q.one()

    @view(permission='punch')
    def put(self):
        """Worker clocks out."""
        worker = self.db.query(Worker).get(self.request.user.id)
        print("WORKER CLOCK OUT", worker.serialize())
        if worker.status == 'off':
            raise HTTPNotAcceptable
        print("PUT: WORKER IS", worker)
        # get latest work session
        session = self._get_latest_session(worker.id)
        with transaction.manager:
            session.end = func.now()
            worker.status = 'off'
            self.db.add(session)
            self.db.add(worker)

    @view(permission='punch')
    def collection_get(self):
        worker = self.db.query(Worker).get(self.request.user.id)
        try:
            session = self._get_latest_session(worker.id)
        except NoResultFound:
            session = None
            id = None
        # include session id as the id so that we can PUT when
        # clocking out
        if session is not None:
            id = str(session.id)
            session = session.serialize()
        data = dict(worker=self.serialize_object(worker),
                    session=session,
                    id=id)
        return data
