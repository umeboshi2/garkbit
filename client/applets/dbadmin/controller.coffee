import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import ms from 'ms'

import ToolbarView from 'tbirds/views/button-toolbar'
import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'
import navigate_to_url from 'tbirds/util/navigate-to-url'
import scroll_top_fast from 'tbirds/util/scroll-top-fast'

import createModelCollection from './dbchannel'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'dbadmin'

AuthModel = MainChannel.request 'main:app:AuthModel'
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

