import Backbone from 'backbone'
import { make_dbchannel } from 'tbirds/crud/basecrudchannel'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'sunny'

apipath = "/api/dev/sitedocuments"

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'

url = '/api/dev/basic/sunnyclients'
class Client extends AuthModel
  urlRoot: url
    
class Clients extends AuthCollection
  model: Client
  url: url



make_dbchannel AppChannel, 'client', Client, Clients
  
url = '/api/dev/basic/yards'
class Yard extends AuthModel
  urlRoot: url

class Yards extends AuthCollection
  model: Yard
  url: url
  
make_dbchannel AppChannel, 'yard', Yard, Yards

url = '/api/dev/basic/yardroutines'
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

make_dbchannel AppChannel, 'yardroutine', YardRoutine, YardRoutines
  

url = '/api/dev/basic/yardroutinejobs'
class YardRoutineJob extends AuthModel
  urlRoot: url

class YardRoutineJobs extends AuthCollection
  model: YardRoutineJob
  url: url

make_dbchannel AppChannel, 'yardroutinejob', YardRoutineJob, YardRoutineJobs


module.exports =
  Clients: Clients
  Yards: Yards
  YardRoutines: YardRoutines
  YardRoutineJobs: YardRoutineJobs
  

