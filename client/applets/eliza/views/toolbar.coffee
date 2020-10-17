import { history as bbhistory, Collection } from 'backbone'
import { View, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import Worker from 'worker-loader!../worker'

worker = new Worker()
if __DEV__ and DEBUG
  console.log "worker", worker
  
toolbarEntries = [
  {
    id: 'destroy'
    label: 'close'
    icon: '.fa.fa-close'
    buttonClassName: 'btn btn-danger text-light'
  },{
    id: 'create'
    label: 'Talk to Eliza'
    icon: '.fa.fa-terminal.text-light.bg-dark'
  }
]

defaultButtonTemplate = tc.renderable (model) ->
  tc.i model.icon
  tc.text " "
  tc.text model.label

defaultButtonClassName = "btn btn-outline-primary"

class ToolbarButton extends View
  tagName: 'button'
  #className: 'btn btn-outline-primary'
  className: ->
    name = @model.get 'buttonClassName'
    if not name
      name = @getOption('buttonClassName') or defaultButtonClassName
    return name
  triggers:
    click: 'button:clicked'
  modelEvents:
    change: 'render'

class ToolbarButtonGroup extends CollectionView
  childView: ToolbarButton
  childViewOptions: ->
    template: @getOption 'entryTemplate'
    buttonClassName: @getOption 'buttonClassName'
  className: 'btn-group btn-group-justified'
  childViewTriggers:
    'button:clicked': 'toolbar:entry:clicked'

class ToolbarView extends View
  template: tc.renderable () ->
    tc.div '.toolbar-entries'
  regions:
    entries:
      el: '.toolbar-entries'
  onRender: ->
    entryTemplate = @getOption('entryTemplate') or defaultButtonTemplate
    buttonClassName = @getOption('buttonClassName') or defaultButtonClassName
    view = new ToolbarButtonGroup
      collection: @collection
      entryTemplate: entryTemplate
      buttonClassName: buttonClassName
    @showChildView 'entries', view
  onChildviewToolbarEntryClicked: (child) ->
    bbhistory.navigate child.model.get('url'), trigger:true
  
class ElizaToolbar extends ToolbarView
  collection: new Collection toolbarEntries
  # bubble up to main view
  childViewTriggers:
    'toolbar:entry:clicked': 'toolbar:entry:clicked'
  buttonClassName: 'btn btn-outline-success'
    
export default ElizaToolbar
