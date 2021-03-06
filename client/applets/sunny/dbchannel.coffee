import { extend } from 'lodash'
import { Radio } from 'backbone'
import DbCollection from 'tbirds/dbcollection'

MainChannel = Radio.channel 'global'
AppChannel = Radio.channel 'sunny'

apiRoot = "/api/dev/sunny/crud"

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'

dbcfg = {}
defaultOptions =
  channelName: 'sunny'
  
url = "#{apiRoot}/client"
class Client extends AuthModel
  urlRoot: url
    
class Clients extends AuthCollection
  model: Client
  url: url
dbcfg.client = new DbCollection extend defaultOptions,
  modelName: 'client'
  modelClass: Client
  collectionClass: Clients


url = "#{apiRoot}/yard"
class Yard extends AuthModel
  urlRoot: url

class Yards extends AuthCollection
  model: Yard
  url: url
dbcfg.yard = new DbCollection extend defaultOptions,
  modelName: 'yard'
  modelClass: Yard
  collectionClass: Yards

url = "#{apiRoot}/yardroutine"
class YardRoutine extends AuthModel
  urlRoot: url
  defaults: ->
    frequency: 14
    leeway: 3
    rate: 50
    active: true
    routine_date: new Date()
      

class YardRoutines extends AuthCollection
  model: YardRoutine
  url: url
dbcfg.yardroutine = new DbCollection extend defaultOptions,
  modelName: 'yardroutine'
  modelClass: YardRoutine
  collectionClass: YardRoutines

url = "#{apiRoot}/yardroutinejob"
class YardRoutineJob extends AuthModel
  urlRoot: url

class YardRoutineJobs extends AuthCollection
  model: YardRoutineJob
  url: url
dbcfg.yardroutinejob = new DbCollection extend defaultOptions,
  modelName: 'yardroutinejob'
  modelClass: YardRoutineJob
  collectionClass: YardRoutineJobs


url = '/api/dev/sunny/gpslocations'
class GeoLocation extends AuthModel
  urlRoot: url

class GeoLocationCollection extends AuthCollection
  model: GeoLocation
  url: url
dbcfg.location = new DbCollection extend defaultOptions,
  modelName: 'location'
  modelClass: GeoLocation
  collectionClass: GeoLocationCollection



url = '/api/dev/sunny/yardsession'
class YardSession extends AuthModel
  urlRoot: url

class YardSessionCollection extends AuthCollection
  model: YardSession
  url: url
dbcfg.yardsession = new DbCollection extend defaultOptions,
  modelName: 'yardsession'
  modelClass: YardSession
  collectionClass: YardSessionCollection
  

class YardSessionClock extends AuthModel
  urlRoot: "/api/dev/sunny/yard-clock"

AppChannel.reply 'YardSessionClock', ->
  return YardSessionClock

export default dbcfg
