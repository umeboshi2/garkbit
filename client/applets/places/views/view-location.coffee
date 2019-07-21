import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import Leaflet from 'leaflet'

import 'leaflet/dist/leaflet.css'


MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'company'

cardTemplate = tc.renderable (model) ->
  #tc.div '#map-view.row', style:'height:20rem;'
  tc.div '.card', style:'width: 18rem;', ->
    tc.div '.card-body', ->
      tc.h5 '.card-title', model.name
      tc.div '#map-view.card-text', style:'height:20rem;'
zbasicTemplate = tc.renderable (model) ->
  tc.div '.row', ->
    tc.div '#map-view.col', style:'height:20rem;'

basicTemplate = tc.renderable (model) ->
  tc.div '.row', ->
    tc.h2 "Map View"
  tc.div '.row', ->
    tc.div '.col.status-message'
  tc.div "#map-view.row", style:'height:20em;'
  
    
class MainView extends Marionette.View
  template: cardTemplate
  ui:
    map: '#map-view'
  regions:
    workers: '@ui.workers'
    potentialWorkers: '@ui.potentialWorkers'
  events:
    'click @ui.potentialBtn': 'potentialBtnClicked'
  onDomRefresh: ->
    @Map = Leaflet.map 'map-view'
    zoom_level = 13
    layer = Leaflet.tileLayer 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    layer.addTo @Map
    #@Map.on 'moveend', @getCenter
    #@Map.on 'locationerror', @onLocationError
    #@Map.on 'locationfound', @onLocationFound
    console.log "MODEL IS", @model
    location = @model.get 'location'
    data = @model.toJSON()
    console.log "DATA IS", data
    console.log "LOCATION IS", location
    coords = [location.latitude, location.longitude]
    console.log "COORDS", coords
    @Map.setView coords, 100
    @Map.setZoom 13
    circle = Leaflet.circle coords, location.accuracy
    circle.addTo @Map
    
    
export default MainView
