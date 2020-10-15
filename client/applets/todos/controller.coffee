import { Radio, Collection } from 'backbone'

import ToolbarView from 'tbirds/views/button-toolbar'
import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'

MessageChannel = Radio.channel 'messages'
AppChannel = Radio.channel 'todos'


toolbarEntries = []

toolbarEntryCollection = new Collection toolbarEntries
AppChannel.reply 'get-toolbar-entries', ->
  toolbarEntryCollection

class Controller extends MainController
  layoutClass: ToolbarAppletLayout
  collection: AppChannel.request 'db:todo:collection'
  setupLayoutIfNeeded: ->
    super()
    toolbar = new ToolbarView
      collection: toolbarEntryCollection
    @layout.showChildView 'toolbar', toolbar

  _isModelPresent: (model) ->
    return model.isEmpty() or not model.has 'created_at'
    
  list_certain_todos: (completed) ->
    @setupLayoutIfNeeded()
    # https://jsperf.com/bool-to-int-many
    completed = completed ^ 0
    require.ensure [], () =>
      ListView = require('./views/todolist').default
      view = new ListView
        collection: @collection
      #response = @collection.fetch
      #  data:
      #    where:
      #      completed: completed
      if __DEV__ and DEBUG
        console.log "completed", completed
      response = @collection.fetch()
      response.done =>
        console.log @collection
        @layout.showChildView 'content', view
      response.fail ->
        MessageChannel.request 'danger', "Failed to load todos."
    # name the chunk
    , 'todos-list-todos'

  list_completed_todos: () ->
    @list_certain_todos true

  list_todos: () ->
    @list_certain_todos false

  new_todo: () ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      { NewView } = require './views/editor'
      @layout.showChildView 'content', new NewView
    # name the chunk
    , 'todos-new-todo'

  edit_todo: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      { EditView } = require './views/editor'
      model = AppChannel.request 'db:todo:get', id
      @_loadView EditView, model, 'todo'
    # name the chunk
    , 'todos-edit-todo'
      
  view_todo: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      MainView = require './views/viewtodo'
      model = AppChannel.request 'db:todo:get', id
      response = model.fetch()
      response.done =>
        view = new MainView
          model: model
        @layout.showChildView 'content', view
    # name the chunk
    , 'todos-view-todo'
      
  view_calendar: () ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/todocal'
      @layout.showChildView 'content', new View
    # name the chunk
    , 'todos-view-calendar'
      
export default Controller

