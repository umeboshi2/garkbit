import $ from 'jquery'
import Marionette from 'backbone.marionette'
import TkApplet from 'tbirds/tkapplet'

import Controller from './controller'
import './collections'

MainChannel = Backbone.Radio.channel 'global'
HubChannel = Backbone.Radio.channel 'hubby'

appletMenu = [
  {
    label: 'Main'
    url: '#hubby'
  },{
    label: 'list'
    url: '#hubby/listmeetings'
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
    'hubby/search': 'view_items'
    
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
    HubChannel.reply 'main-controller', ->
      controller
    HubChannel.reply 'view-calendar', (layout, region) ->
      controller.show_calendar layout, region
    HubChannel.reply 'view-meeting-orig', (layout, region, id) ->
      controller.show_meeting layout, region, id
    HubChannel.reply 'view-meeting', (opts) ->
      controller.show_meeting opts.layout, opts.region, opts.id
    HubChannel.reply 'view-items', (layout, region, options) ->
      controller.list_items layout, region, options
    
current_calendar_date = undefined
current_calendar_date = new Date '2016-10-15'
HubChannel.reply 'maincalendar:set-date', () ->
  cal = $ '#maincalendar'
  current_calendar_date = cal.fullCalendar 'getDate'

HubChannel.reply 'maincalendar:get-date', () ->
  current_calendar_date
  
export default Applet
