from sqlalchemy import (
    Column,
    Integer,
    Float,
)

from hornstone.models.base import BaseUUIDMixin

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
