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
AppChannel = Backbone.Radio.channel 'muppy'

class Controller extends MainController
  layoutClass: ToolbarAppletLayout
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/index-view').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'muppy-view-index'

  viewSummary: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/view-summary'
      model = AppChannel.request 'db:summary:get', id
      response = model.fetch()
      response.done =>
        view = new View
          model: model
        @layout.showChildView 'content', view
        console.log "SUMMARY", model
    # name the chunk
    , 'muppy-view-view-summary'
    
  listSummaries: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/list-summaries'
      collection = AppChannel.request 'db:summary:collection'
      response = collection.fetch()
      response.done =>
        view = new View
          collection: collection
        @layout.showChildView 'content', view
    # name the chunk
    , 'muppy-view-list-summaries'
    
      
export default Controller

