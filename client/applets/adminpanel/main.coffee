import { Radio } from 'backbone'
import TkApplet from 'tbirds/tkapplet'
import AdminRouter from '../../entries/adminrouter'

import Controller from './controller'
import userAdminRouter from './routers/useradmin'

SiteNavChannel = Radio.channel 'site-nav'

userAdminEntries = [
  {
    label: 'List Users'
    url: '#useradmin/user/list'
    icon: '.fa.fa-list'
  },{
    label: 'Add New User'
    url: '#useradmin/user/add'
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
