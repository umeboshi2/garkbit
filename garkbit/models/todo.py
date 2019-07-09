from sqlalchemy import (
    Column,
    Text,
    Boolean,
    func,
    ForeignKey,
)
from sqlalchemy.orm import relationship
from sqlalchemy_utils import UUIDType
from hornstone.models.base import BaseUUIDMixin

from .meta import Base
from .usergroup import User


class Todo(Base, BaseUUIDMixin):
    __tablename__ = 'todos'
    user_id = Column(UUIDType, ForeignKey('users.id'), nullable=False)
    name = Column(Text, unique=True)
    description = Column(Text)
    completed = Column(Boolean(name='todo_complete'), default=func.false())


Todo.user = relationship(User, uselist=False, lazy='subquery')
