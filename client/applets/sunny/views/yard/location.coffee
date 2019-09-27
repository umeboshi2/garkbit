import _ from 'underscore'
import Backbone from 'backbone'
import { View } from 'backbone.marionette'
import tc from 'teacup'
import Leaflet from 'leaflet'

import BaseMapView from 'tbirds/views/base-map'

import navigate_to_url from 'tbirds/util/navigate-to-url'

  
MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'sunny'
GpsChannel = Backbone.Radio.channel 'gps'

yard_location_text = (position) ->
  latitude = position.latitude.toPrecision 4
  longitude = position.longitude.toPrecision 4
  return "#{latitude}, #{longitude} (#{position.accuracy})"


class BaseYardLocationView extends View
  template:  tc.renderable (model) ->
    console.log "yardlocation view", model
    if model?.location
      ytext = yard_location_text model.location
    else
      ytext = 'Not Set'
    tc.div '.yard-location-btn.badge.badge-primary', ''
    tc.div ->
      tc.small ->
        tc.span "Location:"
        tc.small ".yard-location", ytext
    tc.div '.yard-map'
  ui: ->
    yardLocation: '.yard-location'
    yardButton: '.yard-location-btn'
    yardMap: '.yard-map'
  regions:
    yardMap: '@ui.yardMap'
  events: ->
    'click @ui.yardButton': 'yardButtonClicked'

  currentPosition: null
  
  yardButtonClicked: (event) ->
    if @currentPosition is null
      @get_location()
    else
      @saveCurrentPosition()
        
  setGettingLocationHtml: (source) ->
    @ui.yardLocation.html tc.render ->
      tc.span "getting location from #{source}......"
      tc.i '.fa.fa-spinner.fa-spin'

  addNewYard: ->
    gp = GpsChannel.request 'new-position'
    gp.set @currentPosition
    response = gp.save()
    response.done (data, status, xhr) =>
      console.log "new position added"
      console.log 'data', data
      @model.set 'location_id', data.id
      name = yard_location_text data
      @model.set 'name', name
      mresponse = @model.save()
      mresponse.done (data, status, xhr) ->
        msg = "Yard #{data.name} added successfully!"
        MessageChannel.request 'success', msg
        navigate_to_url "#sunny/yards/view/#{data.id}"
        

  addNewPositionToYard: ->
    null
    
  updateYardLocation: ->
    location_id = @model.get('location_id')
    new_position = false
    success_msg = "New Yard Position Saved"
    if location_id is null
      new_position = true
      gp = GpsChannel.request 'new-position'
    else
      gp = GpsChannel.request 'get-position', location_id
    gp.set @currentPosition
    MessageChannel.request 'info', 'Adding new position to yard', false, 2000
    response = gp.save()
    response.done (data, status, xhr) =>
      if new_position
        @model.set 'location_id', data.id
        mresponse = @model.save()
        mresponse.done ->
          MessageChannel.request 'success', success_msg
      else
        MessageChannel.request 'success', success_msg
    
  saveCurrentPosition: ->
    if @model.has 'id'
      MessageChannel.request 'info', 'Update Yard Position'
      @updateYardLocation()
    else
      MessageChannel.request 'info', 'Add new Yard'
      @addNewYard()
      
  # need double arrow to use as callback
  locationSuccess: (position) =>
    console.log "locationSuccess", position
    position = position.coords
    @currentPosition = position
    @ui.yardLocation.text yard_location_text position
    if @model.attributes?.geoposition
      @ui.yardButton.text 'Save New Position'
    else
      @ui.yardButton.text 'Set Position'
    @ui.yardButton.show()

  locationError: () =>
    MessageChannel.request 'warning', 'Unable to get current location.'
    console.log "@ui", @ui
    @ui.yardButton.show()
    @ui.yardButton.text 'Get Location'
    @ui.yardLocation.text 'Unset'
    
    
  getLocation: ->
    options =
      success: @locationSuccess
      error: @locationError
    MainChannel.request 'main:app:getCurrentPosition', options
    
  onDomRefresh: ->
    console.log "onDomRefresh called"
    @setGettingLocationHtml 'database'
    location = @model.get 'location'
    console.log "location", location
    if location
      @ui.yardLocation.text yard_location_text location
      @ui.yardButton.text 'Update Location'
      view = new BaseMapView
        model: @model

      coords = location
      @showChildView 'yardMap', view
      zoomLevel = 16
      latlong = [coords.latitude, coords.longitude]
      accuracy = coords.accuracy
      if accuracy > 100
        zoomLevel = 13
      view.Map.setView latlong, zoomLevel
      circle = Leaflet.circle latlong, accuracy
      circle.addTo view.Map
      
      return
    else if not location?.latitude and @model.id
      msg = "There is no gps location for this yard!"
      MessageChannel.request 'warning', msg
    @ui.yardLocation.text 'Unset'
    @ui.yardButton.text 'Get Location'

export default BaseYardLocationView
