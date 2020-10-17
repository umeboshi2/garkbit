import { View } from 'backbone.marionette'
import tc from 'teacup'

viewTemplate = tc.renderable (model) ->
  tc.div '.row.listview-list-entry', ->
    tc.h1 "#{model.appName} started."
    
class MainView extends View
  template: viewTemplate
  templateContext:
    appName: 'junk'

export default MainView
