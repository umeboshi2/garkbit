import Marionette from 'backbone.marionette'
import tc from 'teacup'

simpleTemplate = tc.renderable (model) ->
  tc.div '.row', ->
    tc.text JSON.stringify model
  
class MainView extends Marionette.View
  template: simpleTemplate
  

export default MainView
