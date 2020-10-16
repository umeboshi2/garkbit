import { View } from 'backbone.marionette'
import tc from 'teacup'

onOffText = (state) ->
  if state
    return 'on'
  else
    return 'off'

class BaseToggleView extends View
  state: false
  templateContext: ->
    toggleState: @state
    toggleText: onOffText @state
  template: tc.renderable (model) ->
    tc.span '.mr-1', model.label
    tc.i ".ml-1.pl-1.fa.fa-toggle-#{model.toggleText}"
  events:
    click: 'toggleState'
  toggleState: ->
    if @state
      @state = false
    else
      @state = true
    @render()
    @trigger 'toggle', @
  
export default BaseToggleView
