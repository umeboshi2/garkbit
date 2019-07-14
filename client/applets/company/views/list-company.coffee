import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'

{ navigate_to_url } = require 'tbirds/util/navigate-to-url'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'company'

itemTemplate = tc.renderable (model) ->
  itemButton = '.btn.btn-secondary.btn-sm'
  tc.span '.mr-auto', ->
    model.name
  tc.span '.ml-auto.btn-group.pull-right', ->
    tc.button ".add-item.#{itemButton}.btn-info.fa.fa-plus"

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


class ListView extends Marionette.View
  template: listTemplate
  ui: ->
    itemList: '.workers-container'
  regions: ->
    itemList: '@ui.itemList'
  onRender: ->
    view = new Marionette.CollectionView
      tagName: 'ul'
      className: 'list-group'
      collection: @collection
      childView: ItemView
    @showChildView 'itemList', view
    

export default ListView

