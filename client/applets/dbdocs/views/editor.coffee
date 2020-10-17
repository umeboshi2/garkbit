import { extend } from 'lodash'
import { Radio } from 'backbone'
import tc from 'teacup'

import BootstrapFormView from 'tbirds/views/bsformview'
import make_field_input_ui from 'tbirds/util/make-field-input-ui'
import HasAceEditor from 'tbirds/behaviors/ace'
import {
  make_field_input
  make_field_select } from 'tbirds/templates/forms'

MessageChannel = Radio.channel 'messages'
ResourceChannel = Radio.channel 'resources'

basicFields = ['name', 'title', 'description']

class BasePageEditor extends BootstrapFormView
  editorMode: 'html'
  editorContainer: 'ace-editor'
  fieldList: basicFields
  template: tc.renderable (model) ->
    tc.div '.listview-header', 'Document'
    for field in basicFields
      make_field_input(field)(model)
    make_field_select('doctype', ['html', 'markdown'])(model)
    tc.div '#ace-editor', style:'position:relative;width:100%;height:40em;'
    tc.input '.btn.btn-primary', type:'submit', value:"Submit"
    tc.div '.spinner.fa.fa-spinner.fa-spin'
  ui: ->
    uiobject = make_field_input_ui @fieldList
    extend uiobject,
      editor: '#ace-editor'
      doctype: 'select[name="select_doctype"]'
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
    @model.set 'doctype', @ui.doctype.val()
  onSuccess: ->
    name = @model.get 'name'
    MessageChannel.request 'success', "#{name} saved successfully."
    
export class NewPageView extends BasePageEditor
  createModel: ->
    ResourceChannel.request 'db:document:new'
  saveModel: ->
    docs = ResourceChannel.request 'db:document:collection'
    docs.add @model
    super arguments...

export class EditPageView extends BasePageEditor
  # the model should be assigned in the controller
  createModel: ->
    @model
