import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import ms from 'ms'
import Leaflet from 'leaflet'
import 'leaflet.icon.glyph'

import 'jquery-ui/ui/widgets/slider'
import 'jquery-ui/themes/base/base.css'
import 'jquery-ui/themes/base/core.css'
import 'jquery-ui/themes/base/slider.css'
import 'jquery-ui/themes/base/theme.css'
#import 'jquery-ui/themes/base/all.css'

import objectifyCoordinates from 'tbirds/util/objectify-coordinates'
import StatusView from './current-location'
import Timer from 'tiny-timer'
import BaseMapView from 'tbirds/views/base-map'
import iconUrl from 'tbirds/util/glyph-marker-icon'

import {
  ProgressView
  ProgressModel
  } from 'tbirds/views/progress'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'places'
    
class MainView extends Marionette.View
  initialize: (options) ->
    @currentMarkers = @getOption('currentMarkers') or []
    @currentRadius = @getOption('currentRadius') or 0
  template: tc.renderable (model) ->
    tc.div '.listview-header', "All Locations"
    tc.div '.mb-2.radius-slider'
    tc.div '.radius-label'
    tc.div '.col.map-container'
  ui:
    mapContainer: '.map-container'
    radiusSlider: '.radius-slider'
    radiusLabel: '.radius-label'
  regions:
    mapContainer: '@ui.mapContainer'
  onDomRefresh: ->
    console.log "onDomRefresh"
    @getLocation()
    sliderOptions =
      #values: [1,5,19]
      animate: 'fast'
      classes:
        'ui-slider': 'highlight'
      disabled: false
      max: 1500
      min: 0
      step: 10
      change: (event, ui) =>
        #console.log "event, ui", event, ui
        console.log "ui.value", ui.value
        @setRadius ui.value
        @ui.radiusLabel.text "(#{ui.value} meters)"
    @ui.radiusSlider.slider sliderOptions


    console.log "@ui.radiusSlider", @ui.radiusSlider
      
    
    
  onRender: ->
    console.log "onRender"

  getLocation: ->
    options =
      success: @locationSuccess
      error: @locationError
    MainChannel.request 'main:app:getCurrentPosition', options
    
  showMap: ->
    view = new BaseMapView
      mapWidth: '30rem'
    @showChildView 'mapContainer', view
    console.log "view", view
    coords = @currentPosition
    zoomLevel = 13
    latlong = [coords.latitude, coords.longitude]
    accuracy = coords.accuracy
    if accuracy > 150
      zoomLevel = 13
    view.Map.setView latlong, zoomLevel
    #circle = Leaflet.circle latlong, accuracy
    #circle.addTo view.Map
    @addMarkers
      map:view.Map
      radius: @currentRadius
      
    
  # need double arrow to use as callback
  locationSuccess: (position) =>
    console.log "locationSuccess", position
    position = position.coords
    @currentPosition = position
    console.log "finish rendering map"
    @showMap()
    
    
  # need double arrow to use as callback
  locationError: () ->
    MessageChannel.request 'warning', 'Unable to get current location.'


  setMarkersOrig: (markers) ->
    for marker in markers
      do (marker) ->
        null

  addMarkers: (options) ->
    locations = AppChannel.request 'db:userlocation:collection'
    console.log "addMarkers", @currentPosition
    response = locations.fetch
      data:
        all: true
        peer:
          latitude: @currentPosition.latitude
          longitude: @currentPosition.longitude
          radius: @currentRadius
    response.done =>
      map = @getRegion('mapContainer').currentView.Map
      console.log "map is", map
      options =
        models: locations.models
        map: map
      @setMarkers options
      
  setMarkers: (options) ->
    console.log "setMarkers options", options
    for model in options.models
      do (model) =>
        location = model.get 'location'
        coords = [location.latitude, location.longitude]
        marker = Leaflet.marker coords,
          icon: Leaflet.icon.glyph
            prefix: 'fa'
            glyph: "circle"
          title: model.get 'name'
        marker.on 'click', ->
          console.log "marker clicked", marker, marker.title
        marker.addTo options.map
        @currentMarkers.push marker
        

  setRadius: (radius) ->
    @currentRadius = radius
    @currentMarkers.forEach (marker) =>
      map = @getRegion('mapContainer').currentView.Map
      map.removeLayer(marker)
    locations = AppChannel.request 'db:userlocation:collection'
    console.log "addMarkers", @currentPosition
    response = locations.fetch
      data:
        all: true
        peer:
          latitude: @currentPosition.latitude
          longitude: @currentPosition.longitude
          radius: @currentRadius
    response.done =>
      map = @getRegion('mapContainer').currentView.Map
      @setMarkers
        models: locations.models
        map: map


export default MainView
