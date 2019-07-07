import _ from 'underscore'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import { make_dbchannel } from 'tbirds/crud/basecrudchannel'
import DbCollection from 'tbirds/dbcollection'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'hourly'

apiRoot = "/api/dev/hourly"

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'

defaultOptions =
  channelName: 'hourly'


workersUrl = "#{apiRoot}/crud/workers"
class Worker extends AuthModel
  urlRoot: workersUrl

class Workers extends AuthCollection
  model: Worker
  url: workersUrl
dbcfg = new DbCollection _.extend defaultOptions,
  modelName: 'worker'
  modelClass: Worker
  collectionClass: Workers

workSessionUrl = "#{apiRoot}/crud/worksessions"
class WorkSession extends AuthModel
  urlRoot: workSessionUrl
  
class WorkSessions extends AuthCollection
  model: WorkSession
  url: workSessionUrl
dbcfg = new DbCollection _.extend defaultOptions,
  modelName: 'worksession'
  modelClass: WorkSession
  collectionClass: WorkSessions
  

class PotentialWorkers extends AuthCollection
  url: "#{apiRoot}/potential-workers"

AppChannel.reply 'get-potential-workers', ->
  return new PotentialWorkers

  





############################################
# calendar date stuff
############################################

currentCalendarDate = undefined

AppChannel.reply 'maincalendar:set-date', () ->
  cal = $ '#maincalendar'
  currentCalendarDate = cal.fullCalendar 'getDate'
  return
  
AppChannel.reply 'maincalendar:get-date', () ->
  return currentCalendarDate

