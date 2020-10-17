import $ from 'jquery'
import { Radio } from 'backbone'
import tc from 'teacup'

import BootstrapFormView from 'tbirds/views/bsformview'
import make_field_input_ui from 'tbirds/util/make-field-input-ui'
{ form_group_input_div } = require 'tbirds/templates/forms'

MainChannel = Radio.channel 'global'

mapTemplate = tc.renderable (model) ->
  console.log "map model". model
  tc.div '.modal-dialog.modal-md', ->
    tc.div '.modal-content', ->
      tc.h3 "Add Location"
      tc.div '.modal-body', ->
        form_group_input_div
          input_id: 'input_name'
          label: 'Name'
          input_attributes:
            name: 'name'
            placeholder: "Name this place"
            data:validation:'name'
            # FIXME this is temporary
            value: model.namePlaceholder
        tc.div '.spinner.fa.fa-spinner.fa-spin'
      tc.div '.modal-footer', ->
        tc.button '.btn.btn-warning.fa.fa-close.mr-auto',
        data:dismiss:'modal', "Cancel"
        tc.input '.btn.btn-primary.ml-auto.login-btn',
        type:'submit', value:'Submit'
        
class BaseView extends BootstrapFormView
  ui: ->
    uiobject = make_field_input_ui @getOption 'fieldList'
    return uiobject
  createModel: ->
    return @model
  emptyModal: ->
    app = MainChannel.request 'main:app:object'
    layout = app.getView()
    region = layout.getRegion 'modal'
    region.empty()
    

class Modal extends BaseView
  template: mapTemplate
  fieldList: ['name']
  updateModel: ->
    @model.set 'name', @ui.name.val()
    console.log "model updated", @model
  saveModel: ->
    super arguments
  onSuccess: ->
    @emptyModal()

export default Modal
