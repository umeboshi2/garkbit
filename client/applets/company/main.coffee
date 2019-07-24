import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import AppRouter from 'marionette.approuter'
import TkApplet from 'tbirds/tkapplet'
import capitalize from 'tbirds/util/capitalize'

import AdminRouter from '../../entries/adminrouter'
import Controller from './controller'

appName = 'company'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel appName


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
