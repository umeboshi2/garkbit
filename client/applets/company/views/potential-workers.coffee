import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'company'

itemTemplate = tc.renderable (model) ->
  itemButton = '.btn.btn-secondary.btn-sm'
  tc.span '.mr-auto', ->
    model.username
  tc.span '.ml-auto.btn-group.pull-right', ->
    tc.button ".add-item.#{itemButton}.btn-info.fa.fa-plus"
    
class ItemView extends Marionette.View
  template: itemTemplate
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

listTemplate = tc.renderable ->
  tc.div '.pworkers-container.list-group'


class ListView extends Marionette.View
  template: listTemplate
  ui: ->
    itemList: '.pworkers-container'
  regions: ->
    itemList: '@ui.itemList'
  onRender: ->
    view = new Marionette.CollectionView
      tagName: 'ul'
      className: 'list-group'
      collection: @collection
      childView: ItemView
      childViewOptions:
        company_id: @model.get('id')
    @showChildView 'itemList', view
    
export default ListView

