import os
import base64
from urllib.parse import urlparse, urlunparse

from trumpet.views.base import BaseUserViewCallable
from wsgiproxy import HostProxy

from webob import Request


class ProxyView(BaseUserViewCallable):
    def __init__(self, request):
        super(ProxyView, self).__init__(request)
        # encoded is base64 encoded string
        encoded = request.matchdict.get('encoded')
        # FIXME  is there a better way rather than encode/decode?
        decoded = base64.decodebytes(encoded.encode()).decode()

        parsed = urlparse(decoded)
        app_url = urlunparse((parsed.scheme, parsed.netloc, '/',
                              '', '', ''))
        proxy = HostProxy(app_url, client='requests')
        self.response = Request.blank(decoded).get_response(proxy)
