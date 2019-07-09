import _ from 'underscore'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import DbCollection from 'tbirds/dbcollection'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'

apiRoot = "/api/dev/sitedocuments"

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'

defaultOptions =
  channelName: 'resources'

class Document extends AuthModel
  urlRoot: apiRoot
  
class DocumentCollection extends AuthCollection
  url: apiRoot
  model: Document
dbcfg = new DbCollection _.extend defaultOptions,
  modelName: 'document'
  modelClass: Document
  collectionClass: DocumentCollection
