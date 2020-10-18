import { Radio } from 'backbone'
import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'

import './dbchannel'


MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'
AppChannel = Radio.channel 'company'

class Controller extends MainController
  channelName: 'company'
  layoutClass: ToolbarAppletLayout
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/index-view').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'company-view-index'

  addBoss: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/new-boss').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'company-view-add-boss'
    
  addCompany: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/new-edit-company').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'company-view-add-company'
    

  listCompanies: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      collection = @getChannel().request 'db:company:collection'
      View = require('./views/list-company').default
      view = new View
        collection: collection
      @layout.showChildView 'content', view
      response = collection.fetch()
      response.done ->
        console.log "models fetched", collection
      response.fail ->
        MessageChannel.request 'xhr-error', response
    # name the chunk
    , 'company-view-list-companies'

  viewCompany: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/view-company').default
      model = AppChannel.request 'db:company:get', id
      response = model.fetch()
      response.done =>
        view = new View
          model: model
        @layout.showChildView 'content', view
      response.fail ->
        MessageChannel.request 'xhr-error', response
    # name the chunk
    , 'company-view-view-company'

  workerIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/worker').default
      token = MainChannel.request 'main:app:decode-auth-token'
      worker = AppChannel.request 'db:worker:get', token.uid
      view = new View
        model: worker
      @layout.showChildView 'content', view
    # name the chunk
    , 'company-view-worker-index'

  viewCalendar: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/calendar').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'company-view-calendar'

  viewWorkSession: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/view-work-session').default
      # token = MainChannel.request 'main:app:decode-auth-token'
      session = AppChannel.request 'db:worksession:get', id
      response = session.fetch()
      response.fail ->
        MessageChannel.request 'xhr-error', response
      response.done =>
        view = new View
          model: session
        @layout.showChildView 'content', view
    # name the chunk
    , 'company-view-work-session'

    
export default Controller

