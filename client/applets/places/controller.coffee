import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import ms from 'ms'

import ToolbarView from 'tbirds/views/button-toolbar'
import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'
import navigate_to_url from 'tbirds/util/navigate-to-url'
import scroll_top_fast from 'tbirds/util/scroll-top-fast'

import './dbchannel'


MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'places'

class Controller extends MainController
  channelName: 'places'
  layoutClass: ToolbarAppletLayout
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/index-view').default
      view = new View
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

      
export default Controller

