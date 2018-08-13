import $ from 'jquery'
import Marionette from 'backbone.marionette'
import TkApplet from 'tbirds/tkapplet'

import './collections'
import Controller from './controller'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'hubby'

appletMenu = [
  {
    label: 'Main'
    url: '#hubby'
  },{
    label: 'list'
    url: '#hubby/listmeetings'
  },{
    label: 'People'
    url: '#hubby/people'
  },{
    label: 'Departments'
    url: '#hubby/departments'
  },{
    label: 'search'
    url: '#hubby/search'
  }
]


class Router extends Marionette.AppRouter
  appRoutes:
    'hubby': 'mainview'
    'hubby/listmeetings': 'list_meetings'
    'hubby/viewmeeting/:id': 'view_meeting'
    'hubby/oldviewmeeting/:id': 'viewMeetingOld'
    'hubby/search': 'view_items'
    'hubby/pdfview': 'viewPdfTest'
    'hubby/people': 'listPeople'
    
class Applet extends TkApplet
  Controller: Controller
  Router: Router
  appletEntries:
    [
      {
        label: 'Hubby Menu'
        menu: appletMenu
      }
    ]

  onBeforeStart: (args) ->
    super args
    controller = @router.controller
    AppChannel.reply 'main-controller', ->
      controller
    AppChannel.reply 'view-calendar', (layout, region) ->
      controller.show_calendar layout, region
    AppChannel.reply 'view-meeting-orig', (layout, region, id) ->
      controller.show_meeting layout, region, id
    AppChannel.reply 'view-meeting', (opts) ->
      controller.show_meeting opts.layout, opts.region, opts.id
    AppChannel.reply 'view-items', (layout, region, options) ->
      controller.list_items layout, region, options
    
current_calendar_date = undefined
#current_calendar_date = new Date '2016-10-15'
AppChannel.reply 'maincalendar:set-date', () ->
  cal = $ '#maincalendar'
  current_calendar_date = cal.fullCalendar 'getDate'

AppChannel.reply 'maincalendar:get-date', () ->
  current_calendar_date
  
export default Applet
