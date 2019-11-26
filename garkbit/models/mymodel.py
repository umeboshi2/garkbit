from sqlalchemy import (
    Column,
    Integer,
    Text,
    Unicode,
    UnicodeText,
    DateTime,
    PickleType,
    Boolean,
    func,
    ForeignKey,
)
from sqlalchemy.orm import relationship
from hornstone.alchemy import SerialBase, TimeStampMixin
from hornstone.models.documents import SiteDocumentMixin

from hornstone.models.blog import (
    PersonMixin,
    BlogMixin,
    PostMixin,
    CommentMixin,
)

from .meta import Base

from .usergroup import User

permission_names = """
view
edit
root_administration
admin_panel
admin_entries
admin_users
admin_groups
owner
authenticated

ANY_PERMISSION
NO_PERMISSION_REQUIRED

"""


class MyModel(Base, SerialBase):
    __tablename__ = 'models'
    id = Column(Integer, primary_key=True)
    name = Column(Text)
    value = Column(Integer)
