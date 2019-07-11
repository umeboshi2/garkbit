import Marionette from 'backbone.marionette'
import TkApplet from 'tbirds/tkapplet'

import  './dbchannel'
import Controller from './controller'


MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'userprofile'
AppRouter = MainChannel.request 'main:app:IndexRouter'

appletMenu = [
  {
    label: 'Main'
    url: '#profile'
  },{
    label: 'Edit Config'
    url: '#profile/editconfig'
  },{
    label: 'Change Password'
    url: '#profile/chpassword'
  },{
    label: 'View Map'
    url: '#profile/mapview'
  }
]

class Router extends AppRouter
  channelName: 'userprofile'
  appRoutes:
    'profile': 'show_profile'
    'profile/editconfig': 'editConfig'
    'profile/chpassword': 'change_password'
    'profile/mapview': 'view_map'
    
class Applet extends TkApplet
  Controller: Controller
  Router: Router
  appletEntries:
    [
      {
        label: 'User Profile'
        menu: appletMenu
      }
    ]
  onBeforeStart: ->
    super arguments
    AppChannel.reply 'main-controller', =>
      console.warn "Stop using 'main-controller' request on AppChannel"
      @router.controller

export default Applet
