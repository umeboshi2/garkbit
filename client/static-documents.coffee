import { Model, Radio } from 'backbone'
import { extend } from 'lodash'

MainChannel = Radio.channel 'global'

export class StaticDocument extends Model
  url: ->
    "/assets/documents/#{@id}.md"
  
  fetch: (options) ->
    options = extend options || {},
      dataType: 'text'
    super options

  parse: (response) ->
    return content: response
    
  
MainChannel.reply 'main:app:get-document', (name) ->
  model = new StaticDocument
    id: name
  return model
