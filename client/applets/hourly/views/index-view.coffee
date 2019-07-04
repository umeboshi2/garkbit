import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'

import navigate_to_url from 'tbirds/util/navigate-to-url'
import TimeClock from '../timeclock-model'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'hourly'

view_template = tc.renderable (model) ->
  tc.div '.row.status'

notAWorkerTemplate = tc.renderable (model) ->
  tc.div '.row.listview-list-entry', ->
    tc.text "You are not a worker."

class NotAWorkerView extends Marionette.View
  template: notAWorkerTemplate
  
statusTemplate = tc.renderable (model) ->
  tc.div '.row.listview-list-entry', ->
    tc.text "#{model.user.fullname} is a worker."
  tc.div '.row.listview-list-entry.work-session'
  clockOptions =
    action: 'in'
    btnClass: '.clock-btn.btn.btn-info.fa.fa-clock-o'
  clockLabel = 'in'
  if model.status is null
    tc.div '.row.listview-list-entry', ->
      tc.text "#{model.user.fullname} has never clocked in."
  if model.status is 'on'
    clockOptions.action = 'out'
    clockOptions.btnClass = '.clock-btn.btn.btn-warning.fa.fa-clock-o'
  tc.div '.row', ->
    tc.button clockOptions.btnClass, ->
      tc.text "Clock #{clockOptions.action}"

class StatusView extends Marionette.View
  template: statusTemplate
  ui: ->
    clockBtn: '.clock-btn'
    workSessionRegion: '.work-session'
  regions:
    workSessionRegion: '@ui.workSessionRegion'
  events: ->
    'click @ui.clockBtn': 'punchClock'
  punchClock: ->
    worker = @model
    status = @model.get 'status'
    console.log "punchClock", worker, status
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
      @clockUserIn()
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
        @clockUserOut()
      presponse.fail ->
        MessageChannel.request 'warning', presponse.responseJSON.code

  clockUserOut: ->
    @model.set 'status', 'off'
    console.log '@clockUserOut', @model
    @render()

  clockUserIn: ->
    @model.set 'status', 'on'
    console.log '@clockUserIn', @model
    @render()
    
    
  insertNewStatus: ->
    worker = @model
    Model = AppChannel.request 'status-modelClass'
    model = new Model
      worker_id: worker.get 'id'
    return response
    
class MainView extends Marionette.View
  template: view_template
  ui: ->
    status: '.status'
  regions:
    status: '@ui.status'
  templateContext:
    appName: 'hourly'
  onRender: ->
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
    
module.exports = MainView

