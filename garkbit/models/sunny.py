from sqlalchemy import (
    Column,
    Integer,
    Unicode,
    Date,
    DateTime,
    ForeignKey,
)
from sqlalchemy.orm import relationship
from sqlalchemy_utils import UUIDType

from hornstone.models.base import BaseUUIDMixin

from .meta import Base
from .geoposition import GeoPosition


class SunnyClient(Base, BaseUUIDMixin):
    __tablename__ = 'sunny_clients'
    name = Column(Unicode(100), unique=True)
    fullname = Column(Unicode)
    email = Column(Unicode)
    description = Column(Unicode)


class Yard(Base, BaseUUIDMixin):
    __tablename__ = 'sunny_yards'
    name = Column(Unicode(100), unique=True)
    description = Column(Unicode)
    jobdetails = Column(Unicode)
    sunnyclient_id = Column(UUIDType,
                            ForeignKey('sunny_clients.id'))
    location_id = Column(UUIDType,
                         ForeignKey('sunny_maplocations.id'))


class SingleClientJob(Base, BaseUUIDMixin):
    __tablename__ = 'sunny_single_client_jobs'
    client_id = Column(UUIDType, ForeignKey('sunny_clients.id'))
    due_date = Column(Date)
    start = Column(DateTime)
    end = Column(DateTime)
    description = Column(Unicode)
    notes = Column(Unicode)
    # rate measured in dollars
    rate = Column(Integer)
    status = Column(Unicode)


class SingleYardJob(Base, BaseUUIDMixin):
    __tablename__ = 'sunny_single_yard_jobs'
    yard_id = Column(UUIDType, ForeignKey('sunny_yards.id'))
    due_date = Column(Date)
    start = Column(DateTime)
    end = Column(DateTime)
    description = Column(Unicode)
    notes = Column(Unicode)
    # rate measured in dollars
    rate = Column(Integer)
    status = Column(Unicode)


class YardRoutineJob(Base, BaseUUIDMixin):
    __tablename__ = 'sunny_yard_routine_jobs'
    yard_id = Column(UUIDType, ForeignKey('sunny_yards.id'))
    due_date = Column(Date)
    start = Column(DateTime)
    end = Column(DateTime)
    # description = Column(Unicode)
    notes = Column(Unicode)
    extra = Column(Unicode)
    extra_rate = Column(Unicode)
    # rate = Column(Integer)
    status = Column(Unicode)


Yard.client = relationship('SunnyClient', uselist=False)
Yard.location = relationship('MapLocation', uselist=False)


SUNNY_MODELS = dict(
    geoposition=GeoPosition,
    singleclientjob=SingleClientJob,
)
