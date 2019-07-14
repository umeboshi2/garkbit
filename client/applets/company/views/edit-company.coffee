import _ from 'underscore'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

import BaseEditor from './base-edit-company'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'company'

class EditView extends BaseEditor
  # the model should be assigned in the controller
  createModel: ->
    @model
    
export default EditView

