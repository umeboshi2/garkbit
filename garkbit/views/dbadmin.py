import os
import io
import lzma
import json

# from pyramid.view import view_config
from cornice.resource import resource
import transaction

# from trumpet.views.resourceviews import BaseResource
from trumpet.views.resourceviews import apiroot
from trumpet.views.resourceviews import BaseModelResource
from trumpet.views.base import BaseUserViewCallable

from ..models.mymodel import SiteDocument
from ..models.mymodel import WikiPage
from ..models.mymodel import Todo

from .util import make_resource


APIROOT = os.path.join(apiroot(), 'dbadmin', '{model}')


def export_models(session, models):
    data = dict()
    output = io.BytesIO()
    with transaction.manager:
        with lzma.LZMAFile(output, 'w') as zfile:
            q = session.query(model)
            name = model.__name__
            print("Dumping {}".format(name))
            mlist = [m.serialize() for m in q]
            data[name] = mlist
            print("Exported {}".format(name))
            content = json.dumps(data).encode()
            zfile.write(content)
    del data
    return output.getvalue()


@resource(**make_resource(APIROOT))
class DbAdminResource(BaseModelResource):
    def __init__(self, request, context=None):
        super(DbAdminResource, self).__init__(request, context=context)
        self.limit = None
        self.max_limit = None
        self._use_pagination = False

    @property
    def model(self):
        return self.model_map.get(self.request.matchdict['model'])

    @property
    def model_map(self):
        return dict(wikipage=WikiPage, todo=Todo,
                    sitedoc=SiteDocument)

    def collection_get(self):
        print("DB", self.db)
        print("MODEL", self.model)
        return super(DbAdminResource, self).collection_get()


class WikipageDbadmin(BaseUserViewCallable):
    pass
