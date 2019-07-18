import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

import navigate_to_url from 'tbirds/util/navigate-to-url'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'places'


class StatusView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.status'
  ui:
    status: '.status'
  onRender: ->
    console.log "StatusView", @model
    coords = @model.get 'coords'
    @ui.status.text "Lat: #{coords.latitude}, Long: #{coords.longitude}"
    

    
class MainView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.row.location-status'
  ui:
    locationStatus: '.location-status'
  regions:
    locationStatus: '@ui.locationStatus'
    

  onRender: ->
    console.log "onRender"
    options =
      success: @locationSuccess
      error: @locationError
    MainChannel.request 'main:app:getCurrentPosition', options
    
  locationSuccess: (options) =>
    console.log "locationSuccess", options
    view = new StatusView
      model: new Backbone.Model options
    @showChildView 'locationStatus', view
    
    

  locationError: (options) ->
    console.log "locationError", options
    MessageChannel.request 'warning', options.message
    
    
export default MainView
