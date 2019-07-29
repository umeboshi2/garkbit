import os
from configparser import ConfigParser

from pyramid.security import Allow, Authenticated
from pyramid.httpexceptions import HTTPForbidden
# from pyramid.httpexceptions import HTTPNotAcceptable
from cornice.resource import resource
# from cornice.resource import view

import transaction
from querystring_parser import parser as qsparser
# from sqlalchemy import desc
from sqlalchemy import func
# from sqlalchemy.orm.exc import NoResultFound

from trumpet.views.resourceviews import BaseModelResource

# from ..models.usergroup import User
from ..models.geoposition import (
    GeoPosition,
    UserLocation,
    )


def getboolean(value):
    if value.lower() not in ConfigParser.BOOLEAN_STATES:
        raise ValueError('Not a boolean: {}'.format(value))
    return ConfigParser.BOOLEAN_STATES[value.lower()]


apiroot = '/api/dev/places'
user_root = os.path.join(apiroot, 'user')


@resource(collection_path=user_root,
          path=os.path.join(user_root, '{id}'),
          permission='auth')
class UserLocationResource(BaseModelResource):
    model = UserLocation

    def __init__(self, request, context=None):
        self.request = request
        self.db = self.request.dbsession
        self.limit = 25
        self.max_limit = 100
        self._use_pagination = False

    def __permitted_methods__(self):
        return ['collection_get',
                'get', 'put']

    def __acl__(self):
        acl = [
            (Allow, Authenticated, 'auth'),
            ]
        return acl

    def serialize_object(self, dbobj):
        data = dbobj.serialize()
        data['location'] = dbobj.location.serialize()
        return data

    def collection_query(self):
        query = self.db.query(self.model)
        qs = qsparser.parse(self.request.query_string)
        all_locs = False
        if 'all' in qs:
            all_locs = getboolean(qs['all'])
        if not all_locs:
            query = query.filter_by(user_id=self.request.user.id)
        if 'peer' in qs:
            peer = qs['peer']
            lat = peer['latitude']
            long = peer['longitude']
            radius = peer['radius']
            geo = "POINT({} {})".format(long, lat)
            gp_query = self.db.query(GeoPosition.id)
            f = func.ST_Distance_Sphere(GeoPosition.geo, geo)
            gp_query = gp_query.filter(f < radius)
            query = query.filter(UserLocation.id.in_(gp_query))
        return query

    def collection_get(self):
        return super(UserLocationResource, self).collection_get()

    def collection_post(self):
        data = self.request.json
        coords = data['coords']
        with transaction.manager:
            location = GeoPosition()
            for key in coords:
                setattr(location, key, coords[key])
            self.db.add(location)
            self.db.flush()
            userlocation = UserLocation()
            userlocation.id = location.id
            userlocation.name = self.request.json['name']
            userlocation.user_id = self.request.user.id
            self.db.add(userlocation)
            self.db.flush()
        return self.serialize_object(userlocation)

    def delete(self):
        id = self.request.matchdict['id']
        with transaction.manager:
            userlocation = self.db.query(self.model).get(id)
            if userlocation is None:
                raise HTTPForbidden
            user_id = userlocation.user_id
            if user_id != self.request.user.id:
                raise HTTPForbidden
            gp_query = self.db.query(GeoPosition)
            geoposition = gp_query.get(userlocation.id)
            if geoposition is None:
                raise RuntimeError("geoposition should exist.")
            self.db.delete(userlocation)
            self.db.delete(geoposition)
            self.db.flush()
        return dict(result='success')


# func.ST_Distance_Sphere(City.geo, self.geo)
peer_root = os.path.join(apiroot, 'peers', '{id}')


@resource(collection_path=peer_root,
          path=os.path.join(peer_root, '{content}'),
          permission='auth')
class UserPeerResource(BaseModelResource):
    model = UserLocation

    def collection_query(self):
        query = self.db.query(self.model)
        id = self.request.matchdict['id']
        with transaction.manager:
            location = query.get(id)
            geo = location.geo
            if location.geo is None:
                raise RuntimeError("No geo info for {}".format(id))
            
        qs = qsparser.parse(self.request.query_string)
        all_locs = False
        if 'all' in qs:
            all_locs = qs['all']
            print("all_locs", all_locs)
        if not all_locs:
            query = query.filter_by(user_id=self.request.user.id)
        return query
