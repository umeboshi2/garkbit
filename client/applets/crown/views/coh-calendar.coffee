import $ from 'jquery'
import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'

import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
#import { DateTime } from 'luxon'

import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import '@fullcalendar/list/main.css'

class CalendarView extends MnView
  template: tc.renderable ->
    tc.div '#maincalendar.col-sm-10.offset-sm-1'
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
      console.log 'calendar destroyed', cal
  onDomRefresh: ->
    events = @model.get('events')
    calEvents = []
    events.forEach (event) ->
      event.extendedProps = link: event.link
      calEvents.push event
    calEventClick = (event) ->
      url = event.event.extendedProps.link
      window.open url, '_blank'
    date = new Date()
    # console.log '@ui.calendar', @ui.calendar.get(0)
    @fullCalendar = new Calendar @ui.calendar.get(0),
      plugins: [
        dayGridPlugin
        timeGridPlugin
        ]
      defaultDate: date
      header:
        left: 'prev, next'
        center: 'title'
        right: 'dayGridMonth, timeGridWeek, timeGridDay'
      events: calEvents
      eventClick: calEventClick
    @fullCalendar.render()
    
export default CalendarView
