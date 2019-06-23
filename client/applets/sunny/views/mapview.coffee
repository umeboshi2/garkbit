import Backbone from 'backbone'
import { View } from 'backbone.marionette'
import tc from 'teacup'
import ms from 'ms'
import Leaflet from 'leaflet'


require 'leaflet/dist/leaflet.css'

import navigate_to_url from 'tbirds/util/navigate-to-url'
import iconUrl from './glyph-marker-icon'


#{ GhostModel
#  GhostCollection } = require '../../ghost/base'

MainChannel = Backbone.Radio.channel 'global'
SunnyChannel = Backbone.Radio.channel 'sunny'
GpsChannel = Backbone.Radio.channel 'gps'

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'

default_mapview_style = 'height:20em;'
fs_mapview_style = 'position: absolute; top: 0; right: 0; bottom: 0; left: 0;'

map_view_template = tc.renderable (model) ->
  tc.div ->
    tc.h2 "Map View"
    tc.div '.checkbox', ->
      tc.label ->
        tc.input '#watch-map', type:'checkbox'
        tc.text 'watch'
    tc.div "#map-view", style: default_mapview_style
    


mapViewTemplate = tc.renderable (model) ->
  tc.div '.row', ->
    tc.h2 'Map View'
    tc.div '.checkbox', ->
      tc.label ->
        tc.input '#watch-map', type:'checkbox'
        tc.text 'watch'
  tc.div '.row', ->
    tc.div "#map-view.col-md-4", style: default_mapview_style
    
# FIXME - subclass Leaflet.Icon for font-awesome/glyphicons
# using Leaflet.Icon.Glyph as example
myicon = Leaflet.icon
  iconUrl: iconUrl
  
  
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
    console.log 'somwthing happened', event
    if event.target.checked
      console.log "Watch me!!!!", @ui.map
      @Map.locate
        watch: true
    else
      console.log "Stop watching me....", @ui.map
      @Map.locate
        watch: false
      
    
  addYardMarkers: ->
    yards = SunnyChannel.request 'yard-collection'
    fullyards = yards
    if false
      fullyards = new AuthCollection
      #  model: yards.model
      #  url: ->
      #    "#{yards.url}/include"
      fullyards.model = yards.model
      fullyards.url = "#{yards.url}/include"
    response = fullyards.fetch()
    response.done =>
      console.log "FULLYARDS", fullyards
      for model in fullyards.models
        do (model) =>
          atts = model.attributes.geoposition
          if atts.latitude
            loc = [atts.latitude, atts.longitude]
            marker = Leaflet.marker loc,
              icon: myicon
              url: "#sunny/yards/view/#{atts.id}"
              title: model.attributes.name
            marker.on 'click', ->
              navigate_to_url "#sunny/yards/view/#{model.id}"
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
            icon: myicon
            url: "#sunny/yards/view/#{atts.id}"
          console.log "marker location", loc, atts.id
          marker.addTo @Map
    
  onDomRefresh: ->
    @Map = Leaflet.map 'map-view'
    zoom_level = 13
    location = [31.33, -89.28]
    #@Map.setView location, zoom_level
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
    
      
  getCenter: (event) =>
    console.log @Map.getCenter()

  onLocationError: (event) =>
    console.log "unable to get location", event
    if not @first_location_error
      console.log 'initialize map location'
      location = [31.33, -89.28]
      @Map.setView location, 13
      @first_location_error = true
      
module.exports = MapView

