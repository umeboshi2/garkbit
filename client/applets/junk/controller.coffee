import { Model } from 'backbone'
import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'

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
      View = require('./views/emojilist').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'junk-emojilist-view'

  viewDbAdmin: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/idbview').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'junk-view-dbadmin'
    
  uploadView: ->
    @setupLayoutIfNeeded()
    @_viewUpload()
    
  _viewUpload: ->
    require.ensure [], () =>
      UploadView = require('./views/uploadview').default
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
    model = new Model
    model.url = '/stats.json'
    response = model.fetch()
    response.done =>
      view = new StatsView
        model: model
      @layout.showChildView 'content', view
      
export default Controller

