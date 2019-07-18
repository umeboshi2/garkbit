import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'
import moment from 'moment'

import navigate_to_url from 'tbirds/util/navigate-to-url'

import CalendarView from './calendar'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'company'

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'



class TimeClock extends AuthModel
  urlRoot: "/api/dev/company/time-clock"

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
        end = moment(session.end)
        tc.text "Your last session ended #{end.fromNow()}"
      else if status == 'on'
        #start = new Date session.start
        start = moment(session.start)
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
    tc.div '.col', ->
      tc.text "#{model.user.fullname} is a worker."
  tc.div '.row', ->
    tc.div '.col.work-session'
  tc.div '.btn-group', ->
    tc.button clockOptions.btnClass, ->
      tc.text "Clock #{clockOptions.action}"
    tc.button ".calendar-btn.btn.btn-success.fa.fa-calendar", "Calendar"
  tc.div '.row.calendar'
    

class StatusView extends Marionette.View
  template: statusTemplate
  ui: ->
    clockBtn: '.clock-btn'
    calendarBtn: '.calendar-btn'
    workSessionRegion: '.work-session'
    calendarRegion: '.calendar'
  regions:
    workSessionRegion: '@ui.workSessionRegion'
    calendarRegion: '@ui.calendarRegion'
  events: ->
    'click @ui.clockBtn': 'punchClock'
    'click @ui.calendarBtn': 'showCalendar'
  onRender: ->
    worker = @model
    clock = new TimeClock
    response = clock.fetch()
    response.done =>
      console.log "clock is", clock
      view = new SessionView
        model: clock
      @showChildView 'workSessionRegion', view
  punchClock: ->
    worker = @model
    status = @model.get 'status'
    if status in ['off', null]
      @punchIn()
    else if status == 'on'
      @punchOut()
    else
      MessageChannel.request 'warning', "Bad worker status #{status}"

  punchIn: ->
    worker_id = @model.get 'id'
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

  showCalendar: ->
    console.log "showCalendar"
    require.ensure [], () =>
      View = require('./calendar').default
      view = new View
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

