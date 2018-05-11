import path from 'path'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'

{ MainController } = require 'tbirds/controllers'
{ login_form } = require 'tbirds/templates/forms'
import SlideDownRegion from 'tbirds/regions/slidedown'
import navigate_to_url from 'tbirds/util/navigate-to-url'
import { BaseAppletLayout } from 'tbirds/views/layout'


# require this for ResourceChannel
require '../dbdocs/dbchannel'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
DocChannel = Backbone.Radio.channel 'static-documents'
ResourceChannel = Backbone.Radio.channel 'resources'

tc = require 'teacup'

import LoginView from './loginview'
{ FrontDoorMainView } = require './views'

urlRoot = "/assets/documents"

class AssetDocument extends Backbone.Model
  fetch: (options) ->
    options = options or {}
    options.dataType = 'text'
    super options
  parse: (response) ->
    content: response

class AssetCollection extends Backbone.Collection
  urlRoot: urlRoot
    
class ReadMeModel extends AssetDocument
  url: "/assets/documents/intro.md"

frontdoor_template = tc.renderable () ->
  #tc.div '#main-content.col-sm-10.col-sm-offset-1'
  tc.div '.row', ->
    tc.div '#main-content'

class FrontdoorLayout extends BaseAppletLayout
  template: frontdoor_template
  regions: ->
    content: new SlideDownRegion
      el: '#main-content'
      speed: 'slow'

class Controller extends MainController
  layoutClass: FrontdoorLayout

  setupLayoutIfNeeded: ->
    super()
    @layout.controller = @
    
  _viewResource: (doc) ->
    @setupLayoutIfNeeded()
    view = new FrontDoorMainView
      model: doc
    @layout.showChildView 'content', view

  _viewLogin: ->
    view = new LoginView
    @layout.showChildView 'content', view
    
  _viewUpload: ->
    require.ensure [], () =>
      UploadView = require './uploadview'
      view = new UploadView
      @layout.showChildView 'content', view
    # name the chunk
    , 'frontdoor-upload-view'

  uploadView: ->
    @setupLayoutIfNeeded()
    @_viewUpload()
    
  frontdoor_needuser: ->
    token = MainChannel.request 'main:app:decode-auth-token'
    if 'name' in Object.keys token
      @frontdoor_hasuser token
    else
      @show_login()
      
  showLogin: ->
    @setupLayoutIfNeeded()
    @_viewLogin()
    
  showLogout: ->
    MainChannel.request 'main:app:destroy-auth-token'
    navigate_to_url '/'
    
  frontdoor_hasuser: (user) ->
    @defaultView()

  view_readme: ->
    @setupLayoutIfNeeded()
    model = new ReadMeModel
    response = model.fetch()
    response.done =>
      @_viewResource model
    response.fail ->
      MessageChannel.request 'warning', 'failed to get readme'

  viewPage: (name) ->
    console.log "NAME IS", name
    @setupLayoutIfNeeded()
    model = MainChannel.request 'main:app:get-document', name
    #model = new AssetDocument()
    #model.url = path.join urlRoot, name
    console.log "MODEL IS", model
    response = model.fetch()
    response.done =>
      @_viewResource model
    response.fail ->
      MessageChannel.request 'warning', "failed to get #{name}"
    
  defaultView: ->
    @setupLayoutIfNeeded()
    #@show_login()
    @view_readme()
    
  frontdoor: ->
    config = MainChannel.request 'main:app:config'
    if config?.needLogin
      @frontdoor_needuser()
    else
      @defaultView()
      
  themeSwitcher: ->
    @setupLayoutIfNeeded()
    { ThemeSwitchView } = require './views'
    view = new ThemeSwitchView
    @layout.showChildView 'content', view
    console.log "themeSwitcher"

  statsView: ->
    @setupLayoutIfNeeded()
    { StatsView } = require './views'
    model = new Backbone.Model
    model.url = '/stats.json'
    response = model.fetch()
    response.done =>
      view = new StatsView
        model: model
      @layout.showChildView 'content', view
      
  viewEmojis: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './emojilist'
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'frontdoor-emojilist-view'

  viewDbAdmin: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/idbview'
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'frontdoor-view-dbadmin'
    
    
    
export default Controller

