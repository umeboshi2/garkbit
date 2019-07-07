import Marionette from 'backbone.marionette'
import Controller from './controller'

import AdminRouter from '../../../../entries/adminrouter'

class Router extends AdminRouter
  appRoutes:
    'admin/useradmin': 'listUsers'
    'admin/user/list': 'listUsers'
    'admin/user/add': 'addNewUser'
    'admin/user/view/:id': 'viewUser'
    'admin/user/edit/:id': 'editUser'

export default { router: Router, controller: Controller }
