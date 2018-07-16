import os
# from configparser import ConfigParser
# from datetime import datetime
from urllib.error import HTTPError
from pyramid.response import FileResponse, Response

from pyramid.view import view_config, view_defaults

from trumpet.views.base import BaseUserViewCallable
import requests
from io import BytesIO


APIROOT = '/api/dev/bsapi'

rscroot = os.path.join(APIROOT, 'main')

wiki_path = os.path.join(rscroot, 'archiveorg')

last_modified_format = "%a, %d %b %Y %H:%M:%S %Z"


class ProxyView(BaseUserViewCallable):
    def __init__(self, request):
        super(ProxyView, self).__init__(request)
        protocol = request.subpath[0]
        hostpath = os.path.join(*request.subpath[1:])
        url = "{}//{}".format(protocol, hostpath)
        if request.query_string:
            url = "{}?{}".format(url, request.query_string)
        rheaders = dict([(k, v) for (k, v) in request.headers.items()
                         if k != 'Host'])
        resp = requests.request(
            method=request.method,
            url=url,
            headers=rheaders,
            cookies=request.cookies,
            allow_redirects=False,
            stream=True)
        excluded_headers = ['content-encoding', 'content-length',
                            'transfer-encoding', 'connection']
        excluded_headers = []
        headers = [(k, v) for (k, v) in resp.raw.headers.items()
                   if k.lower() not in excluded_headers]
        response = Response(body_file=resp.raw, headers=dict(headers),
                            status_code=resp.status_code)
        self.response = response
