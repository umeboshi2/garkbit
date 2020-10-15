import $ from 'jquery'
import Backbone from 'backbone'
import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'
import codenamize from '@codenamize/codenamize'

import BootstrapFormView from 'tbirds/views/bsformview'
import make_field_input_ui from 'tbirds/util/make-field-input-ui'
import navigate_to_url from 'tbirds/util/navigate-to-url'

import { form_group_input_div } from 'tbirds/templates/forms'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'


class PasswordHintView extends MnView
  className: 'col'
  template: tc.renderable ->
    tc.h5 'Password Hint'
    tc.span '.mr-auto.fa.fa-refresh.text-light.bg-primary'
    tc.span '.chpass-recommend.ml-2'
  ui: ->
    chpassRecommend: '.chpass-recommend'
    button: '.fa-refresh'
  events:
    'click @ui.button': 'buttonClicked'
  onRender: ->
    @updateRecommended()
  buttonClicked: ->
    @updateRecommended()
  updateRecommended: ->
    now = new Date
    newpass = codenamize
      seed: now.toString()
      adjectiveCount: 3
      maxItemChars: 6
    @ui.chpassRecommend.text newpass
    

chpass_form = tc.renderable () ->
  tc.div '.row.password-hint'
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
    uiobject.passwordHint = '.password-hint'
    return uiobject
  regions:
    passwordHint: '@ui.passwordHint'
  onRender: ->
    @ui.submit.hide()
    view = new PasswordHintView
    @showChildView 'passwordHint', view
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
      
  onSuccess: ->
    navigate_to_url '#profile'
  onFailure: ->
    @ui.submit.hide()
  saveModel: ->
    password = @model.get 'password'
    confirm = @model.get 'confirm'
    $.ajax
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

