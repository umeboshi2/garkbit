import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

import objectifyCoordinates from 'tbirds/util/objectify-coordinates'
import StatusView from './current-location'
import ViewLocation from './view-location'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'places'
    
class MainView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.row.location-status', "Current Location: Unknown"
    tc.div '.get-location-btn.btn.btn-primary', 'Get Location'
    tc.div '.row.main-map-container'
  ui:
    locationStatus: '.location-status'
    locationBtn: '.get-location-btn'
    mainMapContainer: '.main-map-container'
    
  regions:
    locationStatus: '@ui.locationStatus'
    mainMapContainer: '@ui.mainMapContainer'
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
    
  locationError: (options) ->
    console.log "locationError", options
    MessageChannel.request 'warning', options.message
    
  onAddLocationCancelled: ->
    @getRegion('locationStatus').empty()
    @ui.locationBtn.show()
    @ui.mainMapContainer.show()
    
export default MainView
