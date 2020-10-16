import { extend } from 'lodash'
import { Radio } from 'backbone'
import tc from 'teacup'

import BootstrapFormView from 'tbirds/views/bsformview'
import make_field_input_ui from 'tbirds/util/make-field-input-ui'
import {
  make_field_input
  make_field_textarea } from 'tbirds/templates/forms'

AppChannel = Radio.channel 'sunny'

YardForm = tc.renderable (model) ->
  make_field_input('name')(model)
  for field in ['description', 'jobdetails']
    make_field_textarea(field)(model)
  tc.input '.btn.btn-primary', type:'submit', value:"Submit"
  tc.div '.spinner.fa.fa-spinner.fa-spin'
  
class BaseYardEditor extends BootstrapFormView
  #fieldList: ['name', 'sunnyclient_id']
  fieldList: ['name']
  ui: ->
    uiobject = make_field_input_ui @fieldList
    textareas =
      description: 'textarea[name="description"]'
      jobdetails: 'textarea[name="jobdetails"]'
    extend uiobject, textareas
    return uiobject
    
  updateModel: ->
    for field in @fieldList.concat ['description', 'jobdetails']
      @model.set field, @ui[field].val()
    # update other fields
    #console.log "model sunnyclient_id", @model.get 'sunnyclient_id'


class NewYardView extends BaseYardEditor
  template: YardForm
  # the model should be assigned in the controller
  createModel: ->
    @model
    
  saveModel: ->
    #callbacks =
    #  success: => @trigger 'save:form:success', @model
    #  error: => @trigger 'save:form:failure', @model
    yards = AppChannel.request 'yard-collection'
    yards.add @model
    super arguments
    
    
class EditYardView extends BaseYardEditor
  template: YardForm

  # the model should be assigned in the controller
  createModel: ->
    @model
    
export { NewYardView, EditYardView }

