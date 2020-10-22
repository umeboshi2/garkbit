import AppRouter from 'tbirds/routers/approuter'
import TkApplet from 'tbirds/tkapplet'
import { capitalize } from 'lodash'

import Controller from './controller'

appName = 'pmc'

appletMenu = [
  {
    label: 'Main'
    url: '#pmc'
    icon: '.fa.fa-star'
  },{
    label: 'manageTopics'
    url: '#pmc/manage/topics'
    icon: '.fa.fa-sitemap'
  },{
    label: 'Search PMC'
    url: '#pmc/search/pmc'
    icon: '.fa.fa-sitemap'
  },{
    label: 'Import Site PMC'
    url: '#pmc/import/site'
    icon: '.fa.fa-sitemap'
  }
  ]

class Router extends AppRouter
  channelName: appName
  appRoutes:
    'pmc': 'viewIndex'
    'pmc/topics/:name': 'viewByTopic'
    'pmc/manage/topics': 'manageTopics'
    'pmc/search/pmc': 'viewSearchPMC'
    'pmc/view/:id': 'viewPMCArticle'
    'pmc/import/site': 'importSite'
    
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
