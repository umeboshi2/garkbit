import { Radio, history } from 'backbone'
import { View } from 'backbone.marionette'
import tc from 'teacup'
import Leaflet from 'leaflet'
import 'leaflet.icon.glyph'


import 'leaflet/dist/leaflet.css'
import './glyph-marker-icon'

AppChannel = Radio.channel 'sunny'
GpsChannel = Radio.channel 'gps'

#AuthModel = MainChannel.request 'main:app:AuthModel'
#AuthCollection = MainChannel.request 'main:app:AuthCollection'

default_mapview_style = 'height:20em;'
fs_mapview_style = 'position: absolute; top: 0; right: 0; bottom: 0; left: 0;'

mapViewTemplate = tc.renderable ->
  tc.div '.row', ->
    tc.h2 'Map View'
    tc.div '.checkbox', ->
      tc.label ->
        tc.input '#watch-map', type:'checkbox'
        tc.text 'watch'
  tc.div '.row', ->
    tc.div "#map-view.col-md-4", style: default_mapview_style
    
class MapView extends View
  template: mapViewTemplate
  ui:
    map: '#map-view'
    watch: '#watch-map'
  events:
    'change @ui.watch': 'watch_button'
  defaultMapStyle: default_mapview_style
  fsMapStyle: fs_mapview_style
  first_location_error: false

  
  watch_button: (event) ->
    if event.target.checked
      console.log "Watch me!!!!", @ui.map
      @Map.locate
        watch: true
    else
      console.log "Stop watching me....", @ui.map
      @Map.locate
        watch: false
      
    
  addYardMarkers: ->
    yards = AppChannel.request 'db:yard:collection'
    response = yards.fetch
      data:
        limit: 50
    response.done =>
      console.log "YARDS", yards
      for model in yards.models
        do (model) =>
          atts = model.attributes.location
          if atts.latitude
            loc = [atts.latitude, atts.longitude]
            marker = Leaflet.marker loc,
              icon: Leaflet.icon.glyph
                prefix: 'fa'
                glyph: 'circle'
              url: "#sunny/yards/view/#{atts.id}"
              title: model.attributes.name
            marker.on 'click', ->
              history.navigate "#sunny/yards/view/#{model.id}", trigger: true
            marker.addTo @Map
    
  addPositionMarkers: ->
    positions = GpsChannel.request 'position-collection'
    response = positions.fetch()
    response.done =>
      for model in positions.models
        atts = model.attributes
        if atts.latitude
          loc = [atts.latitude, atts.longitude]
          marker = Leaflet.marker loc,
            icon: Leaflet.icon.glyph
              prefix: 'fa'
              glyph: 'circle'
            url: "#sunny/yards/view/#{atts.id}"
          console.log "marker location", loc, atts.id
          marker.addTo @Map
    
  onDomRefresh: ->
    @Map = Leaflet.map 'map-view'
    @Map.on 'moveend', @getCenter
    @Map.on 'locationerror', @onLocationError
    @Map.locate
      setView: true
      watch: false
      enableHighAccuracy: true
    layer = Leaflet.tileLayer 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    layer.addTo @Map
    console.log "MAP, LAYER", @Map, layer
    #@addPositionMarkers()
    @addYardMarkers()
    
      
  getCenter: =>
    console.log @Map.getCenter()

  onLocationError: (event) =>
    console.log "unable to get location", event
    if not @first_location_error
      console.log 'initialize map location'
      location = [31.33, -89.28]
      @Map.setView location, 13
      @first_location_error = true
      
export default MapView

