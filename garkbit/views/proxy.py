import os
import base64
from urllib.parse import urlparse, urlunparse

from trumpet.views.base import BaseUserViewCallable
from wsgiproxy import HostProxy

from webob import Request

APIROOT = '/api/dev/bsapi'

rscroot = os.path.join(APIROOT, 'main')

wiki_path = os.path.join(rscroot, 'archiveorg')

last_modified_format = "%a, %d %b %Y %H:%M:%S %Z"


class ProxyView(BaseUserViewCallable):
    def __init__(self, request):
        super(ProxyView, self).__init__(request)
        encoded = request.matchdict.get('encoded')

        # FIXME  is there a better way rather than encode/decode?
        url = base64.decodebytes(encoded.encode()).decode()
        parsed = urlparse(url)

        # FIXME this is ugly
        app_url = urlunparse(list(parsed[:2]) + ['', '', '', ''])

        proxy = HostProxy(app_url, client='requests')
        preq = Request.blank(url)
        self.response = preq.get_response(proxy)
