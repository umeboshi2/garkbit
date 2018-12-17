_ = require 'underscore'
Backbone = require 'backbone'
moment = require 'moment'
DbCollection = require('tbirds/dbcollection').default
BasicPageableCollection = require('tbirds/basic-pageable-collection').default
clToken = require 'raw-loader!./.cltoken'

console.log "clToken #{clToken}"
console.log "BasicPageableCollection #{BasicPageableCollection}"


MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'freelaw'

readme = require 'raw-loader!../../../assets/documents/intro.md'

makeAuthHeader = ->
  token = "f95a78c6a691a29bb4d61dcfb0a1d9acb443235d"
  return "Token #{token}"

sendAuthHeader = (xhr) ->
  rheader = 'Authorization'
  #aheader = makeAuthHeader()
  xhr.setRequestHeader rheader, makeAuthHeader()
  return

authSyncOptions = (options) ->
  options = options || {}
  options.beforeSend = sendAuthHeader
  return options

class AuthModel extends Backbone.Model
  sync: (method, model, options) ->
    options = authSyncOptions options
    super method, model, options

class AuthCollection extends BasicPageableCollection
  sync: (method, model, options) ->
    options = authSyncOptions options
    super method, model, options

  

apiroot = "https://www.courtlistener.com/api/rest/v3"

defaultOptions =
  channelName: 'freelaw'

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

