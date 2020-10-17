import { extend } from 'lodash'
import { Radio } from 'backbone'
import DbCollection from 'tbirds/dbcollection'

MainChannel = Radio.channel 'global'

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

export documents = new DbCollection extend defaultOptions,
  modelName: 'document'
  modelClass: Document
  collectionClass: DocumentCollection
