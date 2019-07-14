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
AppChannel = Backbone.Radio.channel 'company'

class Controller extends MainController
  channelName: 'company'
  layoutClass: ToolbarAppletLayout
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/index-view').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'company-view-index'

  addBoss: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/new-boss').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'company-view-add-boss'
    
  addCompany: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/new-edit-company').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'company-view-add-company'
    

  listCompanies: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      collection = @getChannel().request 'db:company:collection'
      View = require('./views/list-company').default
      view = new View
        collection: collection
      @layout.showChildView 'content', view
      response = collection.fetch()
      response.done ->
        console.log "models fetched", collection
      response.fail ->
        MessageChannel.request 'xhr-error', response
    # name the chunk
    , 'company-view-list-companies'

  viewCompany: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/view-company').default
      model = AppChannel.request 'db:company:get', id
      response = model.fetch()
      response.done =>
        view = new View
          model: model
        @layout.showChildView 'content', view
      response.fail ->
        MessageChannel.request 'xhr-error', response
    # name the chunk
    , 'company-view-list-companies'

    
        

export default Controller

