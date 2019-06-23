# webpackChunkName: "main-chunk-wikipages";
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import TkApplet from 'tbirds/tkapplet'

import './dbchannel'

import Controller from './controller'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'wikipages'
AppRouter = MainChannel.request 'main:app:IndexRouter'

class Router extends AppRouter
  appRoutes:
    'wikipages': 'list_wikipages'
    'wikipages/view/:name': 'view_wikipage'


appletMenu = [
  {
    button: '#list-button'
    label: 'List'
    url: '#wikipages'
    icon: '.fa.fa-list'
  }
]
  
class Applet extends TkApplet
  Controller: Controller
  Router: Router
  appletEntries: [
    {
      label: "Wikipages Menu"
      menu: appletMenu
    }
  ]
  


export default Applet
