import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'
import Leaflet from 'leaflet'

import 'leaflet/dist/leaflet.css'

class MapView extends MnView
  template: tc.renderable ->
    tc.div '.row', ->
      tc.div '.col.status-message'
    tc.div "#map-view.row", style:'height:20em;'
  ui:
    map: '#map-view'
    statusMsg: '.status-message'
  onDomRefresh: ->
    @Map = Leaflet.map 'map-view'
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
      
  getCenter: =>
    console.log @Map.getCenter()

  onLocationError: =>
    @ui.statusMsg.text 'unable to get location'
    if __DEV__
      console.log "unable to get location"
    location = [31.33, -89.28]
    @Map.setView location, 13
      
  onLocationFound: (event) =>
    @ui.statusMsg.text 'location found'
    if __DEV__
      console.log "location found", event

export default MapView
