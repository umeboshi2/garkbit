import { Radio } from 'backbone'
import TkApplet from 'tbirds/tkapplet'
import capitalize from 'tbirds/util/capitalize'

import Controller from './controller'

appName = 'taxes'

MainChannel = Radio.channel 'global'
AppRouter = MainChannel.request 'main:app:IndexRouter'

appletMenu = [
  {
    label: 'Main Tax Page'
    url: '#taxes'
    icon: '.fa.fa-newspaper-o'
  }
  ]

class Router extends AppRouter
  channelName: appName
  appRoutes:
    'taxes': 'viewIndex'
    'taxes/pages/*name': 'viewPage'
    
    
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
