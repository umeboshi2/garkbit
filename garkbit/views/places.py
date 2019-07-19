import os

from pyramid.security import Allow, Authenticated
# from pyramid.httpexceptions import HTTPNotAcceptable
from cornice.resource import resource
# from cornice.resource import view

import transaction
# from sqlalchemy import desc
# from sqlalchemy import func
# from sqlalchemy.orm.exc import NoResultFound

from trumpet.views.resourceviews import BaseModelResource

# from ..models.usergroup import User
from ..models.geoposition import (
    GeoPosition,
    UserLocation,
    )


apiroot = '/api/dev/places'
user_root = os.path.join(apiroot, 'user')


@resource(collection_path=user_root,
          path=os.path.join(user_root, '{id}'),
          permission='auth')
class UserLocationResource(BaseModelResource):
    model = UserLocation

    def __permitted_methods__(self):
        return ['collection_post',
                'collection_get',
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
        query = query.filter_by(user_id=self.request.user.id)
        return query

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
