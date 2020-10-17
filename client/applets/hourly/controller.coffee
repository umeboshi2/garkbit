import { Radio } from 'backbone'
import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'

MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'

import './dbchannel'

class Controller extends MainController
  channelName: 'hourly'
  layoutClass: ToolbarAppletLayout
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      token = MainChannel.request 'main:app:decode-auth-token'
      worker = @getChannel().request 'db:worker:get', token.uid
      View = require('./views/index-view').default
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
      response.fail ->
        MessageChannel.request 'danger', response.responseJSON.message
    # name the chunk
    , 'hourly-view-list-workers'
        
  viewPotentialWorkers: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      pworkers = @getChannel().request 'get-potential-workers'
      View = require('./views/potential-workers').default
      view = new View
        collection: pworkers
      response = pworkers.fetch()
      response.done ->
        console.log "pworkers fetched", pworkers
      response.fail ->
        console.log "pworkers.fetch() failed", response
        MessageChannel.request 'danger', response.responseJSON.message
      @layout.showChildView 'content', view
    # name the chunk
    , 'hourly-view-potential-workers'

      
export default Controller

