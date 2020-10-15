import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'

    
class MainView extends MnView
  template: tc.renderable (model) ->
    tc.div '.row.listview-list-entry', ->
      tc.raw marked "# #{model.appName} started."
  templateContext:
    appName: 'useradmin'

export default MainView
