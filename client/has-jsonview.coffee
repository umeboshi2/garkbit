import Backbone from 'backbone'
import Marionette from 'backbone.marionette'

JView = require 'json-view'
require 'json-view/devtools.css'


class HasJsonView extends Marionette.Behavior
  options: ->
    jviewSelector: '.jsonview'
  ui: ->
    jsonView: @getOption 'jviewSelector'
  onDomRefresh: ->
    obj = @view.model.toJSON()
    @view.jsonView = new JView obj
    @ui.jsonView.prepend @view.jsonView.dom
    
  

export default HasJsonView
