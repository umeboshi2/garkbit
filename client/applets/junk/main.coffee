import { capitalize } from 'lodash'
import AppRouter from 'marionette.approuter'
import TkApplet from 'tbirds/tkapplet'

import Controller from './controller'

appName = 'junk'
appletMenu = [
  {
    id: 'dbadmin'
    label: 'Db Admin'
    url: '#junk/dbadmin'
    icon: '.fa.fa-database'
  },{
    id: 'emojilist'
    label: 'List Emojis'
    url: '#junk/emojilist'
    icon: '.fa.fa-smile-o.text-dark.bg-warning'
  }
]

class Router extends AppRouter
  channelName: appName
  appRoutes:
    'junk': 'viewIndex'
    #'junk/stats': 'statsView'

    'junk/upload': 'uploadView'
    'junk/themes': 'themeSwitcher'
    'junk/emojilist': 'viewEmojis'
    'junk/dbadmin': 'viewDbAdmin'
    
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
