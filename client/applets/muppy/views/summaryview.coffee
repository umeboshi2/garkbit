import $ from 'jquery'
import { Radio } from 'backbone'
import tc from 'teacup'

import BootstrapFormView from 'tbirds/views/bsformview'
import make_field_input_ui from 'tbirds/util/make-field-input-ui'

import { form_group_input_div } from 'tbirds/templates/forms'

MessageChannel = Radio.channel 'messages'


mksum_form = tc.renderable ->
  now = new Date
  form_group_input_div
    input_id: 'input_name'
    label: 'Summary Name'
    input_attributes:
      name: 'name'
      placeholder: 'summary'
      value: "#{now.toDateString()}-#{now.toTimeString().split(' ')[0]}"
  tc.input '.btn.btn-primary', type:'submit', value:'Save'
  tc.div '.spinner.fa.fa-spinner.fa-spin'

class MakeSummaryView extends BootstrapFormView
  template: mksum_form
  fieldList: ['name']
  ui: ->
    uiobject = make_field_input_ui @fieldList
    uiobject.submit = 'input[type="submit"]'
    return uiobject
    
  createModel: ->
    @model
    
  updateModel: ->
    console.log "model", @model
    name = @ui.name.val()
    @model.set 'name', name
    
      
  onSuccess: ->
    MessageChannel.request 'success', "saved summary"
    
  onFailure: ->
    @ui.submit.hide()

export default MakeSummaryView

