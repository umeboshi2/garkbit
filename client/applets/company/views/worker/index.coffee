import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'
import moment from 'moment'

import navigate_to_url from 'tbirds/util/navigate-to-url'

import ClockButton from './clock-button'

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
    tc.button ".calendar-btn.btn.btn-success.fa.fa-calendar", "Month"
    tc.button ".time-grid-week-btn.btn.btn-success.fa.fa-calendar", "Week"
  tc.div '.row.calendar'
    

class StatusView extends Marionette.View
  template: statusTemplate
  ui: ->
    calendarBtn: '.calendar-btn'
    timeGridWeekBtn: '.time-grid-week-btn'
    workSessionRegion: '.work-session'
    calendarRegion: '.calendar'
    clockBtnRegion: '.clock-btn-container'
    
  regions:
    workSessionRegion: '@ui.workSessionRegion'
    calendarRegion: '@ui.calendarRegion'
    clockBtnRegion: '@ui.clockBtnRegion'
  events: ->
    'click @ui.calendarBtn': 'calendarBtnClicked'
    'click @ui.timeGridWeekBtn': 'timeGridWeekBtnClicked'
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

  calendarBtnClicked: ->
    @showCalendar()
    
  showCalendar: ->
    console.log "showCalendar"
    require.ensure [], () =>
      View = require('../calendar').default
      view = new View
      @showChildView 'calendarRegion', view
    # name the chunk
    , 'company-view-child-calendar'

  timeGridWeekBtnClicked: ->
    console.log "timeGridWeekBtnClicked"
    @showTimeGridWeek()
  
  showTimeGridWeek: ->
    console.log "showTimeGridWeek"
    require.ensure [], () =>
      View = require('../time-grid-base').default
      view = new View
        defaultView: 'timeGridWeek'
      @showChildView 'calendarRegion', view
    # name the chunk
    , 'company-view-child-calendar'


    
viewTemplate = tc.renderable (model) ->
  tc.div '.row.status'

class MainView extends Marionette.View
  template: viewTemplate
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

