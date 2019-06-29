import os

from pyramid.security import Allow
from cornice.resource import resource
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


apiroot = '/api/dev/sunny/{model}'

Model_Map = dict(geoposition=GeoPosition,
                 maplocation=MapLocation,
                 client=SunnyClient,
                 yard=Yard,
                 singleclientjob=SingleClientJob,
                 singleyardjob=SingleYardJob,
                 )




#@resource(collection_path=apiroot, path=os.path.join(apiroot, '{id}'),
#          permission='dbadmin')
@resource(collection_path=apiroot, path=os.path.join(apiroot, '{id}'))
class ClientView(SimpleModelResource):
    def __init__(self, request, context=None):
        super(ClientView, self).__init__(request, context=context)
        print("MODEL {}", self.model)

    def __acl__bypass(self):
        # FIXME use better group principal
        return [(Allow, 'group:1', 'dbadmin')]

    @property
    def model_map(self):
        return Model_Map

    def get_model_type(self):
        return self.request.matchdict['model']


