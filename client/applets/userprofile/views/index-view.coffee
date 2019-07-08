import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'
import navigate_to_url from 'tbirds/util/navigate-to-url'

userIcon = require 'node-noto-emoji/dist/man'

MainChannel = Backbone.Radio.channel 'global'

user_profile_template = tc.renderable (model) ->
  tc.div ->
    tc.h2 "User Name: #{model.name}"
    tc.br()
    tc.h2 "Config:"
    tc.table ->
      for prop of model.config
        tc.tr ->
          tc.td ->
            tc.h3 prop
          tc.td ->
            tc.span model.config[prop]

userProfileTemplate = tc.renderable (model) ->
  tc.div '.card', style:'width: 18rem;', ->
    tc.img '.card-img-top', style:'height: 50px;', src:userIcon
    tc.div '.card-body', ->
      tc.h5 '.card-title', model.title
      tc.div '.card-text', ->
        # tc.raw marked model.text
        tc.a '.btn.btn-primary', href:"#profile/chpassword", 'Change Password'
        tc.a '.btn.btn-info', href:"#profile/mapview", 'Map'
      

class UserMainView extends Marionette.View
  template: userProfileTemplate

module.exports = UserMainView


