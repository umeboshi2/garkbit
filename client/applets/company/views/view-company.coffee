import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'

import navigate_to_url from 'tbirds/util/navigate-to-url'

import PotentialWorkersView from './potential-workers'


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
    
viewTemplate = tc.renderable (model) ->
  

class MainView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.listview-header', model.name
    tc.div model.description
    tc.button '.potential-btn.btn.btn-primary.fa.fa-plus', ->
      tc.text 'Add potential workers'
    tc.div '.row', ->
      tc.div '.workers.col-md-6'
      tc.div '.potential-workers.col-md-6'
  templateContext:
    appName: 'company'
  ui:
    potentialBtn: '.potential-btn'
    workers: '.workers'
    potentialWorkers: '.potential-workers'
  regions:
    workers: '@ui.workers'
    potentialWorkers: '@ui.potentialWorkers'
  events:
    'click @ui.potentialBtn': 'potentialBtnClicked'
  onRender: ->
    @collection = AppChannel.request 'db:worker:collection'
    response = @collection.fetch
      data:
        where:
          company_id: @model.get('id')
    response.fail ->
      MessageChannel.request 'xhr-error', response
      
    view = new WorkerListView
      collection: @collection
      model: @model
    @showChildView 'workers', view
    
    console.log 'hello'
  potentialBtnClicked: ->
    console.log "View poential workers"
    collection = AppChannel.request 'get-potential-workers'
    collection.fetch
      data:
        company_id: @model.get('id')
    view = new PotentialWorkersView
      model: @model
      collection: collection
    @showChildView 'potentialWorkers', view
    
export default MainView
