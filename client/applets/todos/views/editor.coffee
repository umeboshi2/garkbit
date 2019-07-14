import _ from 'underscore'
import Backbone from 'backbone'

#beautify = require('js-beautify').html

import BootstrapFormView from 'tbirds/views/bsformview'

import make_field_input_ui from 'tbirds/util/make-field-input-ui'
import navigate_to_url from 'tbirds/util/navigate-to-url'
import capitalize from 'tbirds/util/capitalize'

import tc from 'teacup'
import { form_group_input_div } from 'tbirds/templates/forms'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'todos'

_edit_form = tc.renderable (model) ->
  for field in ['name']
    form_group_input_div
      input_id: "input_#{field}"
      label: capitalize field
      input_attributes:
        name: field
        placeholder: field
        value: model[field]
  field = 'description'
  form_group_input_div
    input_id: "input_#{field}"
    input_type: 'textarea'
    label: capitalize field
    input_attributes:
      name: field
      placeholder: field
    content: model[field]
    
form_template = tc.renderable (model) ->
  _edit_form model
  tc.input '.btn.btn-primary', type:'submit', value:"Submit"
  tc.div '.spinner.fa.fa-spinner.fa-spin'
  


class BaseEditor extends BootstrapFormView
  template: form_template
  fieldList: ['name']
  ui: ->
    uiobject = make_field_input_ui @fieldList
    _.extend uiobject, {'description': 'textarea[name="description"]'}
    return uiobject
  
  updateModel: ->
    for field in @fieldList.concat ['description']
      console.log 'field', field, @ui[field].val()
      @model.set field, @ui[field].val()
    # update other fields
    
  onSuccess: (model) ->
    name = model.get 'name'
    MessageChannel.request 'success', "#{name} saved successfully.", "grain"
    navigate_to_url '#todos'
    
class NewView extends BaseEditor
  createModel: ->
    todo = AppChannel.request 'db:todo:new'
    todo.set 'completed', false
    return todo
    
  saveModel: ->
    collection = AppChannel.request 'db:todo:collection'
    collection.add @model
    super arguments...
    
class EditView extends BaseEditor
  # the model should be assigned in the controller
  createModel: ->
    #console.log "createModel called on EditPageView", @model
    @model
    
export {
  NewView
  EditView
  }  

