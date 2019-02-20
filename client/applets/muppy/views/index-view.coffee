import $ from 'jquery'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'


import MakeSummaryView from './summaryview'

import navigate_to_url from 'tbirds/util/navigate-to-url'

AppChannel = Backbone.Radio.channel 'muppy'
console.log "AppChannel", AppChannel


view_template = tc.renderable (model) ->
  tc.div '.row.listview-list-entry', ->
    tc.raw marked "# #{model.appName} started."
  tc.div '.row', ->
    tc.div '.summary-container'
    
class MainView extends Marionette.View
  template: view_template
  templateContext:
    appName: 'muppy'
  ui:
    summaryContainer: '.summary-container'
  regions:
    summaryContainer: '@ui.summaryContainer'
  onRender: ->
    Model = AppChannel.request 'db:summary:modelClass'

    model = new Model
    view = new MakeSummaryView
      model: model
    @showChildView 'summaryContainer', view
    
    
export default MainView
