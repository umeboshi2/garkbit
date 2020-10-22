import { capitalize } from 'lodash'
import TkApplet from 'tbirds/tkapplet'

import AdminRouter from 'common/adminrouter'
import Controller from './controller'

appName = 'company'

appletMenu = [
  {
    label: 'Main'
    url: '#company'
    icon: '.fa.fa-star'
  },{
    label: 'Add Workers'
    url: '#company/potential-workers'
    icon: '.fa.fa-plus'
  }
  ]

class Router extends AdminRouter
  channelName: appName
  permittedGroups: [
    'admin'
    'boss'
    'worker'
    ]
  navbarEntries: 'index'
  appRoutes:
    'company': 'viewIndex'
    'company/boss/add': 'addBoss'
    'company/boss/list': 'viewIndex'

    'company/company/list': 'listCompanies'
    'company/company/view/:id': 'viewCompany'
    'company/company/add': 'addCompany'

    'company/worker': 'workerIndex'
    'company/session/view/:id': 'viewWorkSession'
    
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
