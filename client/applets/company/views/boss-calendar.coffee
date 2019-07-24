import $ from 'jquery'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import { DateTime } from 'luxon'

import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import '@fullcalendar/list/main.css'

import navigateToUrl from 'tbirds/util/navigate-to-url'

import makeGetEvents from '../fetch-events'

getEvents = makeGetEvents {}


MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'hourly'

loadingCalendarEvents = (isTrue) ->
  console.log "loadingCalendarEvents", isTrue
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
  tc.div '#loading', style:'display: none;', ->
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
    console.log "VIEW", @
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
      events: makeGetEvents
        fetchData:
          company_id: @model.get('id')
      #eventRender:
      #viewRender
      #loading: loadingCalendarEvents
      #eventClick: calEventClick
    @fullCalendar.render()
    
export default CalendarView
