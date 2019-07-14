import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'

import navigate_to_url from 'tbirds/util/navigate-to-url'

viewTemplate = tc.renderable (model) ->
  tc.div '.row.listview-list-entry', ->
    tc.raw marked "# #{model.appName} started."
    
class MainView extends Marionette.View
  template: viewTemplate
  templateContext:
    appName: 'company'
  onRender: ->
    console.log "onRender"
     
export default MainView
