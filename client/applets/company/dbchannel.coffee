import _ from 'underscore'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import DbCollection from 'tbirds/dbcollection'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'company'

apiRoot = "/api/dev/company"

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'

defaultOptions =
  channelName: 'company'

bossUrl = "#{apiRoot}/crud/boss"
class Boss extends AuthModel
  urlRoot: bossUrl
class BossCollection extends AuthCollection
  model: Boss
  url: bossUrl
dbcfg.boss = new DbCollection _.extend defaultOptions,
  modelName: 'boss'
  modelClass: Boss
  collectionClass: BossCollection
  

  
companyUrl = "#{apiRoot}/crud/company"
class Company extends AuthModel
  urlRoot: companyUrl
class CompanyCollection extends AuthCollection
  model: Company
  url: companyUrl
dbcfg.company = new DbCollection _.extend defaultOptions,
  modelName: 'company'
  modelClass: Company
  collectionClass: CompanyCollection

workerUrl = "#{apiRoot}/crud/worker"
class Worker extends AuthModel
  urlRoot: workersUrl

class WorkerCollection extends AuthCollection
  model: Worker
  url: workersUrl
dbcfg = new DbCollection _.extend defaultOptions,
  modelName: 'worker'
  modelClass: Worker
  collectionClass: WorkerCollection

workSessionUrl = "#{apiRoot}/crud/worksession"
class WorkSession extends AuthModel
  urlRoot: workSessionUrl
  
class WorkSessionCollection extends AuthCollection
  model: WorkSession
  url: workSessionUrl
dbcfg = new DbCollection _.extend defaultOptions,
  modelName: 'worksession'
  modelClass: WorkSession
  collectionClass: WorkSessionCollection

class PotentialWorkers extends AuthCollection
  url: "#{apiRoot}/potential-worker"

AppChannel.reply 'get-potential-workers', ->
  return new PotentialWorkers

  

