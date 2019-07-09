import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'hourly'

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
      

listTemplate = tc.renderable ->
  tc.div '.listview-header', ->
    tc.text "Potential Workers"
  tc.hr()
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
    @showChildView 'itemList', view
    
view_template = tc.renderable (model) ->
  tc.div '.row.listview-list-entry', ->
    tc.raw marked "# Potential Workers."


class MainView extends Marionette.View
  template: view_template
  templateContext:
    appName: 'hourly'
  onDomRefresh: ->
    console.log "list potential workers"
    pworkers = AppChannel.request 'get-potential-workers'
    console.log "pworkers", pworkers
    response = pworkers.fetch()
    response.done ->
      console.log "pworkers fetched", pworkers
      

export default ListView

