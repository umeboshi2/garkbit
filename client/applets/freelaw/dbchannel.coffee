_ = require 'underscore'
Backbone = require 'backbone'
moment = require 'moment'
DbCollection = require('tbirds/dbcollection').default
BasicPageableCollection = require('tbirds/basic-pageable-collection').default
#clToken = require 'raw-loader!../../../.cltoken'
clToken = require 'raw-loader!../../../.lcltoken'

console.log "clToken #{clToken}"


MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'freelaw'

readme = require 'raw-loader!../../../assets/documents/intro.md'

makeAuthHeader = ->
  return "Token #{clToken}"

sendAuthHeader = (xhr) ->
  rheader = 'Authorization'
  #aheader = makeAuthHeader()
  xhr.setRequestHeader rheader, makeAuthHeader()
  return

authSyncOptions = (options) ->
  options = options || {}
  options.beforeSend = sendAuthHeader
  return options

class CLModel extends Backbone.Model
  sync: (method, model, options) ->
    options = authSyncOptions options
    super method, model, options

class BaseCLCollection extends BasicPageableCollection
  state:
    firstPage: 1
    currentPage: 1
    sortColumn: 'id'
    pageSize: 20
  queryParams:
    page: -> @state.currentPage
    format: 'json'
    pageSize: null
  parse: (response) ->
    total = response.count
    @state.totalRecords = total
    @state.totalPages = Math.ceil total / 20
    @state.lastPage = @state.totalPages
    return response.results
    
class CLCollection extends BaseCLCollection
#class CLCollection extends Backbone.Collection
  sync: (method, model, options) ->
    console.log "CLCollection options", options
    options = authSyncOptions options
    console.log "CLCollection options again", options
    if not options.url
      options.url = "#{@urlRoot}/"
    super method, model, options





apiroot = "https://www.courtlistener.com/api/rest/v3"
apiroot = "http://127.0.0.1:9000/api/rest/v3"

defaultOptions =
  channelName: 'freelaw'

opinionRoot = "#{apiroot}/opinions"
class OpinionModel extends CLModel
  urlRoot: opinionRoot

class OpinionCollection extends CLCollection
  urlRoot: opinionRoot
  model: OpinionModel

class SimpleOpinions extends CLModel
  url: opinionRoot


  
dbopinion = new DbCollection _.extend defaultOptions,
  modelName: 'opinion'
  modelClass: OpinionModel
  collectionClass: OpinionCollection
  
AppChannel.reply "db:opinion:list", ->
  return new SimpleOpinions

#console.log "dbsummary", dbsummary
clusterRoot = "#{apiroot}/clusters"
class ClusterModel extends CLModel
  urlRoot: clusterRoot

class ClusterCollection extends CLCollection
  urlRoot: clusterRoot
  model: ClusterModel

class SimpleClusters extends CLModel
  url: clusterRoot


  
dbcluster = new DbCollection _.extend defaultOptions,
  modelName: 'cluster'
  modelClass: ClusterModel
  collectionClass: ClusterCollection
  
