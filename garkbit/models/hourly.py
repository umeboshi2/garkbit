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
from sqlalchemy_utils import UUIDType

# from sqlalchemy.orm import relationship
from hornstone.alchemy import TimeStampMixin
from hornstone.models.base import BaseIdMixin
from hornstone.models.base import BaseUUIDMixin


from .meta import Base

# imports for populate()
# import transaction
# from sqlalchemy.exc import IntegrityError

WorkerStatusType = Enum('on', 'off',
                        name="hourly_worker_status_type_enum")


class Worker(Base, TimeStampMixin):
    __tablename__ = 'hourly_workers'
    user_id = Column(UUIDType, ForeignKey('users.id'),
                     primary_key=True)


class WorkSession(Base, BaseUUIDMixin):
    __tablename__ = 'hourly_work_sessions'
    worker_id = Column(UUIDType, ForeignKey('hourly_workers.user_id'))
    start = Column(DateTime)
    end = Column(DateTime)


class CurrentStatus(Base, TimeStampMixin):
    __tablename__ = 'hourly_current_status'
    worker_id = Column(UUIDType, ForeignKey('hourly_workers.user_id'),
                       primary_key=True)
    session_id = Column(UUIDType,
                        ForeignKey('hourly_work_sessions.id'))
    status = Column(WorkerStatusType)
