import Backbone from 'backbone'
import { View } from 'backbone.marionette'
import tc from 'teacup'
import ms from 'ms'

import ToolbarView from 'tbirds/views/button-toolbar'
import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'
import SlideDownRegion from 'tbirds/regions/slidedown'

import navigate_to_url from 'tbirds/util/navigate-to-url'
import scroll_top_fast from 'tbirds/util/scroll-top-fast'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'sunny'

class AppletLayout extends View
  template: tc.renderable () ->
    tc.div '#main-content.col-sm-12'
  regions: ->
    region = new SlideDownRegion
      el: '#main-content'
    region.slide_speed = ms '.01s'
    content: region
  

class Controller extends MainController
  layoutClass: ToolbarAppletLayout
  clients: AppChannel.request 'client-collection'
  
  list_clients: () ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      ListView = require './views/clientlist'
      view = new ListView
        collection: @clients
      response = @clients.fetch()
      response.done =>
        @layout.showChildView 'content', view
      response.fail ->
        MessageChannel.request 'danger', "Failed to load clients."
    # name the chunk
    , 'sunny-view-list-clients'

  new_client: () ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      { NewClientView } = require './views/clienteditor'
      @layout.showChildView 'content', new NewClientView
    # name the chunk
    , 'sunny-view-new-client'
      
  add_yard: (client_id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      YardView = require('./views/yardview').default
      console.log "YardView", YardView
      # { NewYardView } = require './views/yardeditor'
      # view = new NewYardView
      model = AppChannel.request 'new-yard'
      model.set 'sunnyclient_id', client_id
      view = new YardView
        model: model
      @layout.showChildView 'content', view
    # name the chunk
    , 'sunny-view-add-yard'

  view_yard: (yard_id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      YardView = require './views/yardview'
      model = AppChannel.request 'get-yard', yard_id
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
          MessageChannel.request 'danger', "Failed to load yard data."
    # name the chunk
    , 'sunny-view-yard-view'

  yard_routines: (yard_id) ->
    console.log 'yard_routines', yard_id
    
  _show_edit_client: (vclass, model) ->
    view = new vclass
      model: model
    @layout.showChildView 'content', view
    
  edit_client: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      { EditClientView } = require './views/clienteditor'
      model = AppChannel.request 'get-client', id
      if model.has 'name'
        @_show_edit_client EditClientView, model
      else
        response = model.fetch()
        response.done =>
          @_show_edit_client EditClientView, model
        response.fail ->
          MessageChannel.request 'danger', "Failed to load client data."
    # name the chunk
    , 'sunny-view-edit-client'
      

  _fetch_yards_and_view_client: (client, viewclass) ->
    yards = AppChannel.request 'yard-collection'
    yresponse = yards.fetch
      data:
        sunnyclient_id: client.id
    yresponse.done =>
      view = new viewclass
        model: client
        collection: yards
      window.cview = view
      @layout.showChildView 'content', view
    yresponse.fail ->
      MessageChannel.request 'danger', 'Failed to load yards.'
    
      
  view_client: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      ClientMainView = require './views/viewclient'
      model = AppChannel.request 'get-client', id
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
      ViewClass = require './views/mapview'
      view = new ViewClass
      @layout.showChildView 'content', view
      #content = @layout.getRegion 'content'
      #content.empty()
      #content.show view
      #@_show_content view
      console.log 'view shown?', view
      
    # name the chunk
    , 'sunny-map-view'

    
module.exports = Controller

  
