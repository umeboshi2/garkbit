from sqlalchemy import (
    Column,
    Integer,
    Float,
    Unicode,
    ForeignKey,
)
from sqlalchemy.orm import relationship
from sqlalchemy_utils import UUIDType
# from geoalchemy2 import Geometry

from hornstone.models.base import BaseUUIDMixin
from hornstone.alchemy import TimeStampMixin

from .meta import Base

coordinate_fields = [
    'latitude',
    'longitude',
    'altitude',
    'accuracy',
    'altitudeAccuracy',
    'heading',
    'speed',
]


class GeoPosition(Base, BaseUUIDMixin):
    __tablename__ = 'geopositions'
    accuracy = Column(Integer)
    altitude = Column(Float)
    altitudeAccuracy = Column(Float)
    heading = Column(Float)
    latitude = Column(Float)
    longitude = Column(Float)
    speed = Column(Float)
    # geo = Column(Geometry(geometry_type="POINT"))

    def __repr__(self):
        return "<GeoPosition {}: {}x{}>".format(
            self.id, self.latitude, self.longitude)


class MapLocation(Base, TimeStampMixin):
    __tablename__ = 'sunny_maplocations'
    id = Column(UUIDType,
                ForeignKey(GeoPosition.id), primary_key=True)
    name = Column(Unicode(100), unique=True)
    description = Column(Unicode)


class UserLocation(Base, TimeStampMixin):
    __tablename__ = 'user_maplocations'
    id = Column(UUIDType,
                ForeignKey(GeoPosition.id), primary_key=True)
    user_id = Column(UUIDType,
                     ForeignKey('users.id'))
    name = Column(Unicode(100), unique=True)
    description = Column(Unicode)


MapLocation.location = relationship('GeoPosition', uselist=False)
UserLocation.location = relationship('GeoPosition', uselist=False)
UserLocation.user = relationship('User', uselist=False)
