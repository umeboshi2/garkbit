$ = require 'jquery'
Backbone = require 'backbone'
PageableCollection = require 'backbone.paginator'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'netark'

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'


apiroot = "/api/dev/bapi"
url = "#{apiroot}/todos"

urlRoot = "https://archive.org/metadata"


getFileUrl = (name, options) ->
  server = options.server
  dir = options.dir
  prefix = "/api/dev/proxy/"
  #prefix = "https://cors-anywhere.herokuapp.com/"
  target = btoa "https://#{server}#{dir}/#{name}"
  return "#{prefix}#{target}"
  
getImageUrl = (name, options) ->
  server = options.server
  dir = options.dir
  return "//#{server}#{dir}/#{name}"
  

class MetadataModel extends Backbone.Model
  urlRoot: urlRoot
  fileUrl: (name) ->
    return getFileUrl name, @toJSON()

AppChannel.reply 'get-file-url', (name, options) ->
  return getFileUrl name, options

AppChannel.reply 'get-image-url', (name, options) ->
  return getImageUrl name, options
  
AppChannel.reply 'get-metadata-model', ->
  return MetadataModel

class Scraper extends PageableCollection
  mode: 'server'
  url: "/api/dev/proxy/https://archive.org/services/search/v1/scrape"
  parse: (response) ->
    console.log "PARSE", response
    # set @state.totalRecords
    if @state.totalRecords is null
      @state.totalRecords = response.total
      @_checkState @state
    console.log "totalRecords", @state.totalRecords
    super response.items
  state:
    # FIXME we cannot do less than 100 with archive.org
    pageSize: 100
  queryParams:
    pageSize: 'count'

AppChannel.reply 'Scraper', ->
  return Scraper
  
class SearchResults extends PageableCollection
  mode: 'server'
  url: "/api/dev/proxy/https://archive.org/advancedsearch.php"
  parse: (response) ->
    console.log "PARSE", response
    # set @state.totalRecords
    if @state.totalRecords is null
      @state.totalRecords = response.response.numFound
      @_checkState @state
    console.log "totalRecords", @state.totalRecords
    #@setPageSize @state.pageSize
    
    super response.response.docs
    
  state:
    pageSize: 20
    firstPage: 1
  queryParams:
    pageSize: 'rows'
    output: 'json'
    q: -> @query
    
AppChannel.reply 'SearchResults', ->
  return SearchResults
  
    
module.exports =
  TodoCollection: MetadataModel
