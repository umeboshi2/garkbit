import os

from pyramid.security import Allow
from pyramid.httpexceptions import HTTPNotAcceptable
from cornice.resource import resource, view
from sqlalchemy.orm.exc import NoResultFound
import transaction

from trumpet.views.resourceviews import SimpleModelResource
from trumpet.views.resourceviews import BaseModelResource
from ..models.geoposition import GeoPosition
from ..models.sunny import (
    SunnyClient,
    Yard,
    SingleClientJob,
    SingleYardJob,
    YardSession,
    )


apiroot = '/api/dev/sunny/crud/{model}'

Model_Map = dict(geoposition=GeoPosition,
                 client=SunnyClient,
                 yard=Yard,
                 singleclientjob=SingleClientJob,
                 singleyardjob=SingleYardJob,
                 yardsession=YardSession,
                 )


@resource(collection_path=apiroot,
          path=os.path.join(apiroot, '{id}'),
          permission='sunny_write')
class SunnyCrudModelView(SimpleModelResource):
    def __init__(self, request, context=None):
        super(SunnyCrudModelView, self).__init__(request, context=context)
        print("MODEL {}", self.model)

    def __permitted_methods__(self):
        return ['collection_get', 'collection_post',
                'get', 'put']

    def serialize_object(self, dbobj):
        model = self.get_model_name()
        if model == 'yard':
            data = dbobj.serialize()
            data['location'] = dbobj.location.location.serialize()
            data['client'] = dbobj.client.serialize()
            return data
        else:
            return super(SunnyCrudModelView, self).serialize_object(dbobj)

    @view(permission='sunny_read')
    def collection_get(self):
        return super(SunnyCrudModelView, self).collection_get()

    @view(permission='sunny_read')
    def get(self):
        return super(SunnyCrudModelView, self).get()

    def __acl__(self):
        # FIXME use better group principal
        return [
            (Allow, 'group:admin', 'sunny_write'),
            (Allow, 'group:boss', 'sunny_write'),
            (Allow, 'group:admin', 'sunny_read'),
            (Allow, 'group:boss', 'sunny_read'),
            (Allow, 'group:worker', 'sunny_read'),
        ]

    @property
    def model_map(self):
        return Model_Map

    def get_model_name(self):
        return self.request.matchdict['model']


##################################################
# yard clock view
##################################################
clock_root = os.path.join(apiroot, 'yard-clock', '{yard_id}')


@resource(collection_path=clock_root,
          path=os.path.join(clock_root, '{id}'),
          permission='punch')
class YardClockView(BaseModelResource):
    def __acl__(self):
        acl = [
            (Allow, 'group:worker', 'punch'),
            ]
        return acl

    @view(permission='punch')
    def collection_post(self):
        """Worker clocks in."""
        yard_id = self.request.matchdict['yard_id']
        worker = self.db.query(Worker).get(self.request.user.id)
        latest = self._get_latest_session()
        if latest.status == 'on':
            raise HTTPNotAcceptable
        with transaction.manager:
            session = YardSession()
            session.yard_id = yard_id
            session.worker_id = worker.id
            session.status = 'on'
            self.db.add(session)

    def _get_latest_session(self):
        yard_id = self.request.matchdict['yard_id']
        q = self.db.query(YardSession).filter_by(yard_id=yard_id)
        q = q.order_by(desc('start')).limit(1)
        return q.one()

    @view(permission='punch')
    def put(self):
        """Worker clocks out."""
        yard_id = self.request.matchdict['yard_id']
        worker = self.db.query(Worker).get(self.request.user.id)
        # get latest work session
        session = self._get_latest_session(worker.id)
        if session.status == 'off':
            raise HTTPNotAcceptable
        # assert that latest session is same as
        # requested session
        if str(session.id) != self.request.matchdict['id']:
            raise HTTPNotAcceptable
        with transaction.manager:
            session.end = func.now()
            session.status = 'off'
            self.db.add(session)

    @view(permission='punch')
    def collection_get(self):
        yard_id = self.request.matchdict['yard_id']
        try:
            session = self._get_latest_session()
        except NoResultFound:
            session = None
            id = None
        # include session id as the id so that we can PUT when
        # clocking out
        if session is not None:
            id = str(session.id)
            session = session.serialize()
        data = dict(session=session, id=id)
        return data


    
