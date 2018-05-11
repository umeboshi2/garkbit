import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import ms from 'ms'

import ToolbarView from 'tbirds/views/button-toolbar'
import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'
import navigate_to_url from 'tbirds/util/navigate-to-url'
import scroll_top_fast from 'tbirds/util/scroll-top-fast'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
ResourceChannel = Backbone.Radio.channel 'resources'
AppChannel = Backbone.Radio.channel 'otrr'

class Controller extends MainController
  layoutClass: ToolbarAppletLayout
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/index-view'
      view = new View
      @layout.showChildView 'content', view
      @scrollTop()
    # name the chunk
    , 'otrr-view-index'
      
  viewMetadata: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/view-metadata'
      Model = AppChannel.request 'get-metadata-model'
      model = new Model
        id: id
      response = model.fetch()
      response.done =>
        view = new View
          model: model
        @layout.showChildView 'content', view
        @scrollTop()
    # name the chunk
    , 'otrr-view-metadata'
      
export default Controller
