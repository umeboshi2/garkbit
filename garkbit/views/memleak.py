import os
import contextlib
import io
# import types

import transaction
from webob import Response
from pympler import muppy
from pympler import summary
from pyramid.security import Allow
from cornice.resource import resource
from pyramid.httpexceptions import HTTPNotFound


from trumpet.views.base import BaseUserViewCallable
from trumpet.views.resourceviews import SimpleModelResource
# from trumpet.views.resourceviews import BaseModelResource
from trumpet.views.resourceviews import BaseResource

from ..models.object_summary import ObjectSummary

apiroot = '/api/dev/memleak/{model}'

Model_Map = dict(summary=ObjectSummary)


@resource(collection_path=apiroot, path=os.path.join(apiroot, '{id}'),
          permission='dbadmin')
class LeakView(SimpleModelResource):
    def __init__(self, request, context=None):
        super(LeakView, self).__init__(request, context=context)
        print("MODEL {}", self.model)

    @property
    def model_map(self):
        return Model_Map

    def __acl__(self):
        # FIXME use better group principal
        return [(Allow, 'group:1', 'dbadmin')]

    def get_objects(self):
        return muppy.get_objects()

    def make_summary(self):
        objects = self.get_objects()
        return summary.summarize(objects)

    def get_model_type(self):
        return self.request.matchdict['model']

    def post_a_summary(self):
        name = self.request.json['name']
        content = self.make_summary()
        with transaction.manager:
            m = self.model()
            m.name = name
            m.content = content
            self.db.add(m)
            self.db.flush()
        return self.serialize_object(m)

    def collection_post(self):
        mtype = self.get_model_type()
        if mtype == 'summary':
            return self.post_a_summary()
        elif mtype == 'foobar':
            return dict(foo='bar')
        else:
            raise HTTPNotFound


@resource(collection_path='/api/dev/memdiff',
          path='/api/dev/memdiff/{id}',
          permission='dbadmin')
class DiffView(BaseResource):
    def __init__(self, request, context=None):
        super(DiffView, self).__init__(request, context=context)

    def __acl__(self):
        # FIXME use better group principal
        return [(Allow, 'group:1', 'dbadmin')]

    def collection_post(self):
        print("REQUEST {}".format(self.request.json))
        sums = []
        for key in 'sum1', 'sum2':
            sums.append(self.request.json[key])
        with transaction.manager:
            query = self.request.dbsession.query(ObjectSummary)
            query = query.filter(ObjectSummary.id.in_(sums))
            query = query.order_by(ObjectSummary.created)
            dbsums = query.all()
        sums = [m.content for m in dbsums]
        diff = summary.get_diff(*sums)
        output = io.StringIO()
        with contextlib.redirect_stdout(output):
            summary.print_(diff)

        # import pdb ; pdb.set_trace()
        return dict(result='testing', output=output.getvalue())


class LeakViewOrig(BaseUserViewCallable):
    def __init__(self, request):
        super(LeakViewOrig, self).__init__(request)
        settings = self.get_app_settings()
        tracker = settings['memory_tracker']
        output = io.StringIO()
        with contextlib.redirect_stdout(output):
            tracker.print_diff()
        res = Response()
        res.headerlist = [('Content-Type', 'text/plain')]
        res.text = output.getvalue()
        self.response = res

    def _get_objects(self):
        return muppy.get_objects()

    def make_summary(self):
        objects = self._get_objects()
        return summary.summarize(objects)
