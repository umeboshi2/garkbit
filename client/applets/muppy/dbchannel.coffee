import { extend } from 'lodash'
import { Radio } from 'backbone'
import DbCollection from 'tbirds/dbcollection'

MainChannel = Radio.channel 'global'

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

export dbsummary = new DbCollection extend defaultOptions,
  modelName: 'summary'
  modelClass: ObjectSummary
  collectionClass: ObjectSummaryCollection

diffRoot = "/api/dev/memdiff"
class SummaryDiff extends AuthModel
  urlRoot: diffRoot

class SummaryCollection extends AuthCollection
  model: SummaryDiff
  url: diffRoot


export sumdiff = new DbCollection extend defaultOptions,
  modelName: 'sumdiff'
  modelClass: SummaryDiff
  collectionClass: SummaryCollection
  
  
