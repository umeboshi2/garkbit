import Marionette from 'backbone.marionette'
import TkApplet from 'tbirds/tkapplet'

import Controller from './controller'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'frontdoor'
AppRouter = MainChannel.request 'main:app:IndexRouter'

appletEntries = [
  {
    id: 'dbadmin'
    label: 'Db Admin'
    url: '#junk/dbadmin'
    icon: '.fa.fa-database'
  }
]

if __DEV__
  appletEntries.push
    id: 'emojilist'
    label: 'List Emojis'
    url: '#junk/emojilist'
    icon: '.fa.fa-smile-o.text-dark.bg-warning'
    
class Router extends AppRouter
  channelName: 'frontdoor'
  appRoutes:
    '': 'frontdoor'
    'frontdoor': 'frontdoor'
    'frontdoor/view': 'frontdoor'
    'frontdoor/view/*name': 'viewPage'
    'frontdoor/login': 'showLogin'
    'frontdoor/logout': 'showLogout'
    'login': 'showLogin'
    'logout': 'showLogout'
    #FIXME
    'pages/:name': 'viewPage'


    
class Applet extends TkApplet
  Controller: Controller
  Router: Router

  onStop: ->
    console.log "(Child) Stopping frontdoor", @.isRunning()
    super()
  
  appletEntries: [
    {
      label: 'Main Menu'
      menu: appletEntries
    }
  ]
  
export default Applet
