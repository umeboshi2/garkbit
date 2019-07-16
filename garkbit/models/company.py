from sqlalchemy import (
    Column,
    Unicode,
    UnicodeText,
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
                        name="company_worker_status_type_enum")


class Boss(Base, TimeStampMixin):
    __tablename__ = 'company_bosses'
    id = Column(UUIDType, ForeignKey('users.id'),
                primary_key=True)
    name = Column(Unicode)


class Company(Base, BaseUUIDMixin):
    __tablename__ = 'company_companies'
    boss_id = Column(UUIDType, ForeignKey(Boss.id))
    name = Column(Unicode, unique=True)
    description = Column(UnicodeText)


class Worker(Base, TimeStampMixin):
    __tablename__ = 'company_workers'
    id = Column(UUIDType, ForeignKey('users.id'),
                primary_key=True)
    company_id = Column(UUIDType, ForeignKey(Company.id))
    status = Column(WorkerStatusType)


class WorkSession(Base, BaseUUIDMixin):
    __tablename__ = 'company_work_sessions'
    worker_id = Column(UUIDType, ForeignKey(Worker.id))
    company_id = Column(UUIDType, ForeignKey(Company.id))
    start = Column(DateTime, default=func.now())
    end = Column(DateTime)


#######################################################
# Relationships
#######################################################

Boss.user = relationship('User', uselist=False)
Boss.companies = relationship("Company")
Company.boss = relationship("Boss", uselist=False)

Worker.user = relationship('User', uselist=False)
Worker.sessions = relationship('WorkSession')
Worker.company = relationship('Company', uselist=False)

#Worker.boss = relationship('Boss', secondary='Company.boss_id', uselist=False)
