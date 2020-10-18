import { Radio } from 'backbone'
import { extend } from 'lodash'
import tc from 'teacup'
import BootstrapFormView from 'tbirds/views/bsformview'


import make_field_input_ui from 'tbirds/util/make-field-input-ui'
{ form_group_input_div } = require 'tbirds/templates/forms'
import {
  make_field_textarea } from 'tbirds/templates/forms'

MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'

class BaseEditor extends BootstrapFormView
  fieldList: ['name']
  templateContext: ->
    fieldList: @fieldList
    
  template: tc.renderable (model) ->
    tc.div '.listview-header', "New Company"
    form_group_input_div
      input_id: 'input_name'
      label: 'Name'
      input_attributes:
        name: 'name'
        type: 'input'
        placeholder: 'Enter a name'
        'data-validation': 'name'
      invalidFeedback: "A name is needed."
    make_field_textarea('description')(model)
    tc.input '.btn.btn-primary', type:'submit', value:"Submit"
    tc.div '.spinner.fa.fa-spinner.fa-spin'
  ui: ->
    uiobject = make_field_input_ui @fieldList
    extend uiobject, {'description': 'textarea[name="description"]'}
    return uiobject
  
  updateModel: ->
    for field in @fieldList.concat ['description']
      value = @ui[field].val()
      @model.set field, value
    # update other fields
    user = MainChannel.request 'main:app:decode-auth-token'
    @model.set('boss_id', user.uid)
    
  onSuccess: (model) ->
    name = model.get 'name'
    MessageChannel.request 'success', "#{name} saved successfully.", "grain"
    
  
export default BaseEditor
