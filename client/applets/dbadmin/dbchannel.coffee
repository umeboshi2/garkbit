import _ from 'underscore'
import { Radio } from 'backbone'

MainChannel = Radio.channel 'global'
AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'

modelsRoot = '/api/dev/dbadmin/models'

createModelCollection = (modelType) ->
  url = "#{modelsRoot}/#{modelType}"
  class Model extends AuthModel
    modelType: modelType
    urlRoot: url
  class Collection extends AuthCollection
    model: Model
    url: url
  options =
    modelType: modelType
    modelClass: Model
    collectionClass: Collection
  return options
  
export default createModelCollection
