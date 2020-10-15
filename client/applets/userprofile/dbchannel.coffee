import $ from 'jquery'
import { Radio } from 'backbone'

MainChannel = Radio.channel 'global'
AppChannel = Radio.channel 'userprofile'

AppChannel.reply 'update-user-config', ->
  console.log 'update-user-config called'
  
AuthModel = MainChannel.request 'main:app:AuthModel'

class PasswordModel extends AuthModel
  url: '/auth/chpass'
  validation:
    password:
      required: true
      minLength: 8
    confirm: (value) ->
      # https://github.com/thedersen/backbone.validation/issues/211
      # form view uses preValidate
      # FIXME, this is very view dependent
      password_input = $('input[name="password"]')
      password = password_input.val()
      if value == password
        $('input[type="submit"]').show()
      value != password
      
AppChannel.reply 'new-password-model', ->
  new PasswordModel
