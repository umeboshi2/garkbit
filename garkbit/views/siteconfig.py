import os
import json

from pyramid.security import Allow, Everyone
# from pyramid.httpexceptions import HTTPNotAcceptable
from cornice.resource import resource
from cornice.resource import view

import transaction
# from sqlalchemy import desc, func
from sqlalchemy.orm.exc import NoResultFound

from trumpet.views.resourceviews import BaseModelResource

from ..models.siteconfig import ConfigResource


apiroot = '/api/dev/config'

siteconfig_path = os.path.join(apiroot, 'site')
@resource(path=siteconfig_path)
class SiteConfigResource(BaseModelResource):
    model = ConfigResource

    def __acl__(self):
        acl = [
            (Allow, Everyone, 'read'),
            (Allow, 'group:admin', 'write'),
            ]
        return acl

    def _get_config(self):
        query = self.request.query(ConfigResource)
        config = query.filter_by(name='site').one()
        return config
    
    @view(permission='read')
    def get(self):
        config = self._get_config()
        data = config.serialize()
        data['content'] = json.dumps(config.content)
        return data

    @view(permission='write')
    def put(self):
        with transaction.manager:
            try:
                config = self._get_config()
            except NoResultFound:
                print("WARNING: Inserting new site config.")
                config = ConfigResource()
                config.name = 'site'
            config.content = self.request.json
            self.db.add(config)
            self.db.flush()
