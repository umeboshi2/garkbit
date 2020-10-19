import { Radio } from 'backbone'
import Marionette from 'backbone.marionette'
import AppRouter from 'marionette.approuter'
import TkApplet from 'tbirds/tkapplet'
import capitalize from 'tbirds/util/capitalize'

import Controller from './controller'

appName = 'terminal'

MainChannel = Radio.channel 'global'
AppChannel = Radio.channel appName


appletMenu = [
  {
    label: 'Main'
    url: '#terminal'
    icon: '.fa.fa-star'
  }
  ]

class Router extends AppRouter
  channelName: appName
  appRoutes:
    'terminal': 'viewIndex'
    
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
