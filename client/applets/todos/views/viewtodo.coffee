import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'

class MainView extends MnView
  template: tc.renderable (model) ->
    #tc.div model.name
    tc.dl ->
      tc.dt 'Name'
      tc.dd model.name
      console.log "MODEL_NAME", model.name
      tc.dt 'Description'
      tc.dd -> tc.raw marked model.description

export default MainView
