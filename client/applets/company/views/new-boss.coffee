import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'

import BootstrapFormView from 'tbirds/views/bsformview'
import navigate_to_url from 'tbirds/util/navigate-to-url'
import make_field_input_ui from 'tbirds/util/make-field-input-ui'
import capitalize from 'tbirds/util/capitalize'
import {
  make_field_input
  make_field_textarea } from 'tbirds/templates/forms'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'company'


viewTemplate = tc.renderable (model) ->
  tc.div '.row.listview-list-entry', ->
    tc.raw marked "# New Boss."
    
class MainView extends Marionette.View
  template: viewTemplate
  templateContext:
    appName: 'company'
  onRender: ->
    user = MainChannel.request 'main:app:decode-auth-token'
    console.log "onRender"
     
export default MainView
