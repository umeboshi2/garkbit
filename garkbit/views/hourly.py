import os
from datetime import datetime

from pyramid.security import Allow
from pyramid.security import Authenticated
from cornice.resource import resource
# from pyramid.httpexceptions import HTTPNotFound
import transaction
from sqlalchemy import desc

from trumpet.views.resourceviews import SimpleModelResource
from trumpet.views.resourceviews import BaseModelResource

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
        print("in collection_post_worker+++++++++++++++++++++++")
        with transaction.manager:
            mtype = self.model
            print("MODEL__________{}".format(mtype))
            data = self.request.json
            print("DATA++++++++++++{}".format(data))
            worker = Worker()
            worker.id = self.request.json['id']
            self.db.add(worker)
        
        #import pdb ; pdb.set_trace()
        
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
            print("collection_get", 'workers')
            data = super(HourlyCrudView, self).collection_get()
            print("collection_get DATA", data)
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


clock_root = os.path.join(apiroot, 'time-clock')


@resource(collection_path=clock_root, path=os.path.join(clock_root, '{id}'))
class TimeClockView(BaseModelResource):
    def collection_post(self):
        worker = self.db.query(Worker).get(self.request.user.id)
        print("POST: WORKER IS", worker)
        with transaction.manager:
            session = WorkSession()
            session.worker_id = worker.id
            self.db.add(session)
            worker.status = 'on'
            self.db.add(worker)

    def _get_latest_session(self, worker_id):
        # get latest work session
        q = self.db.query(WorkSession).filter_by(worker_id=worker_id)
        #q = q.order_by('start desc').limit(1)
        #q = q.order_by('start desc').limit(1)
        q = q.order_by(desc('start')).limit(1)
        return q.one()
        
    def put(self):
        worker = self.db.query(Worker).get(self.request.user.id)
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
        return session.serialize()
    
            
        
