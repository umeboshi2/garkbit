tc = require 'teacup'

# FIXME
navigate_to_url = require('tbirds/util/navigate-to-url').default
{ MainController } = require 'tbirds/controllers'
{ ToolbarAppletLayout } = require 'tbirds/views/layout'


MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'userprofile'


toolbarData = new Backbone.Model
  entries: [
    {
      name: 'Profile'
      url: '#profile'
    }
    {
      name: 'Map'
      url: '#profile/mapview'
    }
    {
      name: 'Settings'
      url: '#profile/editconfig'
    }
    {
      name: 'Change Password'
      url: '#profile/chpassword'
    }
    ]


toolbar_template = tc.renderable (model) ->
  tc.div '.btn-group.btn-group-justified', ->
    for entry in model.entries
      icon = entry?.icon or 'info'
      tc.div '.toolbar-button.btn.btn-default',
      'button-url': entry.url, ->
        tc.span ".fa.fa-#{icon}", ' ' + entry.name

class ToolbarView extends Backbone.Marionette.View
  template: toolbar_template
  ui:
    toolbarButton: '.toolbar-button'
  events:
    'click @ui.toolbarButton': 'toolbarButtonPressed'
  toolbarButtonPressed: (event) ->
    console.log "toolbarButtonPressed", event
    url = event.currentTarget.getAttribute 'button-url'
    navigate_to_url url
    
class Controller extends MainController
  layoutClass: ToolbarAppletLayout
  setupLayoutIfNeeded: ->
    super()
    view = new ToolbarView
      model: toolbarData
    @layout.showChildView 'toolbar', view
  
  show_profile: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      ViewClass = require './mainview'
      token = MainChannel.request 'main:app:decode-auth-token'
      view = new ViewClass
        model: new Backbone.Model token
      @layout.showChildView 'content', view
    # name the chunk
    , 'userprofile-view-show-profile'

  view_map: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      ViewClass = require './mapview'
      token = MainChannel.request 'main:app:decode-auth-token'
      view = new ViewClass
        model: new Backbone.Model token
      @layout.showChildView 'content', view
    # name the chunk
    , 'userprofile-view-map-view'

  editConfig: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      ViewClass = require('./configview').default
      token = MainChannel.request 'main:app:decode-auth-token'
      view = new ViewClass
        model: new Backbone.Model token
      @layout.showChildView 'content', view
    # name the chunk
    , 'userprofile-view-edit-config'

  change_password: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      ViewClass = require('./chpassview').default
      view = new ViewClass
        model: AppChannel.request 'new-password-model'
      @layout.showChildView 'content', view
    # name the chunk
    , 'userprofile-view-chpasswd'
      
      
module.exports = Controller
