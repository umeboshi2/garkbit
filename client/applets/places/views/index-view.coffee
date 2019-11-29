import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import ms from 'ms'
import Leaflet from 'leaflet'

import objectifyCoordinates from 'tbirds/util/objectify-coordinates'
import StatusView from './current-location'
import Timer from 'tiny-timer/dist/tiny-timer.js'
import BaseMapView from 'tbirds/views/base-map'

import {
  ProgressView
  ProgressModel
  } from 'tbirds/views/progress'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'places'
    
class MainView extends Marionette.View
  template: tc.renderable (model) ->
    #tc.div '.row.location-status', "Current Location: Unknown"
    tc.div '.row.main-map-container'
    tc.div '.row', ->
      tc.span ->
        tc.button '.get-location-btn.btn.btn-primary', ->
          tc.text 'Get Location'
    tc.div '.row.location-status'
    tc.div '.row', ->
      tc.div '.col.wait-progress'
  ui:
    locationStatus: '.location-status'
    locationBtn: '.get-location-btn'
    mainMapContainer: '.main-map-container'
    waitProgress: '.wait-progress'
  regions:
    locationStatus: '@ui.locationStatus'
    mainMapContainer: '@ui.mainMapContainer'
    waitProgress: '@ui.waitProgress'
  events:
    'click @ui.locationBtn': 'locationBtnClicked'
  childViewEvents:
    'add:location:cancelled': 'onAddLocationCancelled'

  onRender: ->
    if @collection.length < 1
      MessageChannel.request 'warning', 'No locations found'

  locationBtnClicked: ->
    options =
      success: @locationSuccess
      error: @locationError
    MainChannel.request 'main:app:getCurrentPosition', options
    @ui.locationBtn.removeClass 'btn-primary'
    @ui.locationBtn.addClass 'btn-warning'
    
  locationSuccess: (position) =>
    @ui.locationBtn.hide()
    @ui.locationBtn.removeClass 'btn-warning'
    @ui.locationBtn.addClass 'btn-primary'
    coords = objectifyCoordinates position.coords
    Model = AppChannel.request 'db:userlocation:modelClass'
    model = new Model
      coords: coords
      timestamp: position.timestamp

    view = new BaseMapView
      model: model
      mapWidth: '12rem'
      mapHeight: '10rem'
    @showChildView 'mainMapContainer', view
    
    
    zoomLevel = 16
    latlong = [coords.latitude, coords.longitude]
    accuracy = coords.accuracy
    if accuracy > 100
      zoomLevel = 13
    view.Map.setView latlong, zoomLevel
    circle = Leaflet.circle latlong, accuracy
    circle.addTo view.Map
    
    view = new StatusView
      model: model
    @showChildView 'locationStatus', view

  setLocation: (view) ->
    console.log "setLocation", view
    location = view.model.get 'location'
    zoomLevel = 17
    coords = [location.latitude, location.longitude]
    accuracy = location.accuracy
    if accuracy > 10
      accuracy = 10
    circle = Leaflet.circle coords, accuracy
    circle.addTo @Map

  locationError: (options) =>
    console.log "locationError", options
    MessageChannel.request 'warning', options.message
    @ui.locationBtn.removeClass 'btn-warning'
    @ui.locationBtn.addClass 'btn-primary'
    @showWaitProgress()
    
  showWaitProgress: ->
    @ui.locationBtn.hide()
    model = new ProgressModel
    view = new ProgressView
      className: 'progress row'
      model: model
      wrapperClasses: "col"
      childViewOptions:
        className: 'progress-bar progress-bar-striped bg-warning'
    @showChildView 'waitProgress', view

    waitIsOver = =>
      @getRegion('waitProgress').empty()
      @ui.locationBtn.show()

    duration = ms '11s'
    valuemax = 100
    model.set 'valuemax', duration
    model.set 'valuenow', duration
    timer = new Timer
    timer.on 'tick', (ticks) ->
      model.set 'valuenow', ticks

    timer.on 'done', ->
      waitIsOver()
      
    timer.start duration,
      interval: ms '.1s'
      
    
    
    
      
    
  onAddLocationCancelled: ->
    @getRegion('locationStatus').empty()
    @ui.locationBtn.show()
    @ui.mainMapContainer.show()
    
export default MainView
