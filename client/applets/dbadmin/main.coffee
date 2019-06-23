import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import TkApplet from 'tbirds/tkapplet'
import capitalize from 'tbirds/util/capitalize'

import Controller from './controller'
import AdminRouter from '../../adminrouter'

appName = 'dbadmin'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel appName


appletMenu = [
  {
    label: 'List'
    url: '#dbadmin'
    icon: '.fa.fa-list'
  }
  {
    label: 'Calendar'
    url: '#dbadmin/calendar'
    icon: '.fa.fa-calendar'
  }
  ]

class Router extends AdminRouter
  appRoutes:
    'dbadmin': 'viewIndex'
    
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
