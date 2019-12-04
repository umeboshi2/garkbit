from sqlalchemy import (
    Column,
    Integer,
    Text,
)

from hornstone.alchemy import SerialBase

from .meta import Base

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
