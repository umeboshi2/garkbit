_ = require 'underscore'
Backbone = require 'backbone'
moment = require 'moment'
DbCollection = require 'tbirds/dbcollection'
{ LocalStorage } = require 'backbone.localstorage'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'useradmin'
window.AppChannel = AppChannel

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'


apiroot = "/api/admin/jsonapi"

defaultOptions =
  channelName: 'useradmin'

class ModelFactory
  constructor: ->
    @registeredModels = {}

  registerModel: (model) ->
    @registeredModels[model.prototype.defaults.type] = model

  getSimplifiedRelations: (relationships) ->
    if relationships
      simplifiedRelations = _.mapObject relationships, (value) ->
        return value.data
      meta = _.mapObject relationships, (value) ->
        return value.meta
      return {models: simplifiedRelations, meta: meta}
    else
      return {}

  findOrCreate: (data, options, type) ->
    attributes = if data.attributes then data.attributes else data
    attributes.id = data.id
    relationships = @getSimplifiedRelations data.relationships
    _.extend(attributes, relations.models)

    options = _.extend {parse: true}, options
    if @registeredModels[type]
      model = @registeredModels[type].findOrCreate attributes, options
      if model
        _.each relations.meta, (meta, key) =>
          if model.get(key) && model.get(key).handleMeta
            model.get(key).handleMeta(meta)
        return model

  createFromArray: (items, options, type) ->
    _.each(items, (item) ->
      type = item.type || type
      @findOrCreate item, options, type
    , @)

Backbone.Relational.modelFactory = new ModelFactory
console.log 'Backbone.Relational', Backbone.Relational

Backbone.Relational.Collection.prototype.parse = (response, options) ->
  type = @model.prototype.defaults.type
  if not response
    return
  if response.included
    Backbone.Relational.modelFactory.createFromArray response.included, options, type

  if response.meta && @handleMeta
    @handleMeta response.meta

  if not response.meta
    return response

  Backbone.Relational.modelFactory.createFromArray response.data, options, type
  return response.data

Backbone.Relational.Model.prototype.parse = (response, options) ->
  if not response
    return
  if response.included
    Backbone.Relational.modelFactory.createFromArray response.included, options
  if response.data
    response = response.data
  if response.meta && @handleMeta
    @handleMeta response.meta
  data = if not response.attributes and not response.type then response else response.attributes or {}
  data.id = response.id
  rels = Backbone.Relational.modelFactory.getSimplifiedRelations response.relationships
  _.extend data, rels.models
  return data
  
module.exports = {}
