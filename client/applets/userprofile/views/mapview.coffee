Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
Leaflet = require 'leaflet'

require 'leaflet/dist/leaflet.css'

navigate_to_url = require 'tbirds/util/navigate-to-url'

MainChannel = Backbone.Radio.channel 'global'

map_view_template = tc.renderable (model) ->
  tc.div '.row', ->
    tc.h2 "Map View"
  tc.div '.row', ->
    tc.div '.col.status-message'
  tc.div "#map-view.row", style:'height:20em;'

    
class MapView extends Marionette.View
  template: map_view_template
  ui:
    map: '#map-view'
    statusMsg: '.status-message'
  onDomRefresh: ->
    @Map = Leaflet.map 'map-view'
    zoom_level = 13
    location = [31.33, -89.28]
    layer = Leaflet.tileLayer 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    layer.addTo @Map
    console.log "MAP, LAYER", @Map, layer
    #@Map.setView location, zoom_level
    @Map.on 'moveend', @getCenter
    @Map.on 'locationerror', @onLocationError
    @Map.on 'locationfound', @onLocationFound
    @Map.locate
      setView: true
      watch: false
      timeout: 1000
    circle = Leaflet.circle location, 200
    circle.addTo @Map
      
  getCenter: (event) =>
    console.log @Map.getCenter()

  onLocationError: (event) =>
    @ui.statusMsg.text 'unable to get location'
    if __DEV__
      console.log "unable to get location"
    location = [31.33, -89.28]
    @Map.setView location, 13
      
  onLocationFound: (event) =>
    @ui.statusMsg.text 'location found'
    if __DEV__
      console.log "location found", event
    
module.exports = MapView

