import { Radio } from 'backbone'

import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'

MessageChannel = Radio.channel 'messages'
AppChannel = Radio.channel 'sunny'

class Controller extends MainController
  layoutClass: ToolbarAppletLayout
  clients: AppChannel.request 'db:client:collection'
  
  listClients: () ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      ListView = require('./views/clientlist').default
      view = new ListView
        collection: @clients
      response = @clients.fetch()
      response.done =>
        @layout.showChildView 'content', view
      response.fail ->
        MessageChannel.request 'xhr-error', response
    # name the chunk
    , 'sunny-view-list-clients'

  newClient: () ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      { NewClientView } = require('./views/clienteditor')
      @layout.showChildView 'content', new NewClientView
    # name the chunk
    , 'sunny-view-new-client'
      
  addYard: (client_id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      YardView = require('./views/yard').default
      console.log "YardView", YardView
      # { NewYardView } = require './views/yardeditor'
      # view = new NewYardView
      model = AppChannel.request 'db:yard:new'
      model.set 'sunnyclient_id', client_id
      view = new YardView
        model: model
      @layout.showChildView 'content', view
    # name the chunk
    , 'sunny-view-add-yard'

  viewYard: (yard_id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      YardView = require('./views/yard').default
      model = AppChannel.request 'db:yard:get', yard_id
      if model.has 'sunnyclient'
        @_show_edit_client YardView, model
      else
        response = model.fetch
          data:
            #"include[]": ['sunnyclient', 'geoposition']
            include: '*'
        response.done =>
          @_show_edit_client YardView, model
      response.fail ->
        MessageChannel.request 'xhr-error', response
    # name the chunk
    , 'sunny-view-yard-view'

  yardRoutines: (yard_id) ->
    console.log 'yard_routines', yard_id
    
  _show_edit_client: (vclass, model) ->
    view = new vclass
      model: model
    @layout.showChildView 'content', view
    
  editClient: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      { EditClientView } = require('./views/clienteditor')
      model = AppChannel.request 'db:client:get', id
      if model.has 'name'
        @_show_edit_client EditClientView, model
      else
        response = model.fetch()
        response.done =>
          @_show_edit_client EditClientView, model
        response.fail ->
          MessageChannel.request 'xhr-error', response
    # name the chunk
    , 'sunny-view-edit-client'
      

  _fetch_yards_and_view_client: (client, viewclass) ->
    yards = AppChannel.request 'db:yard:collection'
    yresponse = yards.fetch
      data:
        where:
          sunnyclient_id: client.id
    yresponse.done =>
      view = new viewclass
        model: client
        collection: yards
      window.cview = view
      @layout.showChildView 'content', view
    yresponse.fail ->
      MessageChannel.request 'danger', 'Failed to load yards.'
    
      
  viewClient: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      ClientMainView = require('./views/viewclient').default
      model = AppChannel.request 'db:client:get', id
      if model.has 'name'
        @_fetch_yards_and_view_client model, ClientMainView
      else
        response = model.fetch()
        response.done =>
          @_fetch_yards_and_view_client model, ClientMainView
        response.fail ->
          MessageChannel.request 'danger', "Failed to load client data."
    # name the chunk
    , 'sunny-view-client-view'
      
  mapView: ->
    @setupLayoutIfNeeded()
    console.log 'layout should be ready'
    require.ensure [], () =>
      ViewClass = require('./views/mapview').default
      view = new ViewClass
      @layout.showChildView 'content', view
      #content = @layout.getRegion 'content'
      #content.empty()
      #content.show view
      #@_show_content view
      console.log 'view shown?', view
      
    # name the chunk
    , 'sunny-map-view'

export default Controller

  
