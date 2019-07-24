import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

import objectifyCoordinates from 'tbirds/util/objectify-coordinates'
import capitalize from 'tbirds/util/capitalize'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'places'

detailListComponent = tc.renderable (model, field) ->
  tc.dl '.row', ->
    tc.dt '.col', capitalize field
    tc.dd '.col', model[field]


class StatusView extends Marionette.View
  template: tc.renderable (model) ->
    coords = model.coords
    tc.div '.card', ->
      tc.div '.card-body', ->
        ['latitude', 'longitude', 'accuracy'].forEach (f) ->
          detailListComponent coords, f
      tc.div '.card-footer', ->
        tc.button '.cancel-btn.btn.btn-warning', "Cancel"
        tc.button '.add-location-btn.btn.btn-primary', "Add location"
  ui:
    status: '.status'
    addLocationBtn: '.add-location-btn'
    cancelBtn: '.cancel-btn'
  events:
    'click @ui.addLocationBtn': 'addLocationBtnClicked'
    'click @ui.cancelBtn': 'cancelBtnClicked'
    
  addLocationBtnClicked: ->
    console.log "addLocationBtnClicked"
    require.ensure [], () =>
      View = require("./add-location-modal").default
      view = new View
        model: @model
      MainChannel.request 'main:app:show-modal', view

  cancelBtnClicked: ->
    @trigger "add:location:cancelled"
    
    
export default StatusView
