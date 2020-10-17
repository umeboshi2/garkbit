import { Radio } from 'backbone'
import { View } from 'backbone.marionette'
import tc from 'teacup'
import moment from 'moment'

import TimeClock from '../timeclock-model'

MessageChannel = Radio.channel 'messages'

class NotAWorkerView extends View
  template: tc.renderable ->
    tc.div '.row.listview-list-entry', ->
      tc.text "You are not a worker."

class SessionView extends View
  template: tc.renderable (model) ->
    tc.div ->
      session = model.session
      status = model.worker.status
      if status == 'off' and session.end
        end = moment(session.end)
        tc.text "Your last session ended #{end.fromNow()}"
      else if status == 'on'
        start = moment(session.start)
        tc.text "You have been working since #{start.fromNow()}"
  onSomething: ->
    worker_id = @model.get 'id'
    clock = new TimeClock
      worker_id: worker_id
    if __DEV__ and DEBUG
      console.log "clock", clock

class StatusView extends View
  template: tc.renderable (model) ->
    tc.div '.row.listview-list-entry', ->
      tc.text "#{model.user.fullname} is a worker."
    tc.div '.row.listview-list-entry.work-session'
    clockOptions =
      action: 'in'
      btnClass: '.clock-btn.btn.btn-info.fa.fa-clock-o'
    if model.status is null
      tc.div '.row.listview-list-entry', ->
        tc.text "#{model.user.fullname} has never clocked in."
    if model.status is 'on'
      clockOptions.action = 'out'
      clockOptions.btnClass = '.clock-btn.btn.btn-warning.fa.fa-clock-o'
    tc.div '.row', ->
      tc.button clockOptions.btnClass, ->
        tc.text "Clock #{clockOptions.action}"
  ui: ->
    clockBtn: '.clock-btn'
    workSessionRegion: '.work-session'
  regions:
    workSessionRegion: '@ui.workSessionRegion'
  events: ->
    'click @ui.clockBtn': 'punchClock'
  onRender: ->
    clock = new TimeClock
    response = clock.fetch()
    response.done =>
      view = new SessionView
        model: clock
      @showChildView 'workSessionRegion', view
  punchClock: ->
    status = @model.get 'status'
    if status in ['off', null]
      @punchIn()
    else if status == 'on'
      @punchOut()
    else
      MessageChannel.request 'warning', "Bad worker status #{status}"
  punchIn: ->
    clock = new TimeClock
    # https://stackoverflow.com/a/24915961/1869821
    response = clock.save(null,
      type: 'POST'
      url: clock.urlRoot)
    response.done =>
      @updateLocalStatus 'on'
    response.fail ->
      MessageChannel.request 'warning', response.responseJSON.code
  punchOut: ->
    worker_id = @model.get 'id'
    clock = new TimeClock
      worker_id: worker_id
    response = clock.fetch()
    response.done =>
      presponse = clock.save()
      presponse.done =>
        @updateLocalStatus 'off'
      presponse.fail ->
        MessageChannel.request 'warning', presponse.responseJSON.code
  updateLocalStatus: (status) ->
    @model.set 'status', status
    @render()
    
class MainView extends View
  template: tc.renderable ->
    tc.div '.row.status'
  ui: ->
    status: '.status'
  regions:
    status: '@ui.status'
  templateContext:
    appName: 'hourly'
  onRender: ->
    if __DEV__
      console.log "MODEL IS", @model
    response = @model.fetch()
    response.done =>
      view = new StatusView
        model: @model
      @showChildView 'status', view
    response.fail =>
      view = new NotAWorkerView
        model: @model
      @showChildView 'status', view
    
export default MainView

