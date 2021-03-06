import { Radio } from 'backbone'
import { View } from 'backbone.marionette'
import tc from 'teacup'

MessageChannel = Radio.channel 'messages'
AppChannel = Radio.channel 'company'

TimeClock = AppChannel.request 'TimeClock'

statusActionMap =
  'on':'out'
  'off':'in'
  
class ClockButton extends View
  tagName: 'button'
  className: 'btn btn-info fa fa-clock-o'
  templateContext: ->
  template: tc.renderable (model) ->
    tc.text "Clock #{statusActionMap[model.status]}"
  events:
    click: 'punchClock'
  onRender: ->
    status = @model.get 'status'
    if status == 'on'
      @$el.removeClass 'btn-info'
      @$el.addClass 'btn-warning'
    else
      @$el.removeClass 'btn-warning'
      @$el.addClass 'btn-info'
  punchClock: ->
    status = @model.get 'status'
    if status in ['off', null]
      @punchIn()
    else if status == 'on'
      @punchOut()
    else
      MessageChannel.request 'danger', "Bad worker status #{status}"
  punchIn: ->
    clock = new TimeClock
    # https://stackoverflow.com/a/24915961/1869821
    response = clock.save(null,
      type: 'POST'
      url: clock.urlRoot)
    response.done =>
      @updateLocalStatus 'on'
    response.fail ->
      MessageChannel.request 'xhr-error', response
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
        MessageChannel.request 'xhr-error', presponse

  updateLocalStatus: (status) ->
    @model.set 'status', status
    @render()
    @trigger 'worker:status:change'
    

export default ClockButton

