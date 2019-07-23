import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import ms from 'ms'

import objectifyCoordinates from 'tbirds/util/objectify-coordinates'
import StatusView from './current-location'
import ViewLocation from './view-location'
import Timer from 'tiny-timer'

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
    tc.div '.row', ->
      tc.span ->
        tc.button '.get-location-btn.btn.btn-primary', ->
          tc.text 'Get Location'
    tc.div '.row', ->
      tc.div '.col.wait-progress'
    #  tc.span '.wait-progress'
    tc.div '.row.main-map-container'
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
    model = @collection.at 0
    response = model.fetch()
    response.fail ->
      MessageChannel.request 'xhr-error', response
    response.done =>
      view = new ViewLocation
        model: model
      @showChildView 'mainMapContainer', view
      
    

  locationBtnClicked: ->
    options =
      success: @locationSuccess
      error: @locationError
    MainChannel.request 'main:app:getCurrentPosition', options
    @ui.locationBtn.removeClass 'btn-primary'
    @ui.locationBtn.addClass 'btn-warning'
    
  locationSuccess: (position) =>
    @ui.locationBtn.hide()
    @ui.mainMapContainer.hide()
    coords = objectifyCoordinates position.coords
    Model = AppChannel.request 'db:userlocation:modelClass'
    model = new Model
      coords: coords
      timestamp: position.timestamp
    view = new StatusView
      model: model
    @showChildView 'locationStatus', view
    
  locationError: (options) =>
    console.log "locationError", options
    MessageChannel.request 'warning', options.message
    @ui.locationBtn.removeClass 'btn-warning'
    @ui.locationBtn.addClass 'btn-primary'
    @showWaitProgress()
    
  showWaitProgress: ->
    @ui.locationBtn.hide()
    model = new ProgressModel
    valuemax = 100
    model.set 'valuemax', valuemax
    model.set 'valuenow', valuemax
    view = new ProgressView
      className: 'progress row'
      model: model
      wrapperClasses: "col"
      childViewOptions:
        className: 'progress-bar progress-bar-striped bg-warning'
    @showChildView 'waitProgress', view
    currentValue = valuemax

    waitIsOver = =>
      @getRegion('waitProgress').empty()
      @ui.locationBtn.show()

    duration = ms '11s'
    model.set 'valuemax', duration
    model.set 'valuenow', duration
    timer = new Timer
    timer.on 'tick', (ticks) ->
      model.set 'valuenow', ticks % 100

    timer.on 'done', ->
      waitIsOver()
      
    timer.start duration,
      interval: ms '.1s'
      
    
    
    
      
    
  onAddLocationCancelled: ->
    @getRegion('locationStatus').empty()
    @ui.locationBtn.show()
    @ui.mainMapContainer.show()
    
export default MainView
