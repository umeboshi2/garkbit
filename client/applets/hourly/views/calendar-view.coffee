import $ from 'jquery'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

import navigateToUrl from 'tbirds/util/navigate-to-url'

import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import '@fullcalendar/list/main.css'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'hourly'

AuthCollection = MainChannel.request 'main:app:AuthCollection'

sampleWeek = [
    {
      id: 'day one'
      start: '2019-06-24 18:30'
      end: '2019-06-24 21:30'
    },{
      id: 'day two'
      start: '2019-06-25 08:00'
      end: '2019-06-25 18:00'
    },{
      id: 'day three'
      start: '2019-06-26 08:00'
      end: '2019-06-26 14:30'
    },{
      id: 'day three (after lunch)'
      start: '2019-06-26 18:00'
      end: '2019-06-26 21:00'
    },{
      id: 'day four'
      start: '2019-06-27 10:30'
      end: '2019-06-27 12:30'
    },{
      id: 'day five'
      start: '2019-06-28 08:00'
      end: '2019-06-28 14:00'
    }
  ]

calendarUrl = '/api/dev/hourly/calendar'
class EventCollection extends AuthCollection
  url: calendarUrl
  
getEvents = (fetchInfo, successCallback, failureCallback, evenMore ) ->
  console.log "fetchInfo", fetchInfo
  #console.log "successCallback", successCallback
  #console.log "failureCallback", failureCallback
  #console.log 'evenMore', evenMore
  events = new EventCollection
  response = events.fetch
    data:
      start: fetchInfo.startStr
      end: fetchInfo.endStr
  response.done ->
    data = events.toJSON()
    console.log "returned these events", data
    calendarEvents = []
    events.forEach (event) ->
      model =
        start: event.start
        end: event.end
        id: event.id
      calendarEvents.push model
      return successCallback calendarEvents
  response.fail ->
    failureCallback 'error'
    MessageChannel.request 'danger', 'an error'
    
  return response

loadingCalendarEvents = (isTrue) ->
  loading = $('loading')
  header = $('.fc-toolbar')
  if isTrue
    loading.show()
    header.hide()
  else
    loading.hide()
    header.show()


calendarTemplate = tc.renderable () ->
  tc.div '.listview-header', 'Punching the Clock'
  tc.div '#loading', ->
    tc.h2 ->
      tc.i '.fa.fa-spinner.fa-spin'
      tc.text 'Loading Work Sessions'
  tc.div '#maincalendar'

    
class CalendarView extends Marionette.View
  template: calendarTemplate
  ui:
    calendar: '#maincalendar'
    loading: '#loading'
    header: '.fc-toolbar'
    daytop: '.fc-day-top'
  options:
    minicalendar: false
    layout: false
  onBeforeDestroy: ->
    cal = @fullCalendar.destroy()
    if __DEV__
      console.log 'calendar destroyed'
  onDomRefresh: ->
    calEventClick = (event) =>
      if not @getOption 'minicalendar'
        url = "#hourly/viewevent/#{event.id}"
        navigateToUrl url
      else
        options =
        layout: @options.layout
        id: event.id
      AppChannel.request 'view-event', options
    date = AppChannel.request 'maincalendar:get-date' or new Date()
    console.log '@ui.calendar', @ui.calendar.get(0)
    @fullCalendar = new Calendar @ui.calendar.get(0),
      plugins: [
        dayGridPlugin
        timeGridPlugin
        ]
      defaultDate: date
      header:
        left: 'prevYear, nextYear'
        center: 'title'
        right: 'prev, next, dayGridDay, dayGridWeek, dayGridMonth'
      #theme: false
      #defaultView: 'dayGrid'
      #eventSources: sampleWeek
      events: getEvents
      #eventSources:
      #  [
      #    url: '/api/dev/hourly/calendar'
      #  ]
      #events: sampleWeek
      #eventRender:
      #viewRender
      #loading: loadingCalendarEvents
      #eventClick: calEventClick
    @fullCalendar.render()
    
export default CalendarView
