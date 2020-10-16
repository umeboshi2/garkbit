`/* webpackChunkName: "main-chunk-wikipages" */` # noqa
import { Radio } from 'backbone'
import TkApplet from 'tbirds/tkapplet'

import './dbchannel'

import Controller from './controller'

MainChannel = Radio.channel 'global'
AppRouter = MainChannel.request 'main:app:IndexRouter'

appletMenu = [
  {
    button: '#list-button'
    label: 'List'
    url: '#wikipages'
    icon: '.fa.fa-list'
  }
]

class Router extends AppRouter
  channelName: 'wikipages'
  appRoutes:
    'wikipages': 'list_wikipages'
    'wikipages/view/:name': 'view_wikipage'

  
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
