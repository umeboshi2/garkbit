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
AppChannel = Backbone.Radio.channel 'hourly'

import './dbchannel'

class Controller extends MainController
  channelName: 'hourly'
  layoutClass: ToolbarAppletLayout
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      token = MainChannel.request 'main:app:decode-auth-token'
      worker = @getChannel().request 'db:worker:new', id: token.uid
      View = require './views/index-view'
      view = new View
        model: worker
      @layout.showChildView 'content', view
    # name the chunk
    , 'hourly-view-index'
    
  viewCalendar: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/calendar-view').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'hourly-view-calendar'

  viewWorkers: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      collection = @getChannel().request 'db:worker:collection'
      View = require('./views/list-workers').default
      view = new View
        collection: collection
      @layout.showChildView 'content', view
      response = collection.fetch()
      response.done ->
        console.log "workers fetched"
    # name the chunk
    , 'hourly-view-list-workers'
        
  viewPotentialWorkers: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      pworkers = AppChannel.request 'get-potential-workers'
      View = require('./views/potential-workers').default
      view = new View
        collection: pworkers
      response = pworkers.fetch()
      response.done ->
        console.log "pworkers fetched", pworkers
      @layout.showChildView 'content', view
    # name the chunk
    , 'hourly-view-potential-workers'

      
export default Controller

