import Backbone from 'backbone'

AppChannel = Backbone.Radio.channel 'hourly'

currentCalendarDate = undefined

AppChannel.reply 'maincalendar:set-date', () ->
  cal = $ '#maincalendar'
  currentCalendarDate = cal.fullCalendar 'getDate'
  return
  
AppChannel.reply 'maincalendar:get-date', () ->
  return currentCalendarDate

