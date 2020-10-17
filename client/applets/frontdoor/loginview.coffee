import $ from 'jquery'
import { Radio, Model } from 'backbone'
import { View } from 'backbone.marionette'
import tc from 'teacup'

import make_field_input_ui from 'tbirds/util/make-field-input-ui'
import navigate_to_url from 'tbirds/util/navigate-to-url'

import { form_group_input_div } from 'tbirds/templates/forms'
import BootstrapFormView from 'tbirds/views/bsformview'

MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'

class BaseView extends BootstrapFormView
  ui: ->
    uiobject = make_field_input_ui @fieldList
    return uiobject
  createModel: ->
    new Model
  onSuccess: ->
    # FIXME start reloading the child apps
    # that recognize users
    navigate_to_url '#'
    
class LoginView extends BaseView
  template: tc.renderable ->
    form_group_input_div
      input_id: 'input_username'
      label: 'User Name'
      input_attributes:
        name: 'username'
        placeholder: 'User Name'
    form_group_input_div
      input_id: 'input_password'
      label: 'Password'
      input_attributes:
        name: 'password'
        type: 'password'
      placeholder: 'Type your password here....'
    tc.input '.btn.btn-primary', type:'submit', value:'login'
    tc.div '.spinner.fa.fa-spinner.fa-spin'
  fieldList: ['username', 'password']
  updateModel: ->
    console.log 'updateModel called'
    @model.set 'username', @ui.username.val()
    @model.set 'password', @ui.password.val()
  saveModel: ->
    username  = @model.get 'username'
    password = @model.get 'password'
    xhr = $.ajax
      url: '/login'
      type: 'POST'
      data:
        username: username
        password: password
      dataType: 'json'
      success: (response) =>
        token = response.token
        MainChannel.request 'main:app:set-auth-token', token
        @trigger 'save:form:success', @model
      error: (response) =>
        if __DEV__
          console.log "error", response.responseJSON
        msg = response.responseJSON
        MessageChannel.request 'danger', msg.message
        @trigger 'save:form:failure', @model
    console.log "returning xhr", xhr

class TokenView extends BaseView
  template: tc.renderable ->
    form_group_input_div
      input_id: 'input_token'
      label: 'Auth Token'
      input_attributes:
        name: 'token'
        placeholder: 'xxxxxxxxxxxxxxx'
    tc.input '.btn.btn-primary', type:'submit', value:'login'
    tc.div '.spinner.fa.fa-spinner.fa-spin'
  fieldList: ['token']
  updateModel: ->
    console.log 'updateModel called'
    @model.set 'token', @ui.token.val()
  saveModel: ->
    token = @model.get 'token'
    MainChannel.request 'main:app:set-auth-token', token
    AuthRefresh = MainChannel.request 'main:app:AuthRefresh'
    refresh = new AuthRefresh
    response = refresh.fetch()
    response.fail =>
      msg = response.responseJSON
      MessageChannel.request 'danger', msg.message
      @trigger 'save:form:failure', @model
    response.done =>
      @trigger 'save:form:success', @model

class MainView extends View
  template: tc.renderable ->
    tc.div '#login-form'
    tc.div '#token-form'
  regions:
    login: '#login-form'
    token: '#token-form'
  onRender: ->
    @showChildView 'login', new LoginView
    @showChildView 'token', new TokenView

export default MainView
