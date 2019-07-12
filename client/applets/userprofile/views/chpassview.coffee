import $ from 'jquery'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

import BootstrapFormView from 'tbirds/views/bsformview'
import capitalize from 'tbirds/util/capitalize'
import make_field_input_ui from 'tbirds/util/make-field-input-ui'
import navigate_to_url from 'tbirds/util/navigate-to-url'

import { form_group_input_div } from 'tbirds/templates/forms'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'


chpass_form = tc.renderable () ->
  form_group_input_div
    input_id: 'input_password'
    label: 'Password'
    input_attributes:
      name: 'password'
      type: 'password'
      placeholder: 'Enter new password'
      'data-validation': 'password'
  form_group_input_div
    input_id: 'input_confirm'
    label: 'Confirm Password'
    input_attributes:
      name: 'confirm'
      type: 'password'
      placeholder: 'Confirm your new password'
      'data-validation': 'confirm'
  tc.input '.btn.btn-success.btn-sm', type:'submit', value:"Change Password"
      

class ChangePasswordView extends BootstrapFormView
  template: chpass_form
  fieldList: ['password', 'confirm']
  ui: ->
    uiobject = make_field_input_ui @fieldList
    uiobject.submit = 'input[type="submit"]'
    return uiobject
  onDomRefresh: ->
    @ui.submit.hide()
    
  createModel: ->
    @model
    
  updateModel: ->
    console.log "model", @model
    password = @ui.password.val()
    confirm = @ui.confirm.val()
    if password == confirm
      @model.set 'password', password
      @model.set 'confirm', confirm
    else
      console.log "MISMATCH"
      @trigger 'save:form:failure', @model
      
  onSuccess: (model) ->
    navigate_to_url '#profile'
  onFailure: (model) ->
    @ui.submit.hide()
  saveModel: ->
    password = @model.get 'password'
    confirm = @model.get 'confirm'
    xhr = $.ajax
      url: '/auth/chpass'
      type: 'POST'
      data:
        password: password
        confirm: confirm
      dataType: 'json'
      beforeSend: MainChannel.request 'main:app:authBeforeSend'
      success: (response) =>
        token = response.token
        console.log "token", token
        @trigger "save:form:success", @model
      error: (response) =>
        msg = response.responseJSON
        MessageChannel.request 'danger', msg.message
        @trigger 'save:form:failure', @model
        
    

export default ChangePasswordView

