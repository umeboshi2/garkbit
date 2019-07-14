import Backbone from 'backbone'
import { LoveStore } from 'backbone.lovefield'
import PageableCollection from 'backbone.paginator'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'msleg'

dbConn = MainChannel.request 'main:app:dbConn', 'msleg'

XmlObjectStore = new LoveStore dbConn, 'XMLObject'

xmlFields = [ 'url', 'content']

class LocalXmlObject extends Backbone.Model
  loveStore: XmlObjectStore
  idAttribute: 'url'
  toJSON: ->
    data = {}
    xmlFields.forEach (field) =>
      data[field] = @get field
    return data
    

class LocalXmlObjectCollection extends PageableCollection
  loveStore: XmlObjectStore
  mode: 'client'

class AllXmlCollection extends Backbone.Collection
  loveStore: XmlObjectStore
  model: LocalXmlObject
  

all_xmlObjects = new AllXmlCollection
local_xmlObjects = new LocalXmlObjectCollection
AppChannel.reply 'get-all-local-xmlobjects', ->
  return all_xmlObjects
AppChannel.reply 'get-local-xmlobjects', ->
  return local_xmlObjects
AppChannel.reply 'get-local-xmlobject-model', ->
  return LocalXmlObject
AppChannel.reply 'get-local-xmlobject-collection', ->
  return LocalXmlObjectCollection



AppChannel.reply 'save-local-xmlObject', (data) ->
  model = new LocalXmlObject
    url: data.url
    content: data
  renewed = true
  model.isNew = ->
    if renewed
      renewed = false
      return true
    return false
  local_shows.add model
  p = model.save()
  return p


