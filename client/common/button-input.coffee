import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'

class ButtonInput extends MnView
  templateContext: ->
    buttonText: @getOption('buttonText') or "Search"
    placeholder: @getOption('placeholder') or "Enter search term"
    buttonClass: @getOption('buttonClass') or ".btn.btn-outline-warning"
  template: tc.renderable (model) ->
    tc.div '.input-group', ->
      tc.div '.input-group-prepend', ->
        tc.button ".input-group-text#{model.buttonClass}", model.buttonText
      tc.input '.form-control', type:'text', placeholder:model.placeholder
  ui:
    button: 'button'
    input: 'input'
  events:
    'click @ui.button': 'buttonClicked'
  buttonClicked: ->
    value = @ui.input.val().trim()
    if value?
      @trigger "input:submit", value:value
    
export default ButtonInput
