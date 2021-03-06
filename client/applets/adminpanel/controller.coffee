import { Radio, Model } from 'backbone'
import { View } from 'backbone.marionette'

import { MainController } from 'tbirds/controllers'
import SlideDownRegion from 'tbirds/regions/slidedown'
import navigate_to_url from 'tbirds/util/navigate-to-url'

# require this for ResourceChannel
import '../dbdocs/dbchannel'

MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'
ResourceChannel = Radio.channel 'resources'

tc = require 'teacup'

class ReadMeModel extends Model
  url: '/assets/documents/intro-admin.md'
  fetch: (options) ->
    options = options or {}
    options.dataType = 'text'
    super options
  parse: (response) ->
    content: response
  
    
frontdoor_template = tc.renderable () ->
  tc.div '.row', ->
    tc.div '#main-content'
  
class FrontdoorLayout extends View
  template: frontdoor_template
  regions: ->
    content: new SlideDownRegion
      el: '#main-content'
      speed: 'slow'
  onBeforeDestroy: (view) ->
    if __DEV__
      console.log "FrontdoorLayout onBeforeDestroy!!!!", view
      console.log "Determine what to do with child apps when changing"

class Controller extends MainController
  setupLayoutIfNeeded: ->
    super()
    @layout.controller = @
    
  _view_resource: (doc) ->
    @setupLayoutIfNeeded()
    { FrontDoorMainView } = require './views'
    view = new FrontDoorMainView
      model: doc
    @layout.showChildView 'content', view

  _view_login: ->
    LoginView = require './loginview'
    view = new LoginView
    @layout.showChildView 'content', view
    
  _view_upload: ->
    require.ensure [], () =>
      UploadView = require('./uploadview').default
      view = new UploadView
      @layout.showChildView 'content', view
    # name the chunk
    , 'frontdoor-upload-view'

  upload_view: ->
    @setupLayoutIfNeeded()
    @_view_upload()
    
  view_page: (name) ->
    doc = ResourceChannel.request 'get-document', name
    response = doc.fetch()
    response.done =>
      if not doc.get 'content'
        doc.set 'content', '# Need a front page.'
      @_view_resource doc
    response.fail ->
      MessageChannel.request 'danger', 'Failed to get document'
      

  frontdoor_needuser: ->
    token = MainChannel.request 'main:app:decode-auth-token'
    if 'name' in Object.keys token
      @frontdoor_hasuser token
    else
      @show_login()
      
  show_login: ->
    @setupLayoutIfNeeded()
    @_view_login()
    
  show_logout: ->
    MainChannel.request 'main:app:destroy-auth-token'
    navigate_to_url '/'
    
  frontdoor_hasuser: (user) ->
    @default_view()

  view_readme: ->
    console.log "view_readme", @
    @setupLayoutIfNeeded()
    model = new ReadMeModel
    response = model.fetch()
    response.done =>
      @_view_resource model
    response.fail ->
      MessageChannel.request 'warning', 'failed to get readme'
      
  default_view: ->
    @setupLayoutIfNeeded()
    #@show_login()
    @view_readme()
    
  frontdoor: ->
    config = MainChannel.request 'main:app:config'
    if config?.needLogin
      @frontdoor_needuser()
    else
      @default_view()

  start: ->
    return @frontdoor()
    
  themeSwitcher: ->
    @setupLayoutIfNeeded()
    { ThemeSwitchView } = require './views'
    view = new ThemeSwitchView
    @layout.showChildView 'content', view
    console.log "themeSwitcher"
    
  viewHubby: ->
    @setupLayoutIfNeeded()
    HView = require './hubbyview'
    view = new HView
    @layout.showChildView 'content', view
    
export default Controller

