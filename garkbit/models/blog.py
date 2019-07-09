from hornstone.models.blog import (
    PersonMixin,
    BlogMixin,
    PostMixin,
    CommentMixin,
)

from .meta import Base


class BlogPerson(Base, PersonMixin):
    pass


class Blog(Base, BlogMixin):
    pass


class Post(Base, PostMixin):
    pass


class Comment(Base, CommentMixin):
    pass
