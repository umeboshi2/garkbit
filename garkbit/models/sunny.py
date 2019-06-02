#from configparser import ConfigParser
#from io import StringIO

from sqlalchemy import (
    Column,
    Index,
    Integer,
    BigInteger,
    Float,
    Text,
    Unicode,
    UnicodeText,
    Date,
    DateTime,
    PickleType,
    Boolean,
    Enum,
    func,
    ForeignKey,
)
# from sqlalchemy.orm import relationship
from hornstone.alchemy import SerialBase, TimeStampMixin

from .meta import Base

# imports for populate()
# import transaction
# from sqlalchemy.exc import IntegrityError



class GeoPosition(Base, TimeStampMixin):
    __tablename__ = 'geopositions'
    id = Column(Integer, primary_key=True)
    accuracy = Column(Integer)
    altitude = Column(Float)
    altitudeAccuracy = Column(Float)
    heading = Column(Float)
    latitude = Column(Float)
    longitude = Column(Float)
    speed = Column(Float)




class MapLocation(Base, TimeStampMixin):
    __tablename__ = 'sunny_maplocations'
    id = Column(Integer,
                ForeignKey('geopositions.id'), primary_key=True)
    name = Column(Unicode(100), unique=True)
    description = Column(Unicode)


class SunnyClient(Base, TimeStampMixin):
    __tablename__ = 'sunny_clients'
    id = Column(Integer, primary_key=True)
    name = Column(Unicode(100), unique=True)
    fullname = Column(Unicode)
    email = Column(Unicode)
    description = Column(Unicode)


class Yard(Base, TimeStampMixin):
    __tablename__ = 'sunny_yards'
    id = Column(Integer, primary_key=True)
    name = Column(Unicode(100), unique=True)
    description = Column(Unicode)
    jobdetails = Column(Unicode)


class SingleClientJob(Base, TimeStampMixin):
    __tablename__ = 'sunny_single_client_jobs'
    id = Column(Integer, primary_key=True)
    client_id = Column(Integer, ForeignKey('sunny_clients.id'))
    due_date = Column(Date)
    start = Column(DateTime)
    end = Column(DateTime)
    description = Column(Unicode)
    notes = Column(Unicode)
    # rate measured in dollars
    rate = Column(Integer)
    status = Column(Unicode)


class SingleYardJob(Base, TimeStampMixin):
    __tablename__ = 'sunny_single_yard_jobs'
    id = Column(Integer, primary_key=True)
    yard_id = Column(Integer, ForeignKey('sunny_yards.id'))
    due_date = Column(Date)
    start = Column(DateTime)
    end = Column(DateTime)
    description = Column(Unicode)
    notes = Column(Unicode)
    # rate measured in dollars
    rate = Column(Integer)
    status = Column(Unicode)


class YardRoutineJob(Base, TimeStampMixin):
    __tablename__ = 'sunny_yard_routine_jobs'
    id = Column(Integer, primary_key=True)
    yard_id = Column(Integer, ForeignKey('sunny_yards.id'))
    due_date = Column(Date)
    start = Column(DateTime)
    end = Column(DateTime)
    # description = Column(Unicode)
    notes = Column(Unicode)
    extra = Column(Unicode)
    extra_rate = Column(Unicode)
    # rate = Column(Integer)
    status = Column(Unicode)


SUNNY_MODELS = dict(
    geoposition=GeoPosition,
    maplocation=MapLocation,
    singleclientjob=SingleClientJob,
)

