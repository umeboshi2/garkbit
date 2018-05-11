_ = require 'underscore'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
JView = require 'json-view'
require 'json-view/devtools.css'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'ebcsv'

class JsonView extends Marionette.View
  template: -> tc.renderable (model) ->
    tc.div '.jsonview'
  ui:
    body: '.jsonview'
    
  onDomRefresh: ->
    console.log 'onDomRefresh->jsonview'
    @expanded_view = false
    @json_view = new JView @model.toJSON()
    @ui.body.prepend @json_view.dom


module.exports = JsonView
