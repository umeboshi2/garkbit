import { Radio } from 'backbone'
import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'

AppChannel = Radio.channel 'netark'

class Controller extends MainController
  layoutClass: ToolbarAppletLayout
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/index-view').default
      view = new View
      @layout.showChildView 'content', view
      @scrollTop()
    # name the chunk
    , 'netark-view-index'

  listOtrr: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/otrr-list').default
      view = new View
      @layout.showChildView 'content', view
      @scrollTop()
    # name the chunk
    , 'netark-view-otrr-list'

  listLibrivox: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/librivox-list').default
      view = new View
      @layout.showChildView 'content', view
      @scrollTop()
    # name the chunk
    , 'netark-view-otrr-list'

  listSciFiMovies: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/scifi-movie-list').default
      view = new View
      @layout.showChildView 'content', view
      @scrollTop()
    # name the chunk
    , 'netark-view-scifi-movies-index'

  listMiscStuff: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/misc-stuff').default
      view = new View
      @layout.showChildView 'content', view
      @scrollTop()
    # name the chunk
    , 'netark-view-misc-stuff-index'

  searchView: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/search-view').default
      view = new View
      @layout.showChildView 'content', view
      @scrollTop()
    # name the chunk
    , 'netark-search-view'
    
  viewMetadata: (id) ->
    @setupLayoutIfNeeded()
    MetaModel = AppChannel.request 'get-metadata-model'
    require.ensure [], () =>
      View = require('./views/view-metadata').default
      mdata = new MetaModel
        id: id
      console.log "model---", mdata
      response = mdata.fetch()
      response.done =>
        console.log "MODEL---------->", mdata
        view = new View
          model: mdata
        @layout.showChildView 'content', view
        @scrollTop()
    # name the chunk
    , 'netark-view-metadata'
      
export default Controller

