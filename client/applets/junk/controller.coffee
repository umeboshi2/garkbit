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
AppChannel = Backbone.Radio.channel 'junk'

class Controller extends MainController
  channelName: 'junk'
  layoutClass: ToolbarAppletLayout
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/index-view').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'junk-view-index'
      
  viewEmojis: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/emojilist'
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'junk-emojilist-view'

  viewDbAdmin: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/idbview'
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'junk-view-dbadmin'
    
  uploadView: ->
    @setupLayoutIfNeeded()
    @_viewUpload()
    
  _viewUpload: ->
    require.ensure [], () =>
      UploadView = require './views/uploadview'
      view = new UploadView
      @layout.showChildView 'content', view
    # name the chunk
    , 'junk-upload-view'

  themeSwitcher: ->
    @setupLayoutIfNeeded()
    { ThemeSwitchView } = require './views'
    view = new ThemeSwitchView
    @layout.showChildView 'content', view
    console.log "themeSwitcher"

  statsView: ->
    @setupLayoutIfNeeded()
    { StatsView } = require './views'
    model = new Backbone.Model
    model.url = '/stats.json'
    response = model.fetch()
    response.done =>
      view = new StatsView
        model: model
      @layout.showChildView 'content', view
      
export default Controller

