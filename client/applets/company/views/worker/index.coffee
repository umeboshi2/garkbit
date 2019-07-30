import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'
import moment from 'moment'
import 'daterangepicker'
import 'daterangepicker/daterangepicker.css'

import BaseCalendarView from 'tbirds/views/base-calendar'

import navigate_to_url from 'tbirds/util/navigate-to-url'

import ClockButton from './clock-button'
import makeGetEvents from '../../fetch-events'


MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'company'

TimeClock = AppChannel.request 'TimeClock'


notAWorkerTemplate = tc.renderable (model) ->
  tc.div '.row.listview-list-entry', ->
    tc.text "You are not a worker."

class NotAWorkerView extends Marionette.View
  template: notAWorkerTemplate
  
sessionTemplate = tc.renderable (model) ->
  tc.div ->
    session = model.session
    status = model.worker.status
    if session
      if status == 'off' and session.end
        end = moment.utc(session.end)
        tc.text "Your last session ended #{end.fromNow()}"
      else if status == 'on'
        start = moment.utc(session.start)
        tc.text "You have been working since #{start.fromNow()}"
    else
      tc.text "You have never clocked in."
      
class SessionView extends Marionette.View
  template: sessionTemplate
  onSomething: ->
    worker_id = @model.get 'id'
    clock = new TimeClock
      worker_id: worker_id

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
    #tc.button clockOptions.btnClass, ->
    #  tc.text "Clock #{clockOptions.action}"
    tc.div '.clock-btn-container'
    tc.button ".month-btn.btn.btn-success.fa.fa-calendar", "Month"
    tc.button ".week-btn.btn.btn-success.fa.fa-calendar", "Week"
    tc.button ".day-btn.btn.btn-success.fa.fa-calendar", "Day"
  tc.div '.row.calendar'
  tc.input '.datepick'
    

class StatusView extends Marionette.View
  template: statusTemplate
  ui: ->
    monthBtn: '.month-btn'
    weekBtn: '.week-btn'
    dayBtn: '.day-btn'
    workSessionRegion: '.work-session'
    calendarRegion: '.calendar'
    clockBtnRegion: '.clock-btn-container'
    datePick: '.datepick'
  regions:
    workSessionRegion: '@ui.workSessionRegion'
    calendarRegion: '@ui.calendarRegion'
    clockBtnRegion: '@ui.clockBtnRegion'
  events: ->
    'click @ui.monthBtn': 'monthBtnClicked'
    'click @ui.weekBtn': 'weekBtnClicked'
    'click @ui.dayBtn': 'dayBtnClicked'
  childViewEvents:
    'worker:status:change': 'render'
    
  onRender: ->
    worker = @model
    clock = new TimeClock
    response = clock.fetch()
    response.done =>
      console.log "clock is", clock
      view = new SessionView
        model: clock
      @showChildView 'workSessionRegion', view
    view = new ClockButton
      model: @model
    @showChildView 'clockBtnRegion', view
  onDomRefreshOrig: ->
    @ui.datePick.daterangepicker
      timePicker: true
      locale:
        format: 'M/DD hh:mm A'
    
  monthBtnClicked: ->
    @showCalendar
      className: 'col-md-8 offset-md-2'
      calendarOptions:
        defaultDate: new Date()
        header:
          left: 'prevYear, nextYear'
          center: 'title'
          right: 'prev, next'
        events: makeGetEvents fetchData: @getOption('fetchData') or {}
    
  weekBtnClicked: ->
    @showCalendar
      className: 'col-md-8 offset-md-2'
      calendarOptions:
        defaultDate: new Date()
        defaultView: 'timeGridWeek'
        header:
          left: 'prevYear, nextYear'
          center: 'title'
          right: 'prev, next'
        events: makeGetEvents fetchData: @getOption('fetchData') or {}

  dayBtnClicked: ->
    @showCalendar
      className: 'col-md-8 offset-md-2'
      calendarOptions:
        defaultDate: new Date()
        defaultView: 'timeGridDay'
        header:
          left: 'prevYear, nextYear'
          center: 'title'
          right: 'prev, next'
        events: makeGetEvents fetchData: @getOption('fetchData') or {}

  showCalendar: (options) ->
    view = new BaseCalendarView options
    @showChildView 'calendarRegion', view
    
class MainView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.row.status'
  ui: ->
    status: '.status'
  regions:
    status: '@ui.status'
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

