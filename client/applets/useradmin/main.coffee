import { capitalize } from 'lodash'
import TkApplet from 'tbirds/tkapplet'

import Controller from './controller'
import AdminRouter from 'common/adminrouter'

appName = 'useradmin'

appletMenu = [
  {
    label: 'Main'
    url: '#useradmin'
    icon: '.fa.fa-star'
  },{
    label: 'Users'
    url: '#useradmin/user/list'
    icon: '.fa.fa-list'
  },{
    label: 'Add User'
    url: '#useradmin/user/add'
    icon: '.fa.fa-plus'
  },{
    label: 'Groups'
    url: '#useradmin/group/list'
    icon: '.fa.fa-list'
  },{
    label: 'Add Group'
    url: '#useradmin/group/add'
    icon: '.fa.fa-plus'
  }
  ]

class Router extends AdminRouter
  channelName: appName
  appRoutes:
    'useradmin': 'viewIndex'
    'useradmin/user/list': 'listUsers'
    'useradmin/user/add': 'addUser'
    'useradmin/user/view/:id': 'viewUser'
    'useradmin/user/edit/:id': 'editUser'
    'useradmin/group/list': 'listGroups'
    'useradmin/group/add': 'viewIndex'
    'useradmin/group/view/:id': 'viewIndex'
    'useradmin/group/edit/:id': 'editGroup'
    
    
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
