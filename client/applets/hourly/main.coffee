import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import TkApplet from 'tbirds/tkapplet'
import capitalize from 'tbirds/util/capitalize'

import Controller from './controller'

appName = 'hourly'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel appName
AppRouter = MainChannel.request 'main:app:IndexRouter'

appletMenu = [
  {
    label: 'List'
    url: '#hourly'
    icon: '.fa.fa-list'
  }
  {
    label: 'Calendar'
    url: '#hourly/calendar'
    icon: '.fa.fa-calendar'
  }
  ]

class Router extends AppRouter
  appRoutes:
    'hourly': 'viewIndex'
    'hourly/calendar': 'viewCalendar'
    
class Applet extends TkApplet
  Controller: Controller
  Router: Router
  appletEntries: [
    {
      label: "#{capitalize appName} Menu"
      menu: appletMenu
    }
  ]

export default Applet
