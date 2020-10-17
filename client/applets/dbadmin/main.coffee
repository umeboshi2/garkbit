import { capitalize } from 'lodash'
import TkApplet from 'tbirds/tkapplet'

import Controller from './controller'
import AdminRouter from '../../entries/adminrouter'

appName = 'dbadmin'

appletMenu = [
  {
    label: 'Main'
    url: '#dbadmin'
    icon: '.fa.fa-star'
  },{
    label: 'List Models'
    url: '#dbadmin/models'
    icon: '.fa.fa-list'
  }

  ]

class Router extends AdminRouter
  channelName: appName
  appRoutes:
    'dbadmin': 'viewIndex'
    'dbadmin/models': 'listModelTypes'
    'dbadmin/models/:modelType': 'listModels'
    
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
