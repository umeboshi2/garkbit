import $ from 'jquery'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import { modal_close_button } from 'tbirds/templates/buttons'

import make_field_input_ui from 'tbirds/util/make-field-input-ui'
import navigate_to_url from 'tbirds/util/navigate-to-url'

import PotentialWorkersView from '../potential-workers'


MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'company'


mainTemplate = tc.renderable (model) ->
  tc.div '.modal-dialog', ->
    tc.div '.modal-content', ->
      tc.div '.listview-header', "Add Potential Workers"
      #tc.h3 "Potential Workers"
      tc.div '.modal-body', ->
        tc.div '.selected-children'
      tc.div '.modal-footer', ->
        tc.button '.btn.btn-info.ml-auto.fa.fa-close',
        data:dismiss:'modal', 'Close'

class PotentialWorkersModal extends Marionette.View
  template: mainTemplate
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
