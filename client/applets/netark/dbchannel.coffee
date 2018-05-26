$ = require 'jquery'
Backbone = require 'backbone'

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
  return "/api/dev/proxy/https://#{server}#{dir}/#{name}"
  
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
    
AppChannel.reply 'get-metadata-model', ->
  return MetadataModel
  
module.exports =
  TodoCollection: MetadataModel
