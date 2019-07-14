import $ from 'jquery'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import { modal_close_button } from 'tbirds/templates/buttons'
import BootstrapFormView from 'tbirds/views/bsformview'


import make_field_input_ui from 'tbirds/util/make-field-input-ui'
import navigate_to_url from 'tbirds/util/navigate-to-url'

{ form_group_input_div } = require 'tbirds/templates/forms'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
SiteNavChannel = Backbone.Radio.channel 'site-nav'

loginTemplate = tc.renderable (user) ->
  tc.div '.modal-dialog.modal-md', ->
    tc.div '.modal-content', ->
      tc.h3 "Please Login"
      tc.div '.modal-body', ->
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
        tc.div '.spinner.fa.fa-spinner.fa-spin'
      tc.div '.modal-footer', ->
        tc.button '.btn.btn-warning.fa.fa-close.mr-auto',
        data:dismiss:'modal', "Cancel"
        
        #tc.input '.btn.btn-primary.login-btn', type:'submit',
        #data:dismiss:'modal', value:'login'
        tc.input '.btn.btn-primary.ml-auto.login-btn',
        type:'submit', value:'login'
        
class BaseView extends BootstrapFormView
  ui: ->
    uiobject = make_field_input_ui @getOption 'fieldList'
    return uiobject
  createModel: ->
    new Backbone.Model
  emptyModal: ->
    app = MainChannel.request 'main:app:object'
    layout = app.getView()
    region = layout.getRegion 'modal'
    region.empty()
  #onFailure: ->
  #  MainChannel.request 'main:app:show-login'
    
    
    

class LoginModal extends BaseView
  template: loginTemplate
  fieldList: ['username', 'password']
  updateModel: ->
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
        MainChannel.request 'main:app:decode-auth-token'
        @trigger 'save:form:success', @model
        
      error: (response) =>
        if __DEV__
          console.log "error", response.responseJSON
        msg = response.responseJSON
        MessageChannel.request 'danger', msg.message
        @trigger 'save:form:failure', @model
  onSuccess: ->
    @emptyModal()
    SiteNavChannel.request 'set-index-entries'
    



export default LoginModal
