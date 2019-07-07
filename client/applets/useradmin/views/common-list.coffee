import Marionette from 'backbone.marionette'
import tc from 'teacup'
import navigate_to_url from 'tbirds/util/navigate-to-url'


itemTemplate = tc.renderable (model) ->
  tc.span '.mr-auto', ->
    href = model.itemViewUrl
    tc.a href:href, model.itemLabel
  tc.span '.ml-auto.btn-group.pull-right', ->
    tc.button '.edit-item.btn.btn-sm.btn-info.fa.fa-edit', 'edit'
    tc.button '.delete-item.btn.btn-sm.btn-danger.fa.fa-close', 'delete'


listTemplate = tc.renderable ->
  #tc.div '.item-container.list-group'
  tc.div '.item-container.col'

itemTemplateTest = tc.renderable (model) ->
  itemButton = '.btn.btn-sm'
  tc.span '.mr-auto', ->
    JSON.stringify model
  tc.span '.ml-auto.btn-group.pull-right', ->
    tc.button ".add-item.#{itemButton}.btn-info.fa.fa-plus"
    
class ItemView extends Marionette.View
  channelName: 'useradmin'
  tagName: 'li'
  className: ->
    "list-group-item row"
  templateContext: ->
    itemLabel: @model.itemLabel()
    itemViewUrl: @model.itemViewUrl()
  template: itemTemplate
  ui: ->
    editItem: '.edit-item'
    deleteItem: '.delete-item'
    item: '.list-group-item'
  events: ->
    'click @ui.editItem': 'editItem'
    'click @ui.deleteItem': 'deleteItem'

  editItem: ->
    console.log "called editItem", @options, @model
    navigate_to_url @model.itemEditUrl()
    
    

  deleteItem: ->
    console.log "called deleteItem"
    

class ListView extends Marionette.View
  channelName: 'hourly'
  template: listTemplate
  ui: ->
    container: '.item-container'
  regions: ->
    container: '@ui.container'
  onRender: ->
    view = new Marionette.CollectionView
      channelName: 'useradmin'
      tagName: 'ul'
      className: 'list-group'
      collection: @collection
      childView: ItemView
    @showChildView 'container', view

export default ListView
