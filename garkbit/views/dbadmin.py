import os
import io
import base64
import hashlib
import lzma
import json


from pyramid.view import view_config
from pyramid.security import Allow
from pyramid.httpexceptions import HTTPNotFound
from cornice.resource import resource
import transaction

from hornstone.alchemy import export_models
# from trumpet.views.resourceviews import BaseResource
from trumpet.views.resourceviews import apiroot
from trumpet.views.resourceviews import BaseModelResource
from trumpet.views.base import BaseUserViewCallable


from ..models.usergroup import User, Group, UserGroup
from ..models.geoposition import GeoPosition
from ..models.site_document import SiteDocument
from ..models.wikipage import WikiPage
from ..models.todo import Todo
from ..models.hourly import HourlyWorker, HourlyWorkSession
# from ..models.object_summary import ObjectSummary


from .util import make_resource


ALL_MODELS = dict(user=User, group=Group, usergroup=UserGroup,
                  geoposition=GeoPosition, site_document=SiteDocument,
                  wikipage=WikiPage, todo=Todo, worker=HourlyWorker,
                  worksession=HourlyWorkSession)

USERGROUP_MODELS = [
    User,
    Group,
    UserGroup,
]

ALL_MODELS = [
    GeoPosition,
    SiteDocument,
    WikiPage,
    Todo,
    HourlyWorker,
    HourlyWorkSession,
    ]


def create_model(Model, obj):
    model = Model()
    for key in obj.keys():
        setattr(model, key, obj[key])
    return model


def merge_users(session, data):
    with transaction.manager:
        session.query(UserGroup).delete()
        session.query(Group).delete()
        session.query(User).delete()
        session.flush()
    with transaction.manager:
        Model = User
        name = Model.__name__
        objects = data[name]
        print("{} has {} objects.".format(name, len(objects)))
        for obj in objects:
            model = Model()
            for key in obj:
                setattr(model, key, obj[key])
            session.add(model)
        session.flush()
    print("Imported Users")
    with transaction.manager:
        Model = Group
        name = Model.__name__
        objects = data[name]
        print("{} has {} objects.".format(name, len(objects)))
        for obj in objects:
            model = Model()
            for key in obj:
                setattr(model, key, obj[key])
            session.add(model)
        session.flush()
    print("Imported Groups")
    with transaction.manager:
        for obj in data['UserGroup']:
            model = UserGroup(obj['group_id'], obj['user_id'])
            for key in obj:
                setattr(model, key, obj[key])
            session.add(model)
        session.flush()
    print("Imported user/group")
    return data

            
@resource(collection_path="/api/dev/dbadmin",
          path="/api/dev/dbadmin/{view}",
          permission='dbadmin')
class DbAdminView(BaseModelResource):
    def __acl__(self):
        acl = [
            (Allow, 'group:admin', 'dbadmin'),
            ]
        return acl

    def get(self):
        view = self.request.matchdict['view']
        if view == 'export-models':
            return self.export_database()
        elif view == 'delete-models':
            return self.delete_all()
        else:
            raise HTTPNotFound

    def post(self):
        v = self.request.matchdict['view']
        if v == 'import-models':
            return self.import_data()
        else:
            raise HTTPNotFound

    def export_database(self):
        session = self.request.dbsession
        models = USERGROUP_MODELS + ALL_MODELS
        content = export_models(session, models)
        s = hashlib.sha256()
        s.update(content)
        return dict(content=base64.encodebytes(content),
                    sha256sum=s.hexdigest())

    def import_data(self):
        data = self.import_zipfile()
        session = self.request.dbsession
        self.delete_all()
        merge_users(session, data)
        with transaction.manager:
            for Model in ALL_MODELS:
                name = Model.__name__
                objects = data[name]
                print("{} has {} objects.".format(name, len(objects)))
                for obj in objects:
                    model = session.query(Model).get(obj['id'])
                    if model is None:
                        model = Model()
                    for key in obj:
                        setattr(model, key, obj[key])
                    self.request.dbsession.add(model)
                print("Imported {}".format(name))
        return data

    def delete_all(self):
        with transaction.manager:
            for Model in reversed(ALL_MODELS):
                query = self.request.dbsession.query(Model)
                query.delete()
        return dict(result='success')

    def import_zipfile(self):
        text = self.request.json['content']
        content = base64.decodestring(text.encode())
        bfile = io.BytesIO(content)
        zfile = lzma.open(bfile, 'rt')
        data = json.load(zfile)
        print("DATA", data.keys())
        return data
