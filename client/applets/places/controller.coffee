import { Radio } from 'backbone'

import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'

import './dbchannel'

MessageChannel = Radio.channel 'messages'
AppChannel = Radio.channel 'places'

class Controller extends MainController
  channelName: 'places'
  layoutClass: ToolbarAppletLayout
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      collection = AppChannel.request 'db:userlocation:collection'
      response = collection.fetch()
      response.fail ->
        MessageChannel.request 'xhr-error', response
      response.done =>
        View = require('./views/index-view').default
        view = new View
          collection: collection
        @layout.showChildView 'content', view
    # name the chunk
    , 'places-view-index'

      
  listPlaces: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      collection = AppChannel.request 'db:userlocation:collection'
      response = collection.fetch()
      response.fail ->
        MessageChannel.request 'xhr-error', response
      response.done =>
        View = require('./views/list-places').default
        view = new View
          collection: collection
        @layout.showChildView 'content', view
    # name the chunk
    , 'places-view-list-places'

  viewPlace: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      model = AppChannel.request 'db:userlocation:get', id
      response = model.fetch()
      response.fail ->
        MessageChannel.request 'xhr-error', response
      response.done =>
        View = require('./views/view-location').default
        view = new View
          model: model
        @layout.showChildView 'content', view
    # name the chunk
    , 'places-view-view-place'

  viewAllPlaces: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/all-locations').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'places-view-list-places'

      
export default Controller

