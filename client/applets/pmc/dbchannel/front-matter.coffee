import _ from 'underscore'
import { Model, Collection, Radio } from 'backbone'
import qs from 'qs'
import X2JS from 'x2js'
import { LoveStore } from 'backbone.lovefield'
import PageableCollection from 'backbone.paginator'

MainChannel = Radio.channel 'global'
AppChannel = Radio.channel 'pmc'

dbConn = MainChannel.request 'main:app:dbConn', 'common'

PMCFrontMatterStore = new LoveStore dbConn, 'PMCFrontMatter'

fmFields = ['id', 'content']

export class FrontMatterModel extends Model
  loveStore: PMCFrontMatterStore
  toJSON: ->
    data = {}
    fmFields.forEach (field) =>
      data[field] = @get field
    return data
  hasOAIcontent: ->
    content = @get('content')
    return _.has content, 'OAI-PMH'
  getPMH: ->
    content = @get('content')
    return content['OAI-PMH']
  getFront: ->
    pmh = @getPMH()
    if pmh?.error
      #throw error:"error in record"
      console.log "ERROR IN", @id
      return {}
    return pmh.GetRecord.record.metadata.article.front
    
    
export class FrontMatterCollection extends Collection
  loveStore: PMCFrontMatterStore
  model: FrontMatterModel

export class FrontMatterPageable extends PageableCollection
  loveStore: PMCFrontMatterStore
  model: FrontMatterModel
  mode: 'client'
  
fmCollection = new FrontMatterCollection

AppChannel.reply 'get-fm-collection', ->
  return fmCollection

AppChannel.reply 'make-fm-pageable', ->
  return new FrontMatterPageable
  


export class RemoteModel extends Model
  url: ->
    oaiIdentifier = (id) ->
      return "oai:pubmedcentral.nih.gov:#{id}"
    data =
      verb: 'GetRecord'
      identifier: oaiIdentifier @id
      metadataPrefix: 'pmc_fm'
    query = qs.stringify data
    url = "https://www.ncbi.nlm.nih.gov/pmc/oai/oai.cgi?#{query}"
    prefix = "https://cors-anywhere.herokuapp.com/"
    return prefix + url
  parse: (data) ->
    x2js = new X2JS()
    parsed = x2js.xml2js data
    parsed = JSON.parse(JSON.stringify(parsed))
    #r = parsed['OAI-PMH'].GetRecord.record.metadata.article.front
    return
      id: @get('id')
      content: parsed
  fetch: (options) ->
    options = _.extend options || {},
      dataType: 'text'
    super options
  hasOAIcontent: ->
    content = @get('content')
    return _.has content, 'OAI-PMH'

AppChannel.reply 'make-remote-model', (id) ->
  return new RemoteModel id:id

AppChannel.reply 'save-fm-content', (id, content) ->
  model = new FrontMatterModel
    id: id
    content: content
  renewed = true
  model.isNew = ->
    if renewed
      renewed = false
      return true
    return false
  fmCollection.add model
  p = model.save()
  return p
