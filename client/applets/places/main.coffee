import AppRouter from 'tbirds/routers/approuter'
import TkApplet from 'tbirds/tkapplet'
import capitalize from 'tbirds/util/capitalize'

import Controller from './controller'

appName = 'places'

appletMenu = [
  {
    label: 'Main'
    url: '#places'
    icon: '.fa.fa-star'
  },{
    label: 'Your Places'
    url: '#places/list'
    icon: '.fa.fa-list'
  },{
    label: 'All Places'
    url: '#places/all'
    icon: '.fa.fa-globe'
  }
  ]

class Router extends AppRouter
  channelName: appName
  appRoutes:
    'places': 'viewIndex'
    'places/list': 'listPlaces'
    'places/view/:id': 'viewPlace'
    'places/all': 'viewAllPlaces'
    
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
