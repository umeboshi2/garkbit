import Marionette from 'backbone.marionette'
import TkApplet from 'tbirds/tkapplet'
import navigate_to_url from 'tbirds/util/navigate-to-url'

import './dbchannel'
import Controller from './controller'
import AdminRouter from '../../adminrouter'
import userAdminRouter from './routers/useradmin'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
SiteNavChannel = Backbone.Radio.channel 'site-nav'

userAdminEntries = [
  {
    label: 'List Users'
    url: '#admin/user/list'
    icon: '.fa.fa-list'
  },{
    label: 'Add New User'
    url: '#admin/user/add'
    icon: '.fa.fa-plus'
  },{
    label: 'Hubby Dbadmin'
    url: '#admin/dbadmin/hubby'
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
    'admin': 'frontdoor'
    'admin/view': 'frontdoor'
    'admin/login': 'show_login'
    'admin/logout': 'show_logout'
    'admin/dbadmin/hubby': 'viewHubby'
    
class Applet extends TkApplet
  Controller: Controller
  Router: Router
  appletEntries: appletEntries
  extraRouters:
    useradmin: userAdminRouter

  onStart: ->
    SiteNavChannel.request 'set-admin-entries'
    

  onStop: ->
    console.log "(Child) Stopping admin", @.isRunning()
    super()

export default Applet
