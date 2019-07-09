import _ from 'underscore'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import DbCollection from 'tbirds/dbcollection'

$ = require 'jquery'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'todos'
TodoChannel = AppChannel

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'


apiroot = "/api/dev/bapi"
url = "#{apiroot}/todos"

defaultOptions =
  channelName: 'todos'

class Todo extends AuthModel
  urlRoot: url
  defaults:
    completed: false
    

class TodoCollection extends AuthCollection
  url: url
  model: Todo

dbcfg = new DbCollection _.extend defaultOptions,
  modelName: 'todo'
  modelClass: Todo
  collectionClass: TodoCollection

class TodoCalendar extends AuthCollection
  url: "/api/dev/basic/todos/create-cal"
  model: Todo

todo_cal = new TodoCalendar
AppChannel.reply 'todocal-collection', ->
  return todo_cal


current_calendar_date = undefined
AppChannel.reply 'maincalendar:set-date', () ->
  cal = $ '#maincalendar'
  current_calendar_date = cal.fullCalendar 'getDate'
  return

AppChannel.reply 'maincalendar:get-date', () ->
  return current_calendar_date
  
