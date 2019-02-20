import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import AppRouter from 'marionette.approuter'
import TkApplet from 'tbirds/tkapplet'
import capitalize from 'tbirds/util/capitalize'

import './dbchannel'
console.log "dbchannel imported"

import Controller from './controller'

appName = 'muppy'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel appName


appletMenu = [
  {
    label: 'Muppy Home'
    url: '#muppy'
    icon: '.fa.fa-home'
  },{
    label: 'List'
    url: '#muppy/summaries'
    icon: '.fa.fa-list'
  },{
    label: 'Calendar'
    url: '#muppy/calendar'
    icon: '.fa.fa-calendar'
  }
  ]

class Router extends AppRouter
  appRoutes:
    'muppy': 'viewIndex'
    'muppy/summaries': 'listSummaries'
    'muppy/summary/view/:id': 'viewSummary'
    
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
