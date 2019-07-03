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
from sqlalchemy.orm import relationship, backref
from sqlalchemy_utils import UUIDType

from hornstone.alchemy import TimeStampMixin
from hornstone.models.base import BaseUUIDMixin


from .meta import Base
# from .usergroup import User


# imports for populate()
# import transaction
# from sqlalchemy.exc import IntegrityError

WorkerStatusType = Enum('on', 'off',
                        name="hourly_worker_status_type_enum")


class Worker(Base, TimeStampMixin):
    __tablename__ = 'hourly_workers'
    id = Column(UUIDType, ForeignKey('users.id'),
                primary_key=True)
    # session_id = Column(UUIDType, ForeignKey('hourly_work_sessions.id'))
    status = Column(WorkerStatusType)


class WorkSession(Base, BaseUUIDMixin):
    __tablename__ = 'hourly_work_sessions'
    #worker_id = Column(UUIDType, ForeignKey('hourly_workers.id'))
    worker_id = Column(UUIDType, ForeignKey(Worker.id))
    start = Column(DateTime, default=func.now())
    end = Column(DateTime)


#######################################################
# Relationships
#######################################################

Worker.user = relationship('User', uselist=False)
Worker.sessions = relationship('WorkSession')
