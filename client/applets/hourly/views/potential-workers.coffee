import { Radio } from 'backbone'
import { View, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

MessageChannel = Radio.channel 'messages'
AppChannel = Radio.channel 'hourly'

class ItemView extends View
  tagName: 'li'
  className: ->
    "list-group-item #{@item_type}-item row"
  template: tc.renderable (model) ->
    itemButton = '.btn.btn-secondary.btn-sm'
    tc.span '.mr-auto', ->
      model.username
    tc.span '.ml-auto.btn-group.pull-right', ->
      tc.button ".add-item.#{itemButton}.btn-info.fa.fa-plus"
  ui: ->
    addItem: '.add-item'
    
  events: ->
    'click @ui.addItem': 'addItem'

  addItem: ->
    modelClass = AppChannel.request 'db:worker:modelClass'
    model = new modelClass
      id: @model.get 'id'
      status: 'off'
    # https://stackoverflow.com/a/24915961/1869821
    response = model.save(null,
      type: 'POST'
      url: model.urlRoot)
    response.done =>
      collection = @model.collection
      console.log "collection is ", collection
      console.log 'model is ', @model
      
      console.log "this is", @
      collection.fetch()
    response.fail ->
      MessageChannel.request 'warning', "things are not correct"
      

class ListView extends View
  template: tc.renderable ->
    tc.div '.listview-header', ->
      tc.text "Potential Workers"
    tc.hr()
    tc.div '.pworkers-container.list-group'
  ui: ->
    itemList: '.pworkers-container'
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

