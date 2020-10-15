import { Radio } from 'backbone'
import BootstrapFormView from 'tbirds/views/bsformview'
import navigate_to_url from 'tbirds/util/navigate-to-url'
import make_field_input_ui from 'tbirds/util/make-field-input-ui'

import 'tbirds/regions/bsmodal'

MessageChannel = Radio.channel 'messages'

class BaseFormView extends BootstrapFormView
  ui: ->
    return make_field_input_ui @getOption 'fieldList'
  updateModel: ->
    fieldList = @getOption 'fieldList'
    for field in fieldList
      @model.set field, @ui[field].val()

  getViewUrl: ->
    return @model.itemViewUrl()
    
  onSuccess: ->
    name = @model.get @options.entryField
    msg = "#{name} saved successfully."
    MessageChannel.request 'success', msg
    navigate_to_url @getViewUrl()

export class BaseNewFormView extends BaseFormView
  createModel: ->
    name = @getOption 'modelName'
    # FIXME fix tbirds form view to use Mn.Object
    channel = Radio.channel @getOption 'channelName'
    return channel.request "db:#{name}:new"

  saveModel: ->
    name = @getOption 'modelName'
    # FIXME fix tbirds form view to use Mn.Object
    channel = Radio.channel @getOption 'channelName'
    collection = channel.request "db:#{name}:collection"
    collection.add @model
    super()

  onSuccess: (model) ->
    return model
    
    
export class BaseEditFormView extends BaseFormView
  # the model should be assigned in the controller
  createModel: ->
    @model
    


