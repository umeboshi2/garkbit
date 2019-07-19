import os
# from configparser import ConfigParser
# from datetime import datetime
from urllib.error import HTTPError

# from pyramid.view import view_config, view_defaults
from cornice.resource import resource, view
# from bs4 import BeautifulSoup

# from pyramid.view import view_config
# from pyramid.view import view_defaults
# from pyramid.httpexceptions import HTTPNotFound
# from pyramid.httpexceptions import HTTPFound
# from pyramid.httpexceptions import HTTPForbidden

from pyramid.security import Allow
from pyramid.security import Everyone, Authenticated
from sqlalchemy.orm.exc import NoResultFound
import transaction

from trumpet.views.resourceviews import BaseResource

from ..models.wikipage import WikiPage
from ..scrapers.wikipedia import WikiCollector, cleanup_wiki_page


APIROOT = '/api/dev/bsapi'

rscroot = os.path.join(APIROOT, 'main')

wiki_path = os.path.join(rscroot, 'wikipages')

last_modified_format = "%a, %d %b %Y %H:%M:%S %Z"


class BaseManager(object):
    def __init__(self, session):
        self.session = session

    def query(self):
        return self.session.query(self.dbmodel)

    def get(self, id):
        return self.query().get(id)


class GetByNameManager(BaseManager):
    def get_by_name_query(self, name):
        return self.query().filter_by(name=name)

    def get_by_name(self, name):
        q = self.get_by_name_query(name)
        try:
            return q.one()
        except NoResultFound:
            return None


class WikiPageManager(GetByNameManager):
    dbmodel = WikiPage


@resource(collection_path=wiki_path,
          path=os.path.join(wiki_path, '{name}'),
          permission='wikipages')
class WikiPageView(BaseResource):
    def __init__(self, request, context=None):
        super(WikiPageView, self).__init__(request, context=context)
        self.mgr = WikiPageManager(self.db)
        self.wikicollector = WikiCollector(format='json')
        self.limit = 10
        print("EFFP {}".format(self.request.effective_principals))

    def __permitted_methods__(self):
        return ['collection_get', 'get']

    def __acl__(self):
        return [(Allow, Everyone, 'list'),
                (Allow, Authenticated, 'wikipages')]

    def collection_query(self):
        return self.db.query(WikiPage.id, WikiPage.name,
                             WikiPage.created, WikiPage.updated)

    @view(permission='list')
    def collection_get(self):
        return super(WikiPageView, self).collection_get()

    def serialize_object_for_collection_query(self, dbobj):
        data = {}
        for key in dbobj.keys():
            data[key] = getattr(dbobj, key)
        data['id'] = str(dbobj.id)
        return data

    def serialize_object(self, dbobj):
        obj = super(WikiPageView, self).serialize_object(dbobj)
        obj['id'] = str(dbobj.id)
        return obj

    def get(self):
        name = self.request.matchdict['name']
        print("NAME IS", name)
        p = self.mgr.get_by_name(name)
        print("P IS", p)
        if p is None:
            try:
                data = self.wikicollector.get_wiki_page(name)
            except HTTPError as e:  # noqa: F841
                data = None
            print("data is", data)
            if data is not None:
                with transaction.manager:
                    p = WikiPage()
                    p.name = name
                    p.original = data['content']
                    soup = cleanup_wiki_page(data['content'])
                    p.content = str(soup.body)
                    self.db.add(p)
                p = self.db.merge(p)
                return self.serialize_object(p)
            else:
                return dict(status='error')
        return self.serialize_object(p)
