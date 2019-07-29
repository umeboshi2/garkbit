import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import ms from 'ms'
import Leaflet from 'leaflet'

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
    
# FIXME - subclass Leaflet.Icon for font-awesome/glyphicons
# using Leaflet.Icon.Glyph as example
myIcon = Leaflet.icon
  iconUrl: iconUrl

class MainView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.listview-header', "All Locations"
    tc.div '.map-container'
  ui:
    mapContainer: '.map-container'
  regions:
    mapContainer: '@ui.mapContainer'
  onDomRefresh: ->
    console.log "onDomRefresh"
    @getLocation()
    
  onRender: ->
    console.log "onRender"

  getLocation: ->
    options =
      success: @locationSuccess
      error: @locationError
    MainChannel.request 'main:app:getCurrentPosition', options
    
  showMap: ->
    view = new BaseMapView
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
    @addMarkers view.Map
    
    
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


  addMarkers: (map) ->
    locations = AppChannel.request 'db:userlocation:collection'
    console.log "addMarkers", @currentPosition
    response = locations.fetch
      data:
        # FIXME
        #limit: 9999
        all: true
        peer:
          latitude: @currentPosition.latitude
          longitude: @currentPosition.longitude
          radius: 500
          
    response.fail ->
      MessageChannel.request 'xhr-error', response
    response.done ->
      for model in locations.models
        do (model) ->
          location = model.get 'location'
          coords = [location.latitude, location.longitude]
          marker = Leaflet.marker coords,
            icon: myIcon
            title: model.get 'name'
          marker.on 'click', ->
            console.log "marker clicked", marker, marker.title
          marker.addTo map
          


export default MainView
