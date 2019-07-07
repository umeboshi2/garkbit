import $ from 'jquery'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import FullCalendar from 'fullcalendar'
import navigateToUrl from 'tbirds/util/navigate-to-url'

import 'fullcalendar/dist/fullcalendar.css'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'hourly'

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


calendarTemplate = tc.renderable () ->
  tc.div '.listview-header', 'Punching the Clock'
  tc.div '#loading', ->
    tc.h2 ->
      tc.i '.fa.fa-spinner.fa-spin'
      tc.text 'Loading Work Sessions'
  tc.div '#maincalendar'

loadingCalendarEvents = (isTrue) ->
  loading = $('loading')
  header = $('.fc-toolbar')
  if isTrue
    loading.show()
    header.hide()
  else
    loading.hide()
    header.show()


    
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
    cal = @ui.calendar.fullCalendar 'destroy'
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
    cal = @ui.calendar
    cal.fullCalendar
      defaultDate: date
      header:
        left: 'prevYear, nextYear'
        center: 'title'
        right: 'prev, next'
      theme: false
      defaultView: 'agendaWeek'
      #eventSources: sampleWeek
      eventSources:
        [
          url: '/api/dev/hourly/calendar'
        ]
      #events: sampleWeek
      #eventRender:
      #viewRender
      loading: loadingCalendarEvents
      eventClick: calEventClick
      
export default CalendarView
