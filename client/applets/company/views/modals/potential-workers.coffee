import $ from 'jquery'
import { Radio } from 'backbone'
import { View } from 'backbone.marionette'
import tc from 'teacup'

import PotentialWorkersView from '../potential-workers'


AppChannel = Radio.channel 'company'

class PotentialWorkersModal extends View
  template: tc.renderable ->
    tc.div '.modal-dialog', ->
      tc.div '.modal-content', ->
        tc.div '.listview-header', "Add Potential Workers"
        #tc.h3 "Potential Workers"
        tc.div '.modal-body', ->
          tc.div '.selected-children'
        tc.div '.modal-footer', ->
          tc.button '.btn.btn-info.ml-auto.fa.fa-close',
          data:dismiss:'modal', 'Close'
  ui:
    body: '.modal-body'
    closeBtn: '.fa-close'
  regions:
    body: '@ui.body'
  events:
    'click @ui.closeBtn': 'closeBtnClicked'
  onRender: ->
    collection = AppChannel.request 'get-potential-workers'
    collection.fetch
      data:
        company_id: @model.get('id')
    view = new PotentialWorkersView
      model: @model
      collection: collection
    @showChildView 'body', view
  closeBtnClicked: ->
    collection = AppChannel.request 'db:worker:collection'
    collection.fetch()
    

export default PotentialWorkersModal
