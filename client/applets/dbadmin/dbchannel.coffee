import _ from 'underscore'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'

import DbCollection from 'tbirds/dbcollection'


MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'dbadmin'

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'


defaultOptions =
  channelName: 'dbadmin'

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
