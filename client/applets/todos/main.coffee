import { Radio } from 'backbone'
import TkApplet from 'tbirds/tkapplet'

import './dbchannel'

import Controller from './controller'

MainChannel = Radio.channel 'global'
AppRouter = MainChannel.request 'main:app:IndexRouter'

class Router extends AppRouter
  channelName: 'todos'
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
