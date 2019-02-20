import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import AppRouter from 'marionette.approuter'
import TkApplet from 'tbirds/tkapplet'

import './dbchannel'

import Controller from './controller'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'todos'

class Router extends AppRouter
  appRoutes:
    'todos': 'list_todos'
    'todos/completed': 'list_completed_todos'
    'todos/calendar': 'view_calendar'
    'todos/todos/new': 'new_todo'
    'todos/todos/edit/:id': 'edit_todo'
    'todos/todos/view/:id': 'view_todo'

    
class Applet extends TkApplet
  Controller: Controller
  Router: Router
  appletEntries: [
    {
      label: "Todos Menu"
      menu: [
        {
          label: "list todos"
          icon: '.fa.fa-list'
          url: '#todos'
        },{
          label: 'Calendar'
          url: '#todos/calendar'
          icon: '.fa.fa-calendar'
        },{
          label: 'new todo'
          icon: '.fa.fa-plus'
          url: '#todos/todos/new'
        }
      ]
    }
  ]
export default Applet
