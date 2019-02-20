import Marionette from 'backbone.marionette'
import AppRouter from 'marionette.approuter'
import Controller from './controller'

class Router extends AppRouter
  appRoutes:
    'adminpanel/useradmin': 'listUsers'
    'adminpanel/user/list': 'listUsers'
    'adminpanel/user/add': 'addNewUser'
    'adminpanel/user/view/:id': 'viewUser'
    'adminpanel/user/edit/:id': 'editUser'

export default { router: Router, controller: Controller }
