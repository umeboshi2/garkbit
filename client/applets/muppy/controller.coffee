import { Radio } from 'backbone'
import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'

AppChannel = Radio.channel 'muppy'

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
      View = require('./views/view-summary').default
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
      View = require('./views/list-summaries').default
      collection = AppChannel.request 'db:summary:collection'
      response = collection.fetch()
      response.done =>
        view = new View
          collection: collection
        @layout.showChildView 'content', view
    # name the chunk
    , 'muppy-view-list-summaries'
      
export default Controller

