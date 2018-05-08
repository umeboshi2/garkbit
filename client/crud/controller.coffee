import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import ms from 'ms'

import { ExtraController } from 'tbirds/controllers'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'

defaultColumns = ['id', 'name']

# @mainController should be set in initialize
class CrudController extends ExtraController
  defaultColumns: ['id', 'name']
  channelName: 'global'
  viewOptions:
    fieldList: ['name']
    entryField: 'name'
    modelName: 'model'
    label: 'Model'
  setupLayoutIfNeeded: ->
    @mainController.setupLayoutIfNeeded()
  showChildView: (region, view) ->
    @mainController.layout.showChildView region, view
    
  listItems: (ViewClass) ->
    @setupLayoutIfNeeded()
    collection = @getChannel().request "db:#{@viewOptions.modelName}:collection"
    response = collection.fetch
      data:
        columns: @defaultColumns
    response.done =>
      options = _.extend collection:collection, @viewOptions
      view = new ViewClass options
      @showChildView 'content', view
      @scrollTop()
    response.fail =>
      MessageChannel.request 'danger', "Failed to get #{@viewOptions.label}s!"

  viewItem: (ViewClass, id) ->
    @setupLayoutIfNeeded()
    model = @getChannel().request "db:#{@viewOptions.modelName}:get", id
    response = model.fetch()
    response.done =>
      view = new ViewClass
        model: model
      @showChildView 'content', view
      @scrollTop()
    response.fail =>
      MessageChannel.request 'danger', "Failed to get #{@viewOptions.label}!"

  _formViewOptions: (options) ->
    options = options || {}
    options = _.extend options, @viewOptions
    options.template = MainChannel.request 'crud:template:form', options
    # FIXME fix tbirds form view to use Mn.Object
    options.channelName = @getOption 'channelName'
    return options
    
  addItem: (ViewClass) ->
    @setupLayoutIfNeeded()
    options = @_formViewOptions()
    view = new ViewClass options
    @showChildView 'content', view
    @scrollTop()

  editItem: (ViewClass, id, options) ->
    @setupLayoutIfNeeded()
    options = @_formViewOptions options
    model = @getChannel().request "db:#{@viewOptions.modelName}:get", id
    options.model = model
    response = model.fetch()
    response.done =>
      view = new ViewClass options
      @showChildView 'content', view
      @scrollTop()
    response.fail =>
      MessageChannel.request 'danger', "Failed to get #{@viewOptions.label}!"

MainChannel.reply 'main:app:CrudController', ->
  console.warn "use crud:Controller instead"
  CrudController

MainChannel.reply 'crud:Controller', ->
  CrudController
  
export default CrudController


