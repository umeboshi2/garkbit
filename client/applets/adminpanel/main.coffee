import Marionette from 'backbone.marionette'
import AppRouter from 'marionette.approuter'
import TkApplet from 'tbirds/tkapplet'
import navigate_to_url from 'tbirds/util/navigate-to-url'

import './dbchannel'
import Controller from './controller'
import AdminRouter from '../../adminrouter'
import userAdminRouter from './routers/useradmin'

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
  },{
    label: 'Hubby Dbadmin'
    url: '#adminpanel/dbadmin/hubby'
    icon: '.fa.fa-database'
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
    #'': 'frontdoor'
    'adminpanel': 'frontdoor'
    'adminpanel/view': 'frontdoor'
    'adminpanel/login': 'show_login'
    'adminpanel/logout': 'show_logout'
    'adminpanel/dbadmin/hubby': 'viewHubby'
    
class Applet extends TkApplet
  Controller: Controller
  Router: Router
  appletEntries: appletEntries
  extraRouters:
    useradmin: userAdminRouter


  onStop: ->
    console.log "(Child) Stopping adminpanel", @.isRunning()
    super()

export default Applet
