import { Radio } from 'backbone'
import { View } from 'backbone.marionette'
import tc from 'teacup'

import WorkerListView from './current-workers'

MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'
AppChannel = Radio.channel 'company'

class MainView extends View
  template: tc.renderable (model) ->
    tc.div '.listview-header', model.name
    tc.div model.description
    tc.div '.row', ->
      tc.button '.calendar-btn.btn.btn-primary.fa.fa-calendar'
      tc.div '.col.boss-calendar'
    tc.button '.potential-btn.btn.btn-primary.fa.fa-plus', ->
      tc.text 'Add potential workers'
    tc.div '.row', ->
      tc.div '.workers.col-md-6'
      tc.div '.potential-workers.col-md-6'
  ui:
    potentialBtn: '.potential-btn'
    calendarBtn: '.calendar-btn'
    workers: '.workers'
    potentialWorkers: '.potential-workers'
    bossCalendar: '.boss-calendar'
  regions:
    workers: '@ui.workers'
    potentialWorkers: '@ui.potentialWorkers'
    bossCalendar: '@ui.bossCalendar'
  events:
    'click @ui.potentialBtn': 'potentialBtnClicked'
    'click @ui.calendarBtn': 'calendarBtnClicked'
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
      if __DEV__
        console.log "pworkers fetched", pworkers
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
    # name the chunk
    , 'company-potential-workers-child-view'
  calendarBtnClicked: ->
    console.log 'calendarBtnClicked'
    require.ensure [], () =>
      BossCalendar = require('./boss-calendar').default
      region = @getRegion('bossCalendar')
      if region.hasView()
        region.empty()
      else
        view = new BossCalendar
          model: @model
        @showChildView 'bossCalendar', view
    # name the chunk
    , 'company-potential-workers-child-view'
    
export default MainView
