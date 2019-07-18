import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import Leaflet from 'leaflet'

import 'leaflet/dist/leaflet.css'


MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'company'


class MainView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.listview-header', model.name
    tc.div model.description
    tc.div '#map-view.row', style:'height:20rem;'
  ui:
    map: '#map-view'
  regions:
    workers: '@ui.workers'
    potentialWorkers: '@ui.potentialWorkers'
  events:
    'click @ui.potentialBtn': 'potentialBtnClicked'
  onDomRefresh: ->
    @Map = Leaflet.map 'map-view'
    zoom_level = 13
    layer = Leaflet.tileLayer 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    layer.addTo @Map
    #@Map.on 'moveend', @getCenter
    #@Map.on 'locationerror', @onLocationError
    #@Map.on 'locationfound', @onLocationFound
    console.log "MODEL IS", @model
    location = @model.get 'location'
    data = @model.toJSON()
    console.log "DATA IS", data
    console.log "LOCATION IS", location
    coords = [location.latitude, location.longitude]
    console.log "COORDS", coords
    @Map.setView coords, 13
    
    
export default MainView
