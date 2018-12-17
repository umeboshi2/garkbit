import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import TkApplet from 'tbirds/tkapplet'
import capitalize from 'tbirds/util/capitalize'

import './dbchannel'
import Controller from './controller'

appName = 'freelaw'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel appName


appletMenu = [
  {
    label: 'List'
    url: '#freelaw'
    icon: '.fa.fa-list'
  }
  {
    label: 'Calendar'
    url: '#freelaw/calendar'
    icon: '.fa.fa-calendar'
  }
  ]

class Router extends Marionette.AppRouter
  appRoutes:
    'freelaw': 'viewIndex'
    
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
