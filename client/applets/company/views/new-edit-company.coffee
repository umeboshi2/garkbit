import { Radio } from 'backbone'
import BaseEditor from './base-edit-company'

AppChannel = Radio.channel 'company'

class NewCompanyView extends BaseEditor
  createModel: ->
    AppChannel.request 'db:company:new'
  saveModel: ->
    collection = AppChannel.request 'db:company:collection'
    collection.add @model
    super arguments
    
export default NewCompanyView
