import { Radio } from 'backbone'
import  { extend } from 'lodash'
import { DateTime } from 'luxon'
import randomChoice from 'tbirds/util/random-choice'


MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'

AuthCollection = MainChannel.request 'main:app:AuthCollection'

class EventCollection extends AuthCollection
  url: '/api/dev/company/calendar'

colors = ['green', 'chocolate', 'blue', 'magenta']

userIDS = {}

assignColor = (uid) ->
  if userIDS[uid]
    return userIDS[uid]
  else
    color = randomChoice colors
    index = colors.indexOf color
    if index > -1
      colors.splice index, 1
    userIDS[uid] = color
    return userIDS[uid]
    

export default (options) ->
  #fetchInfo = options.fetchInfo
  #successCallback = options.successCallback
  #failureCallback = options.failureCallback
  fetchData = options.fetchData or {}
  console.log "fetchData", fetchData
  return (fetchInfo, successCallback, failureCallback) ->
    console.log "fetchInfo", fetchInfo
    events = new EventCollection
    data = extend fetchData,
      start: fetchInfo.startStr
      end: fetchInfo.endStr
      limit: 9999
    console.log "DATA", data
    response = events.fetch
      data: data
    console.log "response", response
    response.done ->
      eventList = events.toJSON()
      console.log "returned these events", eventList
      console.log "events", events
      calendarEvents = []
      events.forEach (event) ->
        #timeZone = 'UTC'
        start = DateTime.fromISO event.get('start'), zone: 'UTC'
        end = DateTime.fromISO event.get('end'), zone: 'UTC'
        model =
          start: start.toLocal().toString()
          end: end.toLocal().toString()
          id: event.id
          url: "#company/session/view/#{event.id}"
          backgroundColor: assignColor event.get 'worker_id'
        calendarEvents.push model
      console.log 'calendarEvents', calendarEvents
      return successCallback calendarEvents
    response.fail ->
      failureCallback response
      MessageChannel.request 'xhr-error', response
