
import { View } from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'

class MainView extends View
  template: tc.renderable (model) ->
    tc.article '.document-view.content', ->
      tc.div '.body', ->
        tc.raw marked model.content

export default MainView
