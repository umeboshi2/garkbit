import _ from 'underscore'
import Backbone from 'backbone'
import tc from 'teacup'

import BootstrapFormView from 'tbirds/views/bsformview'
import navigate_to_url from 'tbirds/util/navigate-to-url'
import make_field_input_ui from 'tbirds/util/make-field-input-ui'
import capitalize from 'tbirds/util/capitalize'
import {
  make_field_input
  make_field_textarea } from 'tbirds/templates/forms'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'sunny'

class BaseClientEditor extends BootstrapFormView
  fieldList: ['name', 'fullname', 'email']
  templateContext: ->
    fieldList: @fieldList
    
  template: tc.renderable (model) ->
    tc.div '.listview-header', 'Client'
    for field in model.fieldList
      make_field_input(field)(model)
    make_field_textarea('description')(model)
    tc.input '.btn.btn-default', type:'submit', value:"Submit"
    tc.div '.spinner.fa.fa-spinner.fa-spin'
    
  ui: ->
    uiobject = make_field_input_ui @fieldList
    _.extend uiobject, {'description': 'textarea[name="description"]'}
    return uiobject
  
  updateModel: ->
    for field in @fieldList.concat ['description']
      value = @ui[field].val()
      console.log 'field', field, value
      if field is 'fullname' and not value
        console.log 'no fullname here.....'
        value = capitalize @model.get 'name'
      @model.set field, value
    # update other fields
    
  onSuccess: (model) ->
    name = model.get 'name'
    MessageChannel.request 'success', "#{name} saved successfully.", "grain"
    navigate_to_url '#sunny'
    

class NewClientView extends BaseClientEditor
  createModel: ->
    AppChannel.request 'db:client:new'

  saveModel: ->
    clients = AppChannel.request 'db:client:collection'
    clients.add @model
    super arguments
    
class EditClientView extends BaseClientEditor
  # the model should be assigned in the controller
  createModel: ->
    @model
    
module.exports =
  NewClientView: NewClientView
  EditClientView: EditClientView
  

