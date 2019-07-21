import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'

import BaseListView from 'tbirds/views/list-view'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'company'

itemTemplate = tc.renderable (model) ->
  itemButton = '.btn.btn-info.btn-sm'
  tc.span '.mr-auto', ->
    model.name
  
  tc.span '.ml-auto.btn-group.pull-right', ->
    tc.button ".edit-item.#{itemButton}", 'Edit'
    
class ItemView extends Marionette.View
  template: itemTemplate
  tagName: 'li'
  className: ->
    "list-group-item worker-item row"
  ui: ->
    addItem: '.add-item'
    
  events: ->
    'click @ui.addItem': 'addItem'

  addItem: ->
    console.log "addItem called", @model


listTemplate = tc.renderable ->
  tc.div '.listview-header', ->
    tc.text "Current Workers"
  tc.hr()
  tc.div '.workers-container.list-group'


class ListView extends BaseListView
  ItemView: ItemView
  template: listTemplate
  ui: ->
    itemList: '.workers-container'

export default ListView

