import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import Leaflet from 'leaflet'

import 'leaflet/dist/leaflet.css'

import PaginateBar from 'tbirds/views/paginate-bar'
import BaseListView from 'tbirds/views/list-view'
import ConfirmDeleteModal from 'tbirds/views/confirm-delete-modal'


MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'places'


class ItemView extends Marionette.View
  template: tc.renderable (model) ->
    tc.span '.mr-auto', model.name
    tc.span '.ml-auto', ->
      tc.button '.delete-btn.btn.btn-sm.btn-danger', 'Delete'
  tagName: 'li'
  className: ->
    "list-group-item location-item row d-flex"
  ui:
    label: '.mr-auto'
    deleteBtn: '.delete-btn'
  triggers:
    'click @ui.label': 'location:selected'
    'click @ui.deleteBtn': 'location:delete'
  #onLocationSelected: ->
  #onLocationDelete: ->
    
class ListView extends BaseListView
  ItemView: ItemView
  template: tc.renderable ->
    tc.div '.paginate-bar'
    tc.div '.places-container.list-group'
  ui: ->
    itemList: '.places-container'
    paginateBar: '.paginate-bar'
  childViewTriggers:
    'location:selected': 'location:selected'
    'location:delete': 'location:delete'
class MapView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.card', style:'width: 18rem;', ->
      tc.div '.card-body', ->
        tc.h5 '.card-title', model.name
        tc.div '#map-view.card-text', style:'height:15rem;'
  ui:
    map: '#map-view'
    title: '.card-title'
  modelEvents:
    'change': 'onModelChange'
  mapOpdtions: ->
    minZoom: 14
  onDomRefresh: ->
    @Map = Leaflet.map 'map-view', @getOption('mapOptions')
    layer = Leaflet.tileLayer 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    layer.addTo @Map
    @setLocation()
    if __DEV__
      window.mymap = @Map

  setLocation: ->
    location = @model.get 'location'
    zoomLevel = 17
    coords = [location.latitude, location.longitude]
    @Map.setView coords, zoomLevel
    accuracy = location.accuracy
    if accuracy > 10
      accuracy = 10
    circle = Leaflet.circle coords, accuracy
    circle.addTo @Map

  onModelChange: ->
    console.log "model changed"
    @setLocation()
    @ui.title.text @model.get('name')
    id = @model.get('id')
    url = "#places/view/#{id}"
    MainChannel.request 'main:app:setLocationUrl', url
    
class MainView extends Marionette.View
  template: tc.renderable (model) ->
    #tc.div '.row', ->
    tc.div '.map-container.col'
    tc.div '.places-container.col'
  className: 'row'
  ui:
    mapContainer: '.map-container'
    placesContainer: '.places-container'
  regions:
    mapContainer: '@ui.mapContainer'
    placesContainer: '@ui.placesContainer'
  childViewTriggers:
    'location:selected': 'location:selected'
    'location:delete': 'location:delete'
  onRender: ->
    view = new MapView
      model: @model
    @showChildView 'mapContainer', view
    collection = AppChannel.request 'db:userlocation:collection'
    response = collection.fetch()
    response.fail ->
      MessageChannel.request 'xhr-error', response
    response.done =>
      view = new ListView
        collection: collection
      @showChildView 'placesContainer', view
  onLocationSelected: (view) ->
    model = view.model
    response = model.fetch()
    response.fail ->
      MessageChannel.request 'xhr-error', response
    response.done =>
      console.log "MODEL", model
      @model.set model.toJSON()

  onLocationDelete: (view) ->
    console.log "View", view
    mView = new ConfirmDeleteModal
      model: view.model
    MainChannel.request 'main:app:show-modal', mView
    
    
    
export default MainView
