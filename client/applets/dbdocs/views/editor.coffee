import _ from 'underscore'
import Backbone from 'backbone'
import tc from 'teacup'

import BootstrapFormView from 'tbirds/views/bsformview'

import make_field_input_ui from 'tbirds/util/make-field-input-ui'
import navigate_to_url from 'tbirds/util/navigate-to-url'
import HasAceEditor from 'tbirds/behaviors/ace'

import {
  make_field_input
  make_field_select } from 'tbirds/templates/forms'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
ResourceChannel = Backbone.Radio.channel 'resources'

basicFields = ['name', 'title', 'description']

EditForm = tc.renderable (model) ->
  tc.div '.listview-header', 'Document'
  for field in basicFields
    make_field_input(field)(model)
  make_field_select(field, ['html', 'markdown'])(model)
  tc.div '#ace-editor', style:'position:relative;width:100%;height:40em;'
  tc.input '.btn.btn-default', type:'submit', value:"Submit"
  tc.div '.spinner.fa.fa-spinner.fa-spin'
  

class BasePageEditor extends BootstrapFormView
  editorMode: 'html'
  editorContainer: 'ace-editor'
  fieldList: basicFields
  template: EditForm
  ui: ->
    uiobject = make_field_input_ui @fieldList
    _.extend uiobject, {'editor': '#ace-editor'}
    return uiobject
  
  behaviors:
    HasAceEditor:
      behaviorClass: HasAceEditor
      
  afterDomRefresh: () ->
    if @model.has 'content'
      content = @model.get 'content'
      @editor.setValue content

  updateModel: ->
    for field in @fieldList
      @model.set field, @ui[field].val()
    # update from ace-editor
    @model.set 'content', @editor.getValue()

  onSuccess: (model) ->
    name = @model.get 'name'
    MessageChannel.request 'success', "#{name} saved successfully."
    
    
class NewPageView extends BasePageEditor
  createModel: ->
    ResourceChannel.request 'db:document:new'
    
  saveModel: ->
    docs = ResourceChannel.request 'db:document:collection'
    docs.add @model
    super arguments...

class EditPageView extends BasePageEditor
  # the model should be assigned in the controller
  createModel: ->
    @model
    
export {
  NewPageView
  EditPageView
  }

