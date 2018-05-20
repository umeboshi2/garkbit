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
        print(request.subpath)
        protocol = request.subpath[0]
        hostpath = os.path.join(*request.subpath[1:])
        url = "{}//{}".format(protocol, hostpath)
        if request.query_string:
            url = "{}?{}".format(url, request.query_string)
        req = requests.get(url, stream=True)
        self.response = Response(body_file=req.raw)
