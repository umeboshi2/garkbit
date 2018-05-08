import Marionette from 'backbone.marionette'
import TkApplet from 'tbirds/tkapplet'
import navigate_to_url from 'tbirds/util/navigate-to-url'

import './dbchannel'
import Controller from './controller'
import AdminRouter from '../../adminrouter'


MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'

userAdminEntries = [
  {
    label: 'List Users'
    url: '#adminpanel/user/list'
    icon: '.fa.fa-list'
  },{
    label: 'Add New User'
    url: '#adminpanel/user/add'
    icon: '.fa.fa-plus'
  }
]

appletEntries = [
  {
    label: 'User Admin'
    menu: userAdminEntries
  }
]

class Router extends AdminRouter
  appRoutes:
    '': 'frontdoor'
    'adminpanel': 'frontdoor'
    'adminpanel/view': 'frontdoor'
    'adminpanel/login': 'show_login'
    'adminpanel/logout': 'show_logout'
        
class Applet extends TkApplet
  Controller: Controller
  Router: Router
  appletEntries: appletEntries
  extraRouters:
    useradmin: require './routers/useradmin'


  onStop: ->
    console.log "(Child) Stopping adminpanel", @.isRunning()
    super()

export default Applet
