import { Radio } from 'backbone'
import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'

import { Timeline } from "vis-timeline/standalone"


AppChannel = Radio.channel 'crown'

eventManager = AppChannel.request 'get-event-manager', 'events'

class TimelineView extends MnView
  template: tc.renderable ->
    tc.div '.maintimeline', style:'height: 300px; width: 400px;'
  ui:
    timeline: '.maintimeline'
  onRender: ->
    @timeline = new Timeline @ui.timeline.get(0)
    eventManager.setCurrentEvents()
    @timeline.setItems eventManager.currentEvents
    @timeline.on 'select', (options) ->
      console.log "items", options.items
      console.log "timeline", @
  resetTopics: ->
    eventManager.setCurrentEvents()
    @timeline.setItems eventManager.currentEvents
    
export default TimelineView

