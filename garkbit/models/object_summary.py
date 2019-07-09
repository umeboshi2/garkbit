from sqlalchemy import (
    Column,
    Integer,
    Text,
    PickleType,
)
from hornstone.alchemy import TimeStampMixin

from .meta import Base


class ObjectSummary(Base, TimeStampMixin):
    __tablename__ = 'object_summaries'
    id = Column(Integer, primary_key=True)
    name = Column(Text, unique=True)
    content = Column(PickleType)
