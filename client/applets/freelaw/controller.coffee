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
ResourceChannel = Backbone.Radio.channel 'resources'
AppChannel = Backbone.Radio.channel 'freelaw'

class Controller extends MainController
  layoutClass: ToolbarAppletLayout
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/index-view'
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'freelaw-view-index'
      
  viewOpinion: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/view-opinion'
      model = AppChannel.request 'db:opinion:get', id
      response = model.fetch()
      response.done =>
        view = new View
          model: model
        @layout.showChildView 'content', view
        console.log "OPINION", model
    # name the chunk
    , 'freelaw-view-view-opinion'
    
  listOpinions: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/list-opinions'
      collection = AppChannel.request 'db:opinion:collection'
      response = collection.fetch()
      response.done =>
        view = new View
          collection: collection
        @layout.showChildView 'content', view
    # name the chunk
    , 'freelaw-view-list-opinions'
    
  listClusters: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/list-clusters'
      collection = AppChannel.request 'db:cluster:collection'
      response = collection.fetch()
      response.done =>
        view = new View
          collection: collection
        @layout.showChildView 'content', view
    # name the chunk
    , 'freelaw-view-list-opinions'
    
export default Controller

