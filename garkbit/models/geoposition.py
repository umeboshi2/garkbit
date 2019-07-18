from sqlalchemy import (
    Column,
    Integer,
    Float,
    Unicode,
    ForeignKey,
)
from sqlalchemy.orm import relationship
from sqlalchemy_utils import UUIDType

from hornstone.models.base import BaseUUIDMixin
from hornstone.alchemy import TimeStampMixin

from .meta import Base


class GeoPosition(Base, BaseUUIDMixin):
    __tablename__ = 'geopositions'
    accuracy = Column(Integer)
    altitude = Column(Float)
    altitudeAccuracy = Column(Float)
    heading = Column(Float)
    latitude = Column(Float)
    longitude = Column(Float)
    speed = Column(Float)

    def __repr__(self):
        return "<GeoPosition {}: {}x{}>".format(
            self.id, self.latitude, self.longitude)


class MapLocation(Base, TimeStampMixin):
    __tablename__ = 'sunny_maplocations'
    id = Column(UUIDType,
                ForeignKey(GeoPosition.id), primary_key=True)
    name = Column(Unicode(100), unique=True)
    description = Column(Unicode)


MapLocation.location = relationship('GeoPosition', uselist=False)
