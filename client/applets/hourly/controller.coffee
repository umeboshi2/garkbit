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
AppChannel = Backbone.Radio.channel 'hourly'

import './dbchannel'

class Controller extends MainController
  layoutClass: ToolbarAppletLayout
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/index-view'
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'hourly-view-index'
  viewCalendar: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/calendar-view').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'hourly-view-calendar'

      
export default Controller
