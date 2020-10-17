import { capitalize } from 'lodash'
import Backbone from 'backbone'
import TkApplet from 'tbirds/tkapplet'
 
import './dbchannel'
import Controller from './controller'

appName = 'muppy'

MainChannel = Backbone.Radio.channel 'global'
AppRouter = MainChannel.request 'main:app:IndexRouter'

appletMenu = [
  {
    label: 'Muppy Home'
    url: '#muppy'
    icon: '.fa.fa-home'
  },{
    label: 'List'
    url: '#muppy/summaries'
    icon: '.fa.fa-list'
  },{
    label: 'Calendar'
    url: '#muppy/calendar'
    icon: '.fa.fa-calendar'
  }
  ]

class Router extends AppRouter
  channelName: appName
  appRoutes:
    'muppy': 'viewIndex'
    'muppy/summaries': 'listSummaries'
    'muppy/summary/view/:id': 'viewSummary'
    
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
