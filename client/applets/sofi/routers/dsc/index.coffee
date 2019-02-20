Marionette = require 'backbone.marionette'
import AppRouter from 'marionette.approuter'

DscController = require './controller'

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
  
