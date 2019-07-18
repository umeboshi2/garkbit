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

from ..models.hourly import (
    HourlyWorker as Worker,
    HourlyWorkSession as WorkSession,
    )

from ..models.usergroup import User, Group, UserGroup


Model_Map = dict(workers=Worker,
                 worksessions=WorkSession,)

apiroot = '/api/dev/hourly/'
crudroot = os.path.join(apiroot, 'crud/{model}')


@resource(collection_path=crudroot, path=os.path.join(crudroot, '{id}'),
          permission='boss')
class HourlyCrudView(SimpleModelResource):
    def __init__(self, request, context=None):
        super(HourlyCrudView, self).__init__(request, context=context)

    def __permitted_methods__(self):
        return ['collection_get', 'get']

    def __acl__(self):
        # FIXME use better group principal
        acl = [(Allow, 'group:worker', 'worker'),
               (Allow, 'group:boss', 'boss'),
               (Allow, 'group:boss', 'worker')]
        return acl

    @property
    def model_map(self):
        return Model_Map

    def get_model_name(self):
        return self.request.matchdict['model']

    def serialize_object(self, dbobj):
        model = self.get_model_name()
        if model == 'workers':
            user = dbobj.user.serialize()
            data = dict(id=str(dbobj.id), user=user, status=dbobj.status)
            return data

    def collection_post_worker(self):
        db = self.request.dbsession
        with transaction.manager:
            worker = Worker()
            user_id = self.request.json['id']
            worker.id = user_id
            group = db.query(Group).filter_by(name='worker').one()
            usergroup = UserGroup(group.id, user_id)
            db.add(usergroup)
            db.add(worker)

    def collection_post(self):
        model = self.request.matchdict['model']
        if model == 'workers':
            return self.collection_post_worker()
        else:
            return super(HourlyCrudView, self).collection_post()

    def serialize_object_for_collection_query(self, dbobj):
        if self.model is Worker:
            return self.serialize_object(dbobj)

    def collection_get(self):
        model = self.request.matchdict['model']
        if model == 'workers':
            data = super(HourlyCrudView, self).collection_get()
            return data

    @view(permission='worker')
    def get(self):
        return super(HourlyCrudView, self).get()


##################################################
# potential workers
##################################################
pwroot = os.path.join(apiroot, 'potential-workers')


@resource(collection_path=pwroot, path=os.path.join(pwroot, '{id}'),
          permission='boss')
class HourlyPotentialWorkerView(BaseModelResource):
    model = Worker

    def __permitted_methods__(self):
        return ['collection_get']

    def __acl__(self):
        acl = [
            (Allow, 'group:boss', 'boss'),
            ]
        return acl

    def collection_query(self):
        subquery = self.db.query(self.model.id)
        query = self.db.query(User)
        query = query.filter(~User.id.in_(subquery))
        # FIXME get admin username from settings
        query = query.filter(User.username != 'admin')
        return query


##################################################
# time clock view
##################################################
clock_root = os.path.join(apiroot, 'time-clock')


@resource(collection_path=clock_root,
          path=os.path.join(clock_root, '{id}'),
          permission='punch')
class HourlyTimeClockView(BaseModelResource):
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


##################################################
# calendar view
##################################################
calendar_root = os.path.join(apiroot, 'calendar')


@resource(collection_path=calendar_root,
          path=os.path.join(calendar_root, '{id}'),
          permission='worker')
class HourlySessionCalendarView(BaseModelResource):
    def __permitted_methods__(self):
        return ['collection_get']

    def __acl__(self):
        acl = [
            (Allow, 'group:worker', 'worker'),
            (Allow, 'group:boss', 'worker'),
            ]
        return acl

    def _range_filter(self, query, start, end):
        query = query.filter(WorkSession.start >= start)
        query = query.filter(WorkSession.end <= end)
        return query

    # json responses should not be lists
    # this method is for the fullcalendar
    # widget. Fullcalendar v2 uses yyyy-mm-dd
    # for start and end parameters, rather than
    # timestamps.
    def get_ranged_worksessions(self, worker_ids=None):
        start, end = get_start_end_from_request(self.request)
        if worker_ids is None:
            worker_ids = [self.request.user.id]
        query = self.request.dbsession.query(WorkSession)
        query = self._range_filter(query, start, end)
        query = query.filter(WorkSession.worker_id.in_(worker_ids))
        return [s.serialize() for s in query]

    def collection_get(self):
        return self.get_ranged_worksessions()
