import os

from cornice.resource import resource
import transaction
from trumpet.views.resourceviews import BaseResource, apiroot
from trumpet.views.resourceviews import BaseModelResource

from ..models.site_document import SiteDocument

from .util import make_resource


site_documents_api_path = os.path.join(apiroot(), 'sitedocuments')


@resource(**make_resource(site_documents_api_path))
class SiteDocumentResource(BaseModelResource):
    model = SiteDocument
    def __permitted_methods__(self):
        return ['collection_get']
    
