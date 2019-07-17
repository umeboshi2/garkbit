import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'

import navigate_to_url from 'tbirds/util/navigate-to-url'

import WorkerListView from './current-workers'



MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'company'



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
    @ui.potentialBtn.hide()
    @checkPotentialWorkers()
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

  checkPotentialWorkers: ->
    pworkers = AppChannel.request 'get-potential-workers'
    response = pworkers.fetch
      data:
        company_id: @model.get('id')
    response.done =>
      console.log "pworkers fetched", pworkers, 
      if pworkers.length
        @ui.potentialBtn.show()
    response.fail ->
      MessageChannel.request 'xhr-error', response

    
  potentialBtnClicked: ->
    require.ensure [], () =>
      PotentialWorkersModal = require('./modals/potential-workers').default
      view = new PotentialWorkersModal
        model: @model
      MainChannel.request 'main:app:show-modal', view
      
export default MainView
