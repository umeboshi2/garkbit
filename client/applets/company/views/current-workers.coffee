import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

import ListView from 'tbirds/views/list-view'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'company'

    
class WorkerItemView extends Marionette.View
  template: tc.renderable (model) ->
    status = model.status
    if status == 'off'
      badgeColor = 'warning'
    else if status == 'on'
      badgeColor = 'success'
    else
      badgeColor = 'danger'
    tc.span '.mr-auto', ->
      model.user.username
    tc.span ".ml-auto.badge.badge-#{badgeColor}.pull-right", ->
      model.status
  tagName: 'li'
  className: ->
    "list-group-item worker-item row"

class WorkerListView extends ListView
  template: tc.renderable (model) ->
    tc.div "#{model.name} workers"
    tc.div '.workers-container.listgroup'
  ui:
    itemList: '.workers-container'
  ItemView: WorkerItemView
  onRender: ->
    super()
    response = @collection.fetch
      data:
        where:
          company_id: @model.get('id')
    response.fail ->
      MessageChannel.request 'xhr-error', response
    
export default WorkerListView

