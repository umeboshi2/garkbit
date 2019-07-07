import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

import BootstrapFormView from 'tbirds/views/bsformview'
import navigate_to_url from 'tbirds/util/navigate-to-url'
import make_field_input_ui from 'tbirds/util/make-field-input-ui'
import { form_group_input_div, make_field_input } from 'tbirds/templates/forms'
import { modal_close_button } from 'tbirds/templates/buttons'

import 'tbirds/regions/bsmodal'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'

formInputsFactory = (opts) ->
  tc.renderable (model) ->
    tc.div '.listview-header', model[opts.entryField]
    for field in opts.fieldList
      make_field_input(field)(model)
    tc.input '.btn.btn-default', type:'submit', value:'Submit'
    tc.div '.spinner.fa.fa-spinner.fa-spin'
    
class BaseFormView extends BootstrapFormView
  ui: ->
    return make_field_input_ui @getOption 'fieldList'
  updateModel: ->
    fieldList = @getOption 'fieldList'
    for field in fieldList
      @model.set field, @ui[field].val()

  getViewUrl: ->
    return @model.itemViewUrl()
    
  onSuccess: (model) ->
    name = @model.get @options.entryField
    msg = "#{name} saved successfully."
    MessageChannel.request 'success', msg
    navigate_to_url @getViewUrl()

class BaseNewFormView extends BaseFormView
  createModel: ->
    name = @getOption 'modelName'
    # FIXME fix tbirds form view to use Mn.Object
    channel = Backbone.Radio.channel @getOption 'channelName'
    return channel.request "db:#{name}:new"

  saveModel: ->
    name = @getOption 'modelName'
    # FIXME fix tbirds form view to use Mn.Object
    channel = Backbone.Radio.channel @getOption 'channelName'
    collection = channel.request "db:#{name}:collection"
    collection.add @model
    super()

  onSuccess: (model) ->
    return model
    
    
class BaseEditFormView extends BaseFormView
  # the model should be assigned in the controller
  createModel: ->
    @model
    



export {
  BaseNewFormView
  BaseEditFormView
  }
  
