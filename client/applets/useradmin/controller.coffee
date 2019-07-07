import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import ms from 'ms'

import ToolbarView from 'tbirds/views/button-toolbar'
import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'
import navigate_to_url from 'tbirds/util/navigate-to-url'
import scroll_top_fast from 'tbirds/util/scroll-top-fast'

import './dbchannel'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'useradmin'

class Controller extends MainController
  channelName: 'useradmin'
  layoutClass: ToolbarAppletLayout
  editModel: (options) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/common-form').BaseEditFormView
      model = options.model
      view = new View options
      response = model.fetch()
      response.fail ->
        MessageChannel.request 'danger', "failed to get #{options.modelName}"
      response.done =>
        console.log "#{options.modelName} fetched", model
        @layout.showChildView 'content', view
    # name the chunk
    , 'useradmin-view-edit-model'

  addModel: (options) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/common-form').BaseNewFormView
      view = new View options
      @layout.showChildView 'content', view
    # name the chunk
    , 'useradmin-view-add-model'

  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/index-view').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'useradmin-view-index'
  listUsers: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      collection = @getChannel().request 'db:user:collection'
      View = require('./views/common-list').default
      view = new View
        collection: collection
      #@layout.showChildView 'content', view
      response = collection.fetch()
      response.fail ->
        MessageChannel.request 'danger', 'failed to get users'
      response.done =>
        console.log "users fetched", collection
        @layout.showChildView 'content', view
    # name the chunk
    , 'useradmin-view-list-users'
    
  viewUser: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      Model = @getChannel().request 'db:user:modelClass'
      model = new Model id: id
      View = require('./views/user-view').default
      view = new View
        model: model
      response = model.fetch()
      response.fail ->
        MessageChannel.request 'danger', 'failed to get user'
      response.done =>
        @layout.showChildView 'content', view
    # name the chunk
    , 'useradmin-view-view-user'

  editUser: (id) ->
    Model = @getChannel().request 'db:user:modelClass'
    model = new Model id: id
    viewOptions =
      modelName: 'user'
      fieldList: ['username', 'fullname', 'email']
      entryField: 'fullname'
      model: model
    template = MainChannel.request 'crud:template:form', viewOptions
    viewOptions.template = template
    @editModel viewOptions
    
  listGroups: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      collection = @getChannel().request 'db:group:collection'
      View = require('./views/common-list').default
      view = new View
        collection: collection
      #@layout.showChildView 'content', view
      response = collection.fetch()
      response.fail ->
        MessageChannel.request 'danger', 'failed to get groups'
      response.done =>
        console.log "groups fetched", collection
        @layout.showChildView 'content', view
    # name the chunk
    , 'useradmin-view-list-groups'

  editGroup: (id) ->
    Model = @getChannel().request 'db:group:modelClass'
    model = new Model id: id
    viewOptions =
      modelName: 'group'
      fieldList: ['name']
      entryField: 'name'
      model: model
    template = MainChannel.request 'crud:template:form', viewOptions
    viewOptions.template = template
    @editModel viewOptions
    
      
export default Controller

