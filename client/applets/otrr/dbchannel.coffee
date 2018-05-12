$ = require 'jquery'
Backbone = require 'backbone'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'otrr'

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'


apiroot = "/api/dev/bapi"
url = "#{apiroot}/todos"

urlRoot = "https://archive.org/metadata"

class MetadataModel extends Backbone.Model
  urlRoot: urlRoot
  fileUrl: (name) ->
    files = @get 'files'
    server = @get 'server'
    dir = @get 'dir'
    #url = "https://cors-anywhere.herokuapp.com/https://#{server}#{dir}/#{name}"
    url = "/api/dev/proxy/https://#{server}#{dir}/#{name}"
    return url
    
AppChannel.reply 'get-metadata-model', ->
  return MetadataModel
  
module.exports =
  TodoCollection: MetadataModel
