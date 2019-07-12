import os

from pyramid.security import Allow
from cornice.resource import resource, view
# from pyramid.httpexceptions import HTTPNotFound


from trumpet.views.resourceviews import SimpleModelResource

from ..models.sunny import (
    GeoPosition,
    MapLocation,
    SunnyClient,
    Yard,
    SingleClientJob,
    SingleYardJob,
    )


apiroot = '/api/dev/sunny/crud/{model}'

Model_Map = dict(geoposition=GeoPosition,
                 maplocation=MapLocation,
                 client=SunnyClient,
                 yard=Yard,
                 singleclientjob=SingleClientJob,
                 singleyardjob=SingleYardJob,
                 )




#@resource(collection_path=apiroot, path=os.path.join(apiroot, '{id}'),
#          permission='dbadmin')
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

    def get_model_name(self):
        return self.request.matchdict['model']

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
    
    def __acl__(self):
        # FIXME use better group principal
        return [
            (Allow, 'group:admin', 'sunny_write'),
            (Allow, 'group:boss', 'sunny_write'),
            (Allow, 'group:admin', 'sunny_read'),
            (Allow, 'group:admin', 'sunny_read'),
            (Allow, 'group:worker', 'sunny_read'),
        ]

    @property
    def model_map(self):
        return Model_Map

    def get_model_type(self):
        return self.request.matchdict['model']
