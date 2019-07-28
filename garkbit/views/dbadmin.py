import io
import base64
import hashlib
import lzma
import json


from pyramid.security import Allow
from pyramid.httpexceptions import HTTPNotFound
from cornice.resource import resource
import transaction

from hornstone.alchemy import export_models
from trumpet.views.resourceviews import BaseModelResource

from ..models.usergroup import User, Group, UserGroup
from ..models.geoposition import (
    GeoPosition,
    MapLocation,
    UserLocation,
    )
from ..models.site_document import SiteDocument
from ..models.wikipage import WikiPage
from ..models.todo import Todo
from ..models.hourly import HourlyWorker, HourlyWorkSession
from ..models.sunny import (
    SunnyClient,
    Yard,
    SingleClientJob,
    SingleYardJob,
    YardRoutineJob,
    )
from ..models.company import (
    Boss,
    Company,
    Worker,
    WorkSession,
    )

USERGROUP_MODELS = [
    User,
    Group,
    UserGroup,
]

ALL_MODELS = [
    GeoPosition,
    MapLocation,
    UserLocation,
    SiteDocument,
    WikiPage,
    Todo,
    HourlyWorker,
    HourlyWorkSession,
    Boss,
    Company,
    Worker,
    WorkSession,
    SunnyClient,
    Yard,
    SingleClientJob,
    SingleYardJob,
    YardRoutineJob,
    ]
ModelMap = dict([(M.__name__, M) for M in ALL_MODELS + USERGROUP_MODELS])


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
        elif view == 'list-models':
            return self.get_model_list()
        else:
            raise HTTPNotFound

    def post(self):
        v = self.request.matchdict['view']
        if v == 'import-models':
            return self.import_data()
        else:
            raise HTTPNotFound

    def export_userlocations(self):
        q = self.db.query(UserLocation)
        models = q.all()
        objects = list()
        for m in models:
            data = m.serialize()
            data['user'] = m.user.serialize()
            data['location'] = m.location.serialize()
            objects.append(data)
        geopositions = [g.serialize() for g in self.db.query(GeoPosition)]
        data = dict(geopositions=geopositions, userlocations=objects)
        return data

    def get_model_list(self):
        models = [M.__name__ for M in ALL_MODELS + USERGROUP_MODELS]
        items = [dict(name=m, id=m) for m in models]
        return dict(items=items, total_count=len(models))

    def export_database(self):
        session = self.db
        models = USERGROUP_MODELS + ALL_MODELS
        content = export_models(session, models)
        s = hashlib.sha256()
        s.update(content)
        encoded = base64.encodebytes(content)
        encoded = encoded.replace(b'\n', b'')
        return dict(content=encoded,
                    sha256sum=s.hexdigest())

    def import_data(self):
        text = self.request.json['content']
        content = base64.decodestring(text.encode())
        try:
            data = self.import_zipfile()
        except lzma.LZMAError:
            data = json.loads(content.decode())
        if 'id' in data:
            return self.import_models(data)
        else:
            return self.import_database(data)

    def import_models(self, data):
        Model = ModelMap[data['name']]
        isGeo = False
        if Model is GeoPosition:
            print("Model is GeoPosition")
            isGeo = True
        with transaction.manager:
            for item in data['items']:
                model = self.db.query(Model).get(item['id'])
                if not model:
                    model = Model()
                for key in item:
                    setattr(model, key, item[key])
                if isGeo:
                    if 'geo' in item:
                        setattr(model, 'geo', item['geo'])
                    else:
                        point = 'Point({} {})'.format(item['longitude'],
                                                      item['latitude'])
                        model.geo = point
                self.db.add(model)
                self.db.flush()
        return dict(result="success")

    def import_database(self, data):
        session = self.db
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


@resource(collection_path="/api/dev/dbadmin/models/{model}",
          path="/api/dev/dbadmin/models/{model}/{view}",
          permission='dbadmin')
class DbAdminModelResource(BaseModelResource):
    def __acl__(self):
        acl = [
            (Allow, 'group:admin', 'dbadmin'),
            ]
        return acl

    def __permitted_methods__(self):
        return ['collection_get']

    @property
    def model(self):
        name = self.request.matchdict['model']
        return ModelMap[name]

    def get(self):
        view = self.request.matchdict['view']
        if view == 'export':
            return self.export()

    def export(self):
        query = self.db.query(self.model)
        models = [self.serialize_object(m) for m in query]
        name = self.model.__name__
        return dict(name=name, items=models,
                    total_count=len(models))
