import _ from 'underscore'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

import BaseEditor from './base-edit-company'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'company'

class NewCompanyView extends BaseEditor
  createModel: ->
    AppChannel.request 'db:company:new'

  saveModel: ->
    collection = AppChannel.request 'db:company:collection'
    collection.add @model
    super arguments
    
export default NewCompanyView
