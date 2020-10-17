import { Radio } from 'backbone'
import TkApplet from 'tbirds/tkapplet'
import { capitalize } from 'lodash'

import Controller from './controller'

appName = 'eliza'

MainChannel = Radio.channel 'global'
AppRouter = MainChannel.request 'main:app:IndexRouter'

appletMenu = [
  {
    label: 'Main'
    url: '#eliza'
    icon: '.fa.fa-terminal.text-light.bg-dark'
  }
  ]

class Router extends AppRouter
  channelName: appName
  appRoutes:
    'eliza': 'viewIndex'
    
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
