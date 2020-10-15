import { Radio, Model, Collection } from 'backbone'
import { MnObject } from 'backbone.marionette'
import { LoveStore } from 'backbone.lovefield'

MainChannel = Radio.channel 'global'
AppChannel = Radio.channel 'tvmaze'

dbConn = MainChannel.request 'main:app:dbConn', 'tvmaze'

class BaseModel extends Model
  toJSON: ->
    data = {}
    fields = @getOption 'fields'
    fields.forEach (field) =>
      data[field] = @get field
    return data
    
class DbInterface extends MnObject
  channelName: 'tvmaze'
  # FIXME use _.once
  loveStore: ->
    executed = false
    if not executed
      executed = true
      tableName = @getOption 'tableName'
      if not tableName
        throw new Error "need a table name"
      return new LoveStore dbConn, tableName
    return
  initialize: ->
    
  newModel: (options) ->
    options = options or {}
    options.loveStore = options.loveStore or @loveStore
    return new BaseModel options

if __DEV__ and DEBUG
  console.log "DbInterface", DbInterface
  

TvShowStore = new LoveStore dbConn, 'TVMazeShow'

showFields = [ 'id', 'name', 'url', 'self', 'premiered',
  'runtime', 'network_name', 'imdb', 'status', 'summary',
  'img_med', 'img_orig', 'content'
  ]
class LocalTvShow extends Model
  loveStore: TvShowStore
  toJSON: ->
    data = {}
    showFields.forEach (field) =>
      data[field] = @get field
    return data
    
class LocalTvShowCollection extends Collection
  loveStore: TvShowStore
  model: LocalTvShow

local_shows = new LocalTvShowCollection
AppChannel.reply 'get-local-tvshows', ->
  return local_shows
AppChannel.reply 'get-local-tvshow-model', ->
  return LocalTvShow
AppChannel.reply 'get-local-tvshow-collection', ->
  return LocalTvShowCollection

AppChannel.reply 'save-local-show', (data) ->
  model = new LocalTvShow
    id: data.id
    name: data.name
    url: data.url
    self: data._links.self.href
    premiered: new Date data.premiered
    runtime: data.runtime
    network_name: data?.network?.name or 'NO NETWORK'
    imdb: data.externals.imdb
    status: data.status
    summary: data.summary
    img_med: data.image?.medium
    img_orig: data.image?.original
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


