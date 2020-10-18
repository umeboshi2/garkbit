import { View } from 'backbone.marionette'
import tc from 'teacup'

###
import BootstrapFormView from 'tbirds/views/bsformview'
import {
  make_field_input
  make_field_textarea } from 'tbirds/templates/forms'
###

# MainChannel = Radio.channel 'global'

class MainView extends View
  template: tc.renderable ->
    tc.div '.row.listview-list-entry', ->
      tc.h1 "New Boss."
  templateContext:
    appName: 'company'
  onRender: ->
    # user = MainChannel.request 'main:app:decode-auth-token'
    console.log "onRender"
     
export default MainView
