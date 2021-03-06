import { Radio } from 'backbone'
import TkApplet from 'tbirds/tkapplet'

import Controller from './controller'

MainChannel = Radio.channel 'global'
AppRouter = MainChannel.request 'main:app:IndexRouter'

appletEntries = [
  {
    id: 'company'
    label: 'Company'
    url: '#company'
    icon: '.fa.fa-users'
  },{
    id: 'places'
    label: 'Places'
    url: '#places'
    icon: '.fa.fa-globe'
  },{
    id: 'todos'
    label: 'Todo List'
    url: '#todos'
    icon: '.fa.fa-list'
  },{
    id: 'sunny'
    label: 'Sunny'
    url: '#sunny'
    icon: '.fa.fa-sun-o'
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
