Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
marked = require 'marked'

{ navigate_to_url } = require 'tbirds/util/navigate-to-url'

view_template = tc.renderable (model) ->
  tc.span model.name
  tc.div '.row.listview-list-entry', ->
    tc.dt "Name"
    tc.dd model.name
    tc.dt "Description"
    tc.dd -> tc.raw marked model.description
    
    
class MainView extends Backbone.Marionette.View
  template: tc.renderable (model) ->
    #tc.div model.name
    tc.dl ->
      tc.dt 'Name'
      tc.dd model.name
      console.log "MODEL_NAME", model.name
      tc.dt 'Description'
      tc.dd -> tc.raw marked model.description
      
      
module.exports = MainView

