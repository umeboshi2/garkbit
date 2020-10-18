import $ from 'jquery'
import { View } from 'backbone.marionette'
import tc from 'teacup'

import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
# import { DateTime } from 'luxon'

import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import '@fullcalendar/list/main.css'

import makeGetEvents from '../fetch-events'

class CalendarView extends View
  template: tc.renderable ->
    tc.div '.calendar'
  ui:
    calendar: '.calendar'
  onBeforeDestroy: ->
    cal = @fullCalendar.destroy()
    if __DEV__
      console.log 'calendar destroyed', cal
  onDomRefresh: ->
    @fullCalendar = new Calendar @ui.calendar.get(0),
      plugins: [
        dayGridPlugin
        timeGridPlugin
        ]
      defaultDate: @getOption('defaultDate') or new Date()
      header:
        left: 'prevYear, nextYear'
        center: 'title'
        right: 'prev, next'
      defaultView: @getOption 'defaultView'
      events: makeGetEvents fetchData: @getOption('fetchData') or {}
    @fullCalendar.render()
    
export default CalendarView
