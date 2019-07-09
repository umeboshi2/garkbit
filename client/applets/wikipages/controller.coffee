import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import ms from 'ms'

import ToolbarView from 'tbirds/views/button-toolbar'

import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'
import navigate_to_url from 'tbirds/util/navigate-to-url'
import scroll_top_fast from 'tbirds/util/scroll-top-fast'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'wikipages'

toolbarEntries = []
toolbarEntryCollection = new Backbone.Collection toolbarEntries
AppChannel.reply 'get-toolbar-entries', ->
  toolbarEntryCollection

class Controller extends MainController
  layoutClass: ToolbarAppletLayout
  collection: AppChannel.request 'db:wikipage:collection'
  setupLayoutIfNeeded: ->
    super()
    toolbar = new ToolbarView
      collection: toolbarEntryCollection
    @layout.showChildView 'toolbar', toolbar

  _load_view: (vclass, model, objname) ->
    # FIXME
    # presume "id" is only attribute there if length is 1
    #if model.isEmpty() or Object.keys(model.attributes).length is 1
    if model.isEmpty() or not model.has 'created_at'
      response = model.fetch()
      response.done =>
        @_show_view vclass, model
        scroll_top_fast()
      response.fail ->
        msg = "Failed to load #{objname} data."
        MessageChannel.request 'danger', msg
    else
      @_show_view vclass, model
    
  list_wikipages: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      # FIXME
      ListView = require('./views/listview').default
      view = new ListView
        collection: @collection
      response = @collection.fetch()
      response.done =>
        @layout.showChildView 'content', view
        if not @collection.length
          MessageChannel.request "warning", "adding initial page"
          AuthModel = MainChannel.request 'main:app:AuthModel'
          model = new AuthModel
          model.url = '/api/dev/bsapi/main/wikipages/X32_ABI'
          qr = model.fetch()
          qr.done ->
            window.location.hash = '#'
            
      response.fail ->
        MessageChannel.request 'danger', "Failed to load wikipages."
    # name the chunk
    , 'wikipages-list-wikipages'

  view_wikipage: (name) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      MainView = require './views/pageview'
      model = AppChannel.request 'db:wikipage:get', name
      console.log "MODEL", model
      @_load_view MainView, model, 'wikipage'
    # name the chunk
    , 'wikipages-view-wikipage'
      
      
export default Controller

