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


mksum_form = tc.renderable () ->
  now = new(Date)
  form_group_input_div
    input_id: 'input_name'
    label: 'Summary Name'
    input_attributes:
      name: 'name'
      placeholder: 'summary'
      value: "#{now.toDateString()}-#{now.toTimeString().split(' ')[0]}"
  tc.input '.btn.btn-default', type:'submit', value:'Save'
  tc.div '.spinner.fa.fa-spinner.fa-spin'

class MakeSummaryView extends BootstrapFormView
  template: mksum_form
  fieldList: ['name']
  ui: ->
    uiobject = make_field_input_ui @fieldList
    uiobject.submit = 'input[type="submit"]'
    return uiobject
    
  createModel: ->
    @model
    
  updateModel: ->
    console.log "model", @model
    name = @ui.name.val()
    @model.set 'name', name
    
      
  onSuccess: (model) ->
    MessageChannel.request 'success', "saved summary"
    
  onFailure: (model) ->
    @ui.submit.hide()

export default MakeSummaryView

