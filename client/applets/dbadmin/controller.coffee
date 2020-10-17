import { Radio } from 'backbone'
import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'
import createModelCollection from './dbchannel'

MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'
AuthCollection = MainChannel.request 'main:app:AuthCollection'

listUrl = '/api/dev/dbadmin/list-models'

class ModelCollection extends AuthCollection
  url: listUrl

class Controller extends MainController
  layoutClass: ToolbarAppletLayout
  collection: new ModelCollection
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/index-view').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'dbadmin-view-index'
      
  listModelTypes: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/list-model-types').default
      response = @collection.fetch()
      response.done =>
        view = new View
          collection: @collection
        @layout.showChildView 'content', view
    # name the chunk
    , 'dbadmin-view-list-model-types'
      
  listModels: (modelType) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/list-models').default
      cfg = createModelCollection modelType
      collection = new cfg.collectionClass
      response = collection.fetch()
      response.fail ->
        MessageChannel.request 'xhr-error', response
      response.done =>
        collection.forEach (m) ->
          o = m.toJSON()
          createModelCollection o.name
        view = new View
          collection: collection
        @layout.showChildView 'content', view
    # name the chunk
    , 'dbadmin-view-list-models'
      
export default Controller

