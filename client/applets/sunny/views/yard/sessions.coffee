import _ from 'underscore'
import Backbone from 'backbone'
import { View } from 'backbone.marionette'
import tc from 'teacup'

import BaseListView from 'tbirds/views/list-view'


MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'sunny'

TimeClock = AppChannel.request 'YardSessionClock'

sessionTemplate = tc.renderable (model) ->
  tc.div ->
    session = model.session
    status = model.worker.status
    if session
      if status == 'off' and session.end
        end = moment.utc(session.end)
        tc.text "The last job finished #{end.fromNow()}"
      else if status == 'on'
        start = moment.utc(session.start)
        tc.text "This job has been ruuning since #{start.fromNow()}"
    else
      tc.text "This job has never been done."

statusTemplate = tc.renderable (model) ->
  clockOptions =
    action: 'in'
    btnClass: '.clock-btn.btn.btn-info.fa.fa-clock-o'
  clockLabel = 'in'
  if model.status is 'on'
    clockOptions.action = 'out'
    clockOptions.btnClass = '.clock-btn.btn.btn-warning.fa.fa-clock-o'
  tc.div '.row', ->
    tc.div '.col.work-session'
  tc.div '.btn-group', ->
    tc.div '.clock-btn-container'
    tc.button ".month-btn.btn.btn-success.fa.fa-calendar", "Month"
    tc.button ".week-btn.btn.btn-success.fa.fa-calendar", "Week"
    tc.button ".day-btn.btn.btn-success.fa.fa-calendar", "Day"
  tc.div '.row.calendar'
  tc.input '.datepick'



class MainView extends View
  template: tc.renderable ->
    tc.div 'Main Session View'

export default MainView
