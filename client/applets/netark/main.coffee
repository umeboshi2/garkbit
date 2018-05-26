import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import TkApplet from 'tbirds/tkapplet'
import capitalize from 'tbirds/util/capitalize'

import './dbchannel'
import Controller from './controller'

appName = 'netark'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel appName


appletMenu = [
  {
    label: 'List'
    url: '#netark'
    icon: '.fa.fa-list'
  },{
    label: 'SciFi Movies'
    url: '#netark/scifi/list'
    icon: '.fa.fa-film'
  },{
    label: 'Calendar'
    url: '#netark/calendar'
    icon: '.fa.fa-calendar'
  }
]

class Router extends Marionette.AppRouter
  appRoutes:
    'netark': 'viewIndex'
    'netark/otrr/list': 'listOtrr'
    'netark/librivox/list': 'listLibrivox'
    'netark/scifi/list': 'listSciFiMovies'
    'netark/view/:id': 'viewMetadata'
    
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
