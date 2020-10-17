import $ from 'jquery'
import { Radio } from 'backbone'
import { View } from 'backbone.marionette'
import tc from 'teacup'

import MakeSummaryView from './summaryview'

AppChannel = Radio.channel 'muppy'


view_template = tc.renderable (model) ->
  tc.div '.row.listview-list-entry', ->
    tc.h1 "#{model.appName} started."
  tc.div '.row', ->
    tc.div '.summary-container'
    
class MainView extends View
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
