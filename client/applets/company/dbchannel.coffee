import _ from 'underscore'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import DbCollection from 'tbirds/dbcollection'
import Validation from 'backbone.validation'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'company'

apiRoot = "/api/dev/company"

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'

dbcfg = {}
defaultOptions =
  channelName: 'company'

bossUrl = "#{apiRoot}/boss"
class Boss extends AuthModel
  urlRoot: bossUrl
  validation:
    name:
      minLength: 2
      required: true

      
class BossCollection extends AuthCollection
  model: Boss
  url: bossUrl
dbcfg.boss = new DbCollection _.extend defaultOptions,
  modelName: 'boss'
  modelClass: Boss
  collectionClass: BossCollection
  

  
companyUrl = "#{apiRoot}/company"
class Company extends AuthModel
  urlRoot: companyUrl
  validation:
    name:
      required: true
class CompanyCollection extends AuthCollection
  model: Company
  url: companyUrl
dbcfg.company = new DbCollection _.extend defaultOptions,
  modelName: 'company'
  modelClass: Company
  collectionClass: CompanyCollection

workerUrl = "#{apiRoot}/worker"
class Worker extends AuthModel
  urlRoot: workerUrl

class WorkerCollection extends AuthCollection
  model: Worker
  url: workerUrl
dbcfg = new DbCollection _.extend defaultOptions,
  modelName: 'worker'
  modelClass: Worker
  collectionClass: WorkerCollection

workSessionUrl = "#{apiRoot}/worksession"
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
  url: "#{apiRoot}/potential-workers"

AppChannel.reply 'get-potential-workers', ->
  return new PotentialWorkers

class TimeClock extends AuthModel
  urlRoot: "/api/dev/company/time-clock"

AppChannel.reply 'TimeClock', ->
  return TimeClock
  
