import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'

class SearchInput extends MnView
  template: tc.renderable ->
    tc.div '.input-group', ->
      tc.div '.input-group-prepend', ->
        tc.button '.input-group-text.btn.btn-outline-warning', "Search"
      tc.input '.form-control', type:'text', placeholder:'Enter search term'
  ui:
    button: 'button'
    input: 'input'
  events:
    'click @ui.button': 'buttonClicked'
  buttonClicked: ->
    term = @ui.input.val().trim()
    if term
      @trigger "search:clicked", term:term
    
export default SearchInput
