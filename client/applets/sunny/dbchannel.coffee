import Backbone from 'backbone'
import { make_dbchannel } from 'tbirds/crud/basecrudchannel'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'sunny'

apiRoot = "/api/dev/sunny"

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'

url = "#{apiRoot}/client"
class Client extends AuthModel
  urlRoot: url
    
class Clients extends AuthCollection
  model: Client
  url: url



make_dbchannel AppChannel, 'client', Client, Clients
  
url = "#{apiRoot}/yard"
class Yard extends AuthModel
  urlRoot: url

class Yards extends AuthCollection
  model: Yard
  url: url
  
make_dbchannel AppChannel, 'yard', Yard, Yards

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

make_dbchannel AppChannel, 'yardroutine', YardRoutine, YardRoutines
  

url = "#{apiRoot}/yardroutinejob"
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
  

