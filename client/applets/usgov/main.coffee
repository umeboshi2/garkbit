import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import TkApplet from 'tbirds/tkapplet'
import capitalize from 'tbirds/util/capitalize'

import Controller from './controller'

appName = 'usgov'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel appName
AppRouter = MainChannel.request 'main:app:IndexRouter'

appletMenu = [
  {
    button: '#list-button'
    label: 'List'
    url: '#usgov'
    icon: '.fa.fa-list'
  }
  {
    button: '#calendar-button'
    label: 'Calendar'
    url: '#usgov/calendar'
    icon: '.fa.fa-calendar'
  }
  ]

class Router extends AppRouter
  appRoutes:
    'usgov': 'view_index'
    
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
