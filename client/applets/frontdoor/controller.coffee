import { Radio, Model, Collection, history as bbhistory } from 'backbone'
import tc from 'teacup'

import { MainController } from 'tbirds/controllers'
import SlideDownRegion from 'tbirds/regions/slidedown'
import { BaseAppletLayout } from 'tbirds/views/layout'

import LoginView from './loginview'
import FrontDoorMainView from './views/docview'

import { ConfigObjectModel, initTopicColors } from 'common/site-config-model'
import { updateTopicColors } from 'common/site-config-model'
import EventManager from 'common/event-manager'

# require this for ResourceChannel
# import '../dbdocs/dbchannel'

MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'
SiteNavChannel = Radio.channel 'site-nav'
AppChannel = Radio.channel 'frontdoor'


eventManager = new EventManager
AppChannel.reply 'get-event-manager', ->
  return eventManager

topicColors = new ConfigObjectModel
topicColors.fetch().then ->
  MainChannel.reply 'get-topic-colors', ->
    return topicColors
  updateTopicColors()
  
urlRoot = "/assets/documents"

class AssetDocument extends Model
  fetch: (options) ->
    options = options or {}
    options.dataType = 'text'
    super options
  parse: (response) ->
    content: response

export class AssetCollection extends Collection
  urlRoot: urlRoot

intro = 'intro'
if __DEV__
  intro = 'intro-dev'

class ReadMeModel extends AssetDocument
  url: "/assets/documents/#{intro}.md"

class FrontdoorLayout extends BaseAppletLayout
  template: tc.renderable ->
    tc.div '.row', ->
      tc.div '#main-content'
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
    SiteNavChannel.request 'set-index-entries'
    bbhistory.navigate '#', trigger:true
    
  frontdoor_hasuser: ->
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
    if __DEV__
      console.log "NAME IS", name
    @setupLayoutIfNeeded()
    model = MainChannel.request 'main:app:get-document', name
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
      
export default Controller

