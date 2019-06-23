import Marionette from 'backbone.marionette'
import Controller from './controller'

import AdminRouter from '../../../../adminrouter'

class Router extends AdminRouter
  appRoutes:
    'adminpanel/useradmin': 'listUsers'
    'adminpanel/user/list': 'listUsers'
    'adminpanel/user/add': 'addNewUser'
    'adminpanel/user/view/:id': 'viewUser'
    'adminpanel/user/edit/:id': 'editUser'

export default { router: Router, controller: Controller }
