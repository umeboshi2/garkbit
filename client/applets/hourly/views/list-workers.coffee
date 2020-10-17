import { View, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

class ItemView extends View
  tagName: 'li'
  className: ->
    "list-group-item worker-item row"
  template: tc.renderable (model) ->
    itemButton = '.btn.btn-secondary.btn-sm'
    statusButtonMap =
      "on": "btn-success"
      "off": "btn-warning"
    tc.span '.mr-auto', ->
      model.user.username
    if model.status
      status = model.status
      statusButton = "#{itemButton}.#{statusButtonMap[status]}"
    else
      status = "No status set."
      statusButton = itemButton
    tc.span '.ml-auto.btn-group.pull-right', ->
      console.log "model.status", status
      console.log statusButton
      tc.button ".add-item.#{statusButton}", status
  ui: ->
    addItem: '.add-item'
  events: ->
    'click @ui.addItem': 'addItem'
  addItem: ->
    console.log "addItem called", @model

class ListView extends View
  template: tc.renderable ->
    tc.div '.listview-header', ->
      tc.text "Current Workers"
    tc.hr()
    tc.div '.workers-container.list-group'
  ui: ->
    itemList: '.workers-container'
  regions: ->
    itemList: '@ui.itemList'
  onRender: ->
    view = new CollectionView
      tagName: 'ul'
      className: 'list-group'
      collection: @collection
      childView: ItemView
    @showChildView 'itemList', view
    

export default ListView

