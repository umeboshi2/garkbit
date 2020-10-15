import { Radio, Model } from 'backbone'
import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'

# FIXME
import navigateToUrl from 'tbirds/util/navigate-to-url'
import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'


MainChannel = Radio.channel 'global'
AppChannel = Radio.channel 'userprofile'

toolbar_template = tc.renderable (model) ->
  tc.div '.btn-group.btn-group-justified', ->
    for entry in model.entries
      icon = entry?.icon or 'info'
      tc.div '.toolbar-button.btn.btn-primary',
      'button-url': entry.url, ->
        tc.span ".fa.fa-#{icon}", ' ' + entry.name

class ToolbarView extends MnView
  template: toolbar_template
  ui:
    toolbarButton: '.toolbar-button'
  events:
    'click @ui.toolbarButton': 'toolbarButtonPressed'
  toolbarButtonPressed: (event) ->
    console.log "toolbarButtonPressed", event
    url = event.currentTarget.getAttribute 'button-url'
    navigateToUrl url

if __DEV__
  console.log "ToolbarView", ToolbarView
  
class Controller extends MainController
  layoutClass: ToolbarAppletLayout
  show_profile: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      ViewClass = require('./views/index-view').default
      token = MainChannel.request 'main:app:decode-auth-token'
      console.log "TOKEN", token
      view = new ViewClass
        model: new Model token
        templateContext:
          title: token.fullname
          text: "#{token.fullname} (#{token.name})"
      @layout.showChildView 'content', view
    # name the chunk
    , 'userprofile-view-show-profile'

  view_map: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      ViewClass = require('tbirds/views/mapview').default
      token = MainChannel.request 'main:app:decode-auth-token'
      view = new ViewClass
        model: new Model token
      @layout.showChildView 'content', view
    # name the chunk
    , 'userprofile-view-map-view'

  editConfig: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      ViewClass = require('./views/configview').default
      token = MainChannel.request 'main:app:decode-auth-token'
      view = new ViewClass
        model: new Model token
      @layout.showChildView 'content', view
    # name the chunk
    , 'userprofile-view-edit-config'

  change_password: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      ViewClass = require('./views/chpassview').default
      view = new ViewClass
        model: AppChannel.request 'new-password-model'
      @layout.showChildView 'content', view
    # name the chunk
    , 'userprofile-view-chpasswd'
      
export default Controller

