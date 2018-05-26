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
AppChannel = Backbone.Radio.channel 'netark'

class Controller extends MainController
  layoutClass: ToolbarAppletLayout
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/index-view'
      view = new View
      @layout.showChildView 'content', view
      @scrollTop()
    # name the chunk
    , 'netark-view-index'

  listOtrr: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/otrr-list'
      view = new View
      @layout.showChildView 'content', view
      @scrollTop()
    # name the chunk
    , 'netark-view-otrr-list'

  listLibrivox: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/librivox-list'
      view = new View
      @layout.showChildView 'content', view
      @scrollTop()
    # name the chunk
    , 'netark-view-otrr-list'

  listSciFiMovies: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/scifi-movie-list'
      view = new View
      @layout.showChildView 'content', view
      @scrollTop()
    # name the chunk
    , 'netark-view-scifi-movies-index'

  searchView: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/search-view'
      view = new View
      @layout.showChildView 'content', view
      @scrollTop()
    # name the chunk
    , 'netark-search-view'
    
  viewMetadata: (id) ->
    @setupLayoutIfNeeded()
    Model = AppChannel.request 'get-metadata-model'
    require.ensure [], () =>
      View = require './views/view-metadata'
      mdata = new Model
        id: id
      console.log "model---", mdata
      response = mdata.fetch()
      response.done =>
        console.warn "response.done", mdata
        console.log "MODEL---------->", mdata
        view = new View
          model: mdata
        @layout.showChildView 'content', view
        @scrollTop()
    # name the chunk
    , 'netark-view-metadata'
      
export default Controller

