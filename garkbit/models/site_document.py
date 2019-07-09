from hornstone.models.documents import SiteDocumentMixin

from .meta import Base


class SiteDocument(Base, SiteDocumentMixin):
    pass
