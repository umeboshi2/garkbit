import Backbone from 'backbone'
import Marionette from 'backbone.marionette'

DscController = require './controller'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppRouter = MainChannel.request 'main:app:IndexRouter'

class DscRouter extends AppRouter
  appRoutes:
    'sofi/dsc': 'list_descriptions'
    'sofi/dsc/list': 'list_descriptions'
    'sofi/dsc/add': 'add_new_description'
    'sofi/dsc/view/:name': 'view_description'
    'sofi/dsc/edit/:name': 'edit_description'
    # FIXME get rid of these
    # tbirds basecrud templates uses this
    # url pattern
    'sofi/ebdscs/new': 'add_new_description'
    'sofi/ebdscs/view/:id': 'view_description'
    'sofi/ebdscs/edit/:id': 'edit_description'

module.exports =
  router: DscRouter
  controller: DscController
  
