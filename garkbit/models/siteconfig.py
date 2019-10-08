from hornstone.models.documents import SiteDocumentMixin

from sqlalchemy import (
    Column,
    PickleType,
    Unicode,
)

from sqlalchemy.orm import relationship
from sqlalchemy_utils import UUIDType

from hornstone.alchemy import TimeStampMixin
from hornstone.models.base import BaseUUIDMixin


from .meta import Base

# name: site
# global site config


class ConfigResource(Base, BaseUUIDMixin):
    __tablename__ = 'garkbit_siteconfig'
    name = Column(Unicode, unique=True)
    content = Column(PickleType)
