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
    label: 'Main'
    url: '#hourly'
    icon: '.fa.fa-star'
  },{
    label: 'List Workers'
    url: '#hourly/list-workers'
    icon: '.fa.fa-list'
  },{
    label: 'Add Workers'
    url: '#hourly/potential-workers'
    icon: '.fa.fa-plus'
  },{
    label: 'Calendar'
    url: '#hourly/calendar'
    icon: '.fa.fa-calendar'
  }
  ]

class Router extends AppRouter
  appRoutes:
    'hourly': 'viewIndex'
    'hourly/calendar': 'viewCalendar'
    'hourly/potential-workers': 'viewPotentialWorkers'
    'hourly/list-workers': 'viewWorkers'
    
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
