
import os

from pyramid.security import Allow, Authenticated
from cornice.resource import resource

from trumpet.views.resourceviews import BaseModelResource

# from alchemyjsonschema import SchemaFactory
# from alchemyjsonschema import NoForeignKeyWalker

from ..models.todo import Todo

APIROOT = '/api/dev/bapi'
rscroot = os.path.join(APIROOT, 'main')
modelpath = os.path.join(APIROOT, 'todos')


@resource(collection_path=modelpath,
          path=os.path.join(modelpath, '{id}'),
          permission="todos")
class ModelView(BaseModelResource):
    model = Todo

    def __permitted_methods__(self):
        return ['collection_get', 'collection_post',
                'get', 'put']

    def __init__(self, request, context=None):
        super(ModelView, self).__init__(request, context=context)
        # self.factory = SchemaFactory(NoForeignKeyWalker)

    @property
    def model_map(self):
        return dict(todos=Todo)

    def __acl__(self):
        return [(Allow, Authenticated, 'todos')]
