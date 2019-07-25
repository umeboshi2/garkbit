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


class CalendarView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.calendar'
  ui:
    calendar: '.calendar'
  onBeforeDestroy: ->
    cal = @fullCalendar.destroy()
    if __DEV__
      console.log 'calendar destroyed'
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
