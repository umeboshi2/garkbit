import Backbone from 'backbone'
import Marionette from 'backbone.marionette'

CfgController = require './controller'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppRouter = MainChannel.request 'main:app:IndexRouter'

class CfgRouter extends AppRouter
  appRoutes:
    'sofi/cfg': 'list_configs'
    'sofi/cfg/list': 'list_configs'
    'sofi/cfg/add': 'add_new_config'
    'sofi/cfg/view/:name': 'view_config'
    'sofi/cfg/edit/:name': 'edit_config'
    # FIXME get rid of these
    # tbirds basecrud templates uses this
    # url pattern
    'sofi/ebcfgs/new': 'add_new_config'
    'sofi/ebcfgs/view/:id': 'view_config'
    'sofi/ebcfgs/edit/:id': 'edit_config'

module.exports =
  router: CfgRouter
  controller: CfgController
  
