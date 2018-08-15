_ = require 'underscore'
Backbone = require 'backbone'
moment = require 'moment'
DbCollection = require('tbirds/dbcollection').default

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'muppy'

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'

apiroot = '/api/dev/memleak'

defaultOptions =
  channelName: 'muppy'

summaryRoot = "#{apiroot}/summary"
class ObjectSummary extends AuthModel
  urlRoot: summaryRoot

class ObjectSummaryCollection extends AuthCollection
  url: summaryRoot
  model: ObjectSummary

dbsummary = new DbCollection _.extend defaultOptions,
  modelName: 'summary'
  modelClass: ObjectSummary
  collectionClass: ObjectSummaryCollection

