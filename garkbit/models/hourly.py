from sqlalchemy import (
    Column,
    DateTime,
    Enum,
    func,
    ForeignKey,
)
from sqlalchemy.orm import relationship
from sqlalchemy_utils import UUIDType

from hornstone.alchemy import TimeStampMixin
from hornstone.models.base import BaseUUIDMixin


from .meta import Base

WorkerStatusType = Enum('on', 'off',
                        name="hourly_worker_status_type_enum")


class HourlyWorker(Base, TimeStampMixin):
    __tablename__ = 'hourly_workers'
    id = Column(UUIDType, ForeignKey('users.id'),
                primary_key=True)
    # session_id = Column(UUIDType, ForeignKey('hourly_work_sessions.id'))
    status = Column(WorkerStatusType)


class HourlyWorkSession(Base, BaseUUIDMixin):
    __tablename__ = 'hourly_work_sessions'
    worker_id = Column(UUIDType, ForeignKey(HourlyWorker.id))
    start = Column(DateTime, default=func.now())
    end = Column(DateTime)


#######################################################
# Relationships
#######################################################

HourlyWorker.user = relationship('User', uselist=False)
HourlyWorker.sessions = relationship('HourlyWorkSession')
