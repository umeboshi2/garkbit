import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

import navigate_to_url from 'tbirds/util/navigate-to-url'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'places'

coordinateFields = [
  'latitude',
  'longitude',
  'altitude',
  'accuracy',
  'altitudeAccuracy',
  'heading',
  'speed',
]

class StatusView extends Marionette.View
  template: tc.renderable (model) ->
    coords = model.coords
    tc.div '.status', ->
      tc.dt 'Latitude'
      tc.dd coords.latitude
      tc.dt 'Longitude'
      tc.dd coords.longitude
    tc.button '.add-location-btn.btn.btn-primary', "Add location"
  ui:
    status: '.status'
    addLocationBtn: '.add-location-btn'
  events:
    'click @ui.addLocationBtn': 'addLocationBtnClicked'
  addLocationBtnClicked: ->
    console.log "addLocationBtnClicked"
    require.ensure [], () =>
      View = require("./add-location-modal").default
      view = new View
        model: @model
      MainChannel.request 'main:app:show-modal', view
      
    
class MainView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.row.location-status'
  ui:
    locationStatus: '.location-status'
  regions:
    locationStatus: '@ui.locationStatus'
  onRender: ->
    options =
      success: @locationSuccess
      error: @locationError
    MainChannel.request 'main:app:getCurrentPosition', options
  locationSuccess: (position) =>
    console.log "locationSuccess", position
    origCoords = position.coords
    coords = {}
    coordinateFields.forEach (field) ->
      value = origCoords[field]
      coords[field] = value
    Model = AppChannel.request 'db:userlocation:modelClass'
    model = new Model coords: coords
    view = new StatusView
      model: model
    @showChildView 'locationStatus', view
    
  locationError: (options) ->
    console.log "locationError", options
    MessageChannel.request 'warning', options.message
    
    
export default MainView
