import _ from 'underscore'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import { modal_close_button } from 'tbirds/templates/buttons'
import BootstrapFormView from 'tbirds/views/bsformview'


import make_field_input_ui from 'tbirds/util/make-field-input-ui'
import navigate_to_url from 'tbirds/util/navigate-to-url'

{ form_group_input_div } = require 'tbirds/templates/forms'
import {
  make_field_input
  make_field_textarea } from 'tbirds/templates/forms'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'company'

SiteNavChannel = Backbone.Radio.channel 'site-nav'

companyTemplate = tc.renderable (model) ->
  tc.div '.listview-header', "New Company"
  make_field_input('name')(model)
  make_field_textarea('description')(model)
  tc.input '.btn.btn-primary', type:'submit', value:"Submit"
  tc.div '.spinner.fa.fa-spinner.fa-spin'

class BaseEditor extends BootstrapFormView
  fieldList: ['name']
  templateContext: ->
    fieldList: @fieldList
    
  template: tc.renderable (model) ->
    tc.div '.listview-header', "New Company"
    make_field_input('name')(model)
    make_field_textarea('description')(model)
    tc.input '.btn.btn-primary', type:'submit', value:"Submit"
    tc.div '.spinner.fa.fa-spinner.fa-spin'

  ui: ->
    uiobject = make_field_input_ui @fieldList
    _.extend uiobject, {'description': 'textarea[name="description"]'}
    return uiobject
  
  updateModel: ->
    for field in @fieldList.concat ['description']
      value = @ui[field].val()
      @model.set field, value
    # update other fields
    user = MainChannel.request 'main:app:decode-auth-token'
    @model.set('boss_id', user.uid)
    
  onSuccess: (model) ->
    name = model.get 'name'
    MessageChannel.request 'success', "#{name} saved successfully.", "grain"
    navigate_to_url '#sunny'
    
  
export default BaseEditor
