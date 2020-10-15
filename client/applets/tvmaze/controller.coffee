import { Radio } from 'backbone'
import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'

import './dbchannel'

AppChannel = Radio.channel 'tvmaze'

class Controller extends MainController
  layoutClass: ToolbarAppletLayout
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      lcollection = AppChannel.request 'get-local-tvshows'
      SCollection = AppChannel.request 'tv-show-search-collection'
      View = require('./views/index-view').default
      lcollection.fetch().then =>
        view = new View
          collection: new SCollection
        @layout.showChildView 'content', view
    # name the chunk
    , 'tvmaze-view-index'

  viewShowList: ->
    return @viewShowListCards()
    
  viewShowListCards: ->
    @setupLayoutIfNeeded()
    collection = AppChannel.request 'get-local-tvshows'
    require.ensure [], () =>
      View = require('./views/card-show-list').default
      @_loadView View, collection, 'tvshow'
    # name the chunk
    , 'tvmaze-view-show-list-cards'
      
  viewShowListFlat: ->
    @setupLayoutIfNeeded()
    collection = AppChannel.request 'get-local-tvshows'
    window.tvshows = collection
    require.ensure [], () =>
      View = require('./views/flat-show-list').default
      response = collection.fetch()
      response.done =>
        view = new View
          collection: collection
        @layout.showChildView 'content', view
    # name the chunk
    , 'tvmaze-view-show-list-flat'
      
  viewSearchShow: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/single-search-show-view').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'tvmaze-view-search-show'

  viewShow: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/view-show').default
      LModel = AppChannel.request 'get-local-tvshow-model'
      model = new LModel id: id
      @_loadView View, model, 'tvshow'
    # name the chunk
    , 'tvmaze-view-local-show'
    
  importSampleData: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      lcollection = AppChannel.request 'get-all-local-tvshows'
      View = require('./views/sample-data-import').default
      lcollection.fetch().then =>
        view = new View
        @layout.showChildView 'content', view
    # name the chunk
    , 'tvmaze-import-sample-data'
    
  viewCalendar: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      lcollection = AppChannel.request 'get-local-tvshows'
      View = require('./views/calendar-view').default
      lcollection.fetch().then =>
        view = new View
        @layout.showChildView 'content', view
    # name the chunk
    , 'tvmaze-view-calendar'
    
export default Controller

