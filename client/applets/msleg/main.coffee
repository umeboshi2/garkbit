import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import TkApplet from 'tbirds/tkapplet'
import capitalize from 'tbirds/util/capitalize'

import Controller from './controller'
import './dbchannel'

appName = 'msleg'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel appName


appletMenu = [
  {
    label: 'List House Members'
    url: '#msleg'
    icon: '.fa.fa-list'
  }
  {
    label: 'Calendar'
    url: '#msleg/calendar'
    icon: '.fa.fa-calendar'
  }
  ]

class Router extends Marionette.AppRouter
  appRoutes:
    'msleg': 'viewIndex'
    
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
