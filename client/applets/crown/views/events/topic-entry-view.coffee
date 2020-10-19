import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'

class TopicEntryView extends MnView
  className: "form-group form-check"
  template: tc.renderable (model) ->
    tc.input '.form-check-input', type:'checkbox'
    tc.label '.form-check-label', model.name
  ui:
    input: 'input'
  events:
    click: 'toggleInput'
  onRender: ->
    @ui.input.prop 'checked', @model.get('selected')
  toggleInput: ->
    checked = @ui.input.is ':checked'
    @ui.input.prop 'checked', not checked
    @model.set 'selected', not checked
    @trigger "checked:#{not checked}"
    @trigger 'toggled'
    
export default TopicEntryView
