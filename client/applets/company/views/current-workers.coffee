import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'


MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'company'

    
class WorkerItemView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div model.user.username
  tagName: 'li'
  className: ->
    "list-group-item worker-item row"

class WorkerListView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div "#{model.name} workers"
    tc.div '.workers-container.listgroup'
  ui:
    itemList: '.workers-container'
  regions: ->
    itemList: '@ui.itemList'
  onRender: ->
    response = @collection.fetch
      data:
        where:
          company_id: @model.get('id')
    response.fail ->
      MessageChannel.request 'xhr-error', response
      
    view = new Marionette.CollectionView
      tagName: 'ul'
      className: 'list-group'
      collection: @collection
      childView: WorkerItemView
    @showChildView 'itemList', view
    
export default WorkerListView

