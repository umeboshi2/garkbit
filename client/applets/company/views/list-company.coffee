import { View } from 'backbone.marionette'
import tc from 'teacup'
import BaseListView from 'tbirds/views/list-view'

class ItemView extends View
  template: tc.renderable (model) ->
    itemButton = '.btn.btn-info.btn-sm'
    tc.span '.mr-auto', ->
      model.name
    tc.span '.ml-auto.btn-group.pull-right', ->
      tc.button ".edit-item.#{itemButton}", 'Edit'
  tagName: 'li'
  className: ->
    "list-group-item worker-item row"
  ui: ->
    addItem: '.add-item'
  events: ->
    'click @ui.addItem': 'addItem'
  addItem: ->
    console.log "addItem called", @model

class ListView extends BaseListView
  template: tc.renderable ->
    tc.div '.listview-header', ->
      tc.text "Current Workers"
    tc.hr()
    tc.div '.workers-container.list-group'
  ItemView: ItemView
  ui: ->
    itemList: '.workers-container'

export default ListView

