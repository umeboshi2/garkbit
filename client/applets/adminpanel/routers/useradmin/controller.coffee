$ = require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
ms = require 'ms'

{ ExtraController } = require 'tbirds/controllers'

MainChannel = Backbone.Radio.channel 'global'

CrudController = MainChannel.request 'crud:Controller'

class Controller extends CrudController
  defaultColumns: ['id', 'username', 'fullname']
  viewOptions:
    fieldList: ['username', 'fullname', 'email']
    entryField: 'fullname'
    modelName: 'user'
    label: 'user'
    routeName: 'admin'
  channelName: 'useradmin'
  initialize: (options) ->
    @applet = MainChannel.request 'main:applet:get-applet', 'adminpanel'
    @mainController = @applet.router.controller
    return
    
  listUsers: ->
    require.ensure [], () =>
      ViewClass = require './userlist'
      @listItems ViewClass
    # name the chunk
    , 'useradmin-view-list-users'
    return

  viewUser: (id) ->
    require.ensure [], () =>
      ViewClass = require './userview'
      @viewItem ViewClass, id
    # name the chunk
    , 'useradmin-view-user'
    return
    
  addNewUser: ->
    NewFormView = MainChannel.request 'crud:view:new-item'
    @addItem NewFormView
    return

  editUser: (id) ->
    EditFormView = MainChannel.request 'crud:view:edit-item'
    @editItem EditFormView, id
    return

module.exports = Controller

