import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'

class Controller extends MainController
  layoutClass: ToolbarAppletLayout
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/index-view').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'eliza-view-index'
      
export default Controller

