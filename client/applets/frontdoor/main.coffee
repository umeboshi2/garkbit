import Marionette from 'backbone.marionette'
import TkApplet from 'tbirds/tkapplet'

import Controller from './controller'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'frontdoor'

appletEntries = [
  if __DEV__
    {
      id: 'emojilist'
      label: 'List Emojis'
      url: '#frontdoor/emojilist'
      icon: '.fa.fa-smile-o.text-dark.bg-warning'
    }
  {
    id: 'dbadmin'
    label: 'Db Admin'
    url: '#frontdoor/dbadmin'
    icon: '.fa.fa-database'
  }
]

class Router extends Marionette.AppRouter
  appRoutes:
    '': 'frontdoor'
    'frontdoor': 'frontdoor'
    'frontdoor/view': 'frontdoor'
    'frontdoor/view/*name': 'viewPage'
    'frontdoor/login': 'showLogin'
    'frontdoor/logout': 'showLogout'
    #FIXME
    'pages/:name': 'viewPage'
    'frontdoor/upload': 'uploadView'
    'frontdoor/themes': 'themeSwitcher'
    'frontdoor/stats': 'statsView'

    'frontdoor/emojilist': 'viewEmojis'
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
