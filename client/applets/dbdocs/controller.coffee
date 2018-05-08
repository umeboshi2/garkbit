import { MainController } from 'tbirds/controllers'
import ToolbarView from 'tbirds/views/button-toolbar'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
ResourceChannel = Backbone.Radio.channel 'resources'
AppChannel = Backbone.Radio.channel 'dbdocs'

import { ToolbarAppletLayout } from 'tbirds/views/layout'

toolbarEntries = []

toolbarEntryCollection = new Backbone.Collection toolbarEntries
AppChannel.reply 'get-toolbar-entries', ->
  toolbarEntryCollection


class Controller extends MainController
  layoutClass: ToolbarAppletLayout
  setupLayoutIfNeeded: ->
    super()
    toolbar = new ToolbarView
      collection: toolbarEntryCollection
    @layout.showChildView 'toolbar', toolbar

  collection: ResourceChannel.request 'document-collection'
  
  list_pages: () ->
    @setupLayoutIfNeeded()
    console.log "List Pages"
    require.ensure [], () =>
      ListView = require './views/pagelist'
      view = new ListView
        collection: @collection
      response = @collection.fetch()
      response.done =>
        @layout.showChildView 'content', view
      response.fail ->
        MessageChannel.request 'danger', "Failed to load documents."
    # name the chunk
    , 'dbdocs-view-list-pages'

  edit_page: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      { EditPageView } = require './views/editor'
      model = ResourceChannel.request 'get-document', id
      @_loadView EditPageView, model
    # name the chunk
    , 'dbdocs-view-edit-page'
      
  view_page: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      PageView = require './views/pageview'
      model = ResourceChannel.request 'get-document', id
      @_loadView PageView, model
    # name the chunk
    , 'dbdocs-view-doc-page'
      
  new_page: () ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      { NewPageView } = require './views/editor'
      view = new NewPageView
      @layout.showChildView 'content', view
    # name the chunk
    , 'dbdocs-view-new-page'
      
      
export default Controller

