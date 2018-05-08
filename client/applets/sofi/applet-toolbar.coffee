$ = require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
ms = require 'ms'

{ MainController } = require 'tbirds/controllers'
# FIXME
ToolbarView = require('tbirds/views/button-toolbar').default
ShowInitialEmptyContent = require 'tbirds/behaviors/show-initial-empty'
SlideDownRegion = require 'tbirds/regions/slidedown'

navigate_to_url = require 'tbirds/util/navigate-to-url'
scroll_top_fast = require 'tbirds/util/scroll-top-fast'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
ResourceChannel = Backbone.Radio.channel 'resources'
AppChannel = Backbone.Radio.channel 'sofi'

toolbarEntries = []

toolbarEntryCollection = new Backbone.Collection toolbarEntries
AppChannel.reply 'get-toolbar-entries', ->
  toolbarEntryCollection

button_style = "overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"

class SofiToolbar extends ToolbarView
  options:
    entryTemplate: tc.renderable (model) ->
      opts =
        style: button_style
      tc.span opts, ->
        tc.i model.icon
        tc.text " "
        tc.text model.label

module.exports = SofiToolbar

