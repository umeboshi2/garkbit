import { Radio } from 'backbone'
import { View, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

MessageChannel = Radio.channel 'messages'
AppChannel = Radio.channel 'company'

class ItemView extends View
  template: tc.renderable (model) ->
    itemButton = '.btn.btn-secondary.btn-sm'
    tc.span '.mr-auto', ->
      model.username
    tc.span '.ml-auto.btn-group.pull-right', ->
      tc.button ".add-item.#{itemButton}.btn-info.fa.fa-plus"
  tagName: 'li'
  className: ->
    "list-group-item #{@item_type}-item row"
  ui: ->
    addItem: '.add-item'
  events: ->
    'click @ui.addItem': 'addItem'
  addItem: ->
    company_id = @getOption 'company_id'
    Model = AppChannel.request 'db:worker:modelClass'
    model = new Model
      id: @model.get 'id'
      company_id: company_id
      status: 'off'
    response = model.save(null,
      type: 'POST'
      url: model.urlRoot)
    response.done =>
      collection = @model.collection
      console.log "collection is ", collection
      console.log 'model is ', @model
      console.log "this is", @
      collection.fetch
        data:
          company_id: company_id
    response.fail ->
      MessageChannel.request 'xhr-error', response

class ListView extends View
  template: tc.renderable ->
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
      childViewOptions:
        company_id: @model.get('id')
    @showChildView 'itemList', view
    
export default ListView

