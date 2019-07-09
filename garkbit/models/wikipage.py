from sqlalchemy import (
    Column,
    Unicode,
    UnicodeText,
    DateTime,
    PickleType,
)
from hornstone.models.base import BaseUUIDMixin

from .meta import Base


class WikiPage(Base, BaseUUIDMixin):
    __tablename__ = 'wikipages'
    name = Column(Unicode, unique=True)
    headers = Column(PickleType)
    updated_upstream = Column(DateTime)
    content = Column(UnicodeText)
    original = Column(UnicodeText)
