import os

from pyramid.security import Allow
from cornice.resource import resource
from trumpet.views.resourceviews import apiroot
from trumpet.views.resourceviews import BaseModelResource

from ..models.site_document import SiteDocument


site_documents_api_path = os.path.join(apiroot(), 'sitedocuments')
doc_path = os.path.join(apiroot(), 'sitedocuments')


@resource(collection_path=doc_path,
          path=os.path.join(doc_path, '{id}'),
          permission='admin')
class SiteDocumentResource(BaseModelResource):
    model = SiteDocument

    def __permitted_methods__(self):
        return ['collection_get', 'collection_post',
                'get', 'put', 'delete']

    def __acl__(self):
        acl = [
            (Allow, 'group:admin', 'admin')
            ]
        return acl

