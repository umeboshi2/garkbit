import Backbone from 'backbone'
import { make_dbchannel } from 'tbirds/crud/basecrudchannel'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'hourly'

apiRoot = "/api/dev/hourly"

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'


url = "#{apiRoot}/crud/workers"
class Worker extends AuthModel
  urlRoot: url

class Workers extends AuthCollection
  model: Worker
  url: url

make_dbchannel AppChannel, 'worker', Worker, Workers


url = "#{apiRoot}/crud/worksessions"
class WorkSession extends AuthModel
  urlRoot: url
  
class WorkSessions extends AuthCollection
  model: WorkSession
  url: url

make_dbchannel AppChannel, 'worksession', WorkSession, WorkSession

url = "#{apiRoot}/crud/statuses"
class WorkStatus extends AuthModel
  urlRoot: url
  idAttribute: 'worker_id'
  
class StatusCollection extends AuthCollection
  model: WorkStatus
  url: url
  
make_dbchannel AppChannel, 'status', WorkStatus, StatusCollection

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

