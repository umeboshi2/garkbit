import Marionette from 'backbone.marionette'
import TkApplet from 'tbirds/tkapplet'
import AdminRouter from '../../entries/adminrouter'


import './dbchannel'
import Controller from './controller'

MainChannel = Backbone.Radio.channel 'global'
ResourceChannel = Backbone.Radio.channel 'resources'

toolbarEntries = [
  {
    button: '#list-button'
    label: 'List'
    url: '#dbdocs/documents'
    icon: '.fa.fa-list'
  },{
    label: 'Add New Document'
    url: '#dbdocs/documents/new'
    icon: '.fa.fa-plus'
  }
  ]


class Router extends AdminRouter
  appRoutes:
    'dbdocs': 'list_pages'
    'dbdocs/documents': 'list_pages'
    'dbdocs/documents/new': 'new_page'
    'dbdocs/documents/view/:id': 'view_page'
    'dbdocs/documents/edit/:id': 'edit_page'
    
class Applet extends TkApplet
  Controller: Controller
  Router: Router
  appletEntries: [
    label: 'Site Doc Menu'
    menu: toolbarEntries
    ]
    
export default Applet
