import os
from datetime import datetime

from dateutil.parser import parse as dateparse
from pyramid.security import Allow
from pyramid.security import Authenticated
from pyramid.view import view_config
from cornice.resource import resource
from cornice.resource import view
# from pyramid.httpexceptions import HTTPNotFound
from pyramid.httpexceptions import HTTPNotAcceptable

import transaction
from sqlalchemy import desc

from trumpet.views.base import BaseViewCallable
from trumpet.views.resourceviews import SimpleModelResource
from trumpet.views.resourceviews import BaseModelResource
from trumpet.views.util import get_start_end_from_request

from ..models.hourly import (
    Worker,
    WorkSession,
    )

from ..models.usergroup import User


Model_Map = dict(workers=Worker,
                 worksessions=WorkSession,)

apiroot = '/api/dev/hourly/'
crudroot = os.path.join(apiroot, 'crud/{model}')


@resource(collection_path=crudroot, path=os.path.join(crudroot, '{id}'),
          permission='worker')
class HourlyCrudView(SimpleModelResource):
    def __init__(self, request, context=None):
        super(HourlyCrudView, self).__init__(request, context=context)
        #print("MODEL {}", self.model)

    def __acl__(self):
        # FIXME use better group principal
        acl = [(Allow, Authenticated, 'worker')]
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

    def get_worker(self):
        s = self.db
        print("Session {}".format(s))

    def post_worker(self):
        with transaction.manager:
            m = self.model()
            for field in self.request.json:
                value = self.request.json[field]
                setattr(m, field, value)
            self.db.add(m)
            self.db.flush()
        return self.serialize_object(m)

    def collection_post_worker(self):
        with transaction.manager:
            worker = Worker()
            worker.id = self.request.json['id']
            self.db.add(worker)

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



##################################################
# potential workers
##################################################

pwroot = os.path.join(apiroot, 'potential-workers')


@resource(collection_path=pwroot, path=os.path.join(pwroot, '{id}'))
class PotentialWorkerView(BaseModelResource):
    model = Worker

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


@resource(collection_path=clock_root, path=os.path.join(clock_root, '{id}'))
class TimeClockView(BaseModelResource):
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
            session.end = datetime.now()
            worker.status = 'off'
            self.db.add(session)
            self.db.add(worker)

    def collection_get(self):
        worker = self.db.query(Worker).get(self.request.user.id)
        session = self._get_latest_session(worker.id)
        # include session id as the id so that we can PUT when
        # clocking out
        data = dict(worker=self.serialize_object(worker),
                    session=session.serialize(),
                    id=str(session.id))
        return data


##################################################
# calendar view
##################################################
calendar_root = os.path.join(apiroot, 'calendar')


# json view for calendar
#@view_config(
class SessionCalendarView(BaseViewCallable):
    def __init__(self, request):
        super(SessionCalendarView, self).__init__(request)
        self.get_ranged_worksessions()

    def _get_bare_start_end(self):
        start = self.request.GET['start']
        end = self.request.GET['end']
        print("START, END", start, end)
        return start, end

    def _get_start_end_from_request(self, timestamps):
        start, end = self._get_bare_start_end()
        if not timestamps:
            start = dateparse(start)
            end = dateparse(end)
        return start, end

    def _range_filter(self, query, start, end):
        query = query.filter(WorkSession.start >= start)
        query = query.filter(WorkSession.end <= end)
        return query

    # json responses should not be lists
    # this method is for the fullcalendar
    # widget. Fullcalendar v2 uses yyyy-mm-dd
    # for start and end parameters, rather than
    # timestamps.
    def get_ranged_worksessions(self, timestamps=False):
        start, end = self._get_start_end_from_request(timestamps)
        start, end = get_start_end_from_request(self.request)
        query = self.request.dbsession.query(WorkSession)
        query = self._range_filter(query, start, end)
        self.data = [s.serialize() for s in query]
