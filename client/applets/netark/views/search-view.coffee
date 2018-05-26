Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
marked = require 'marked'

#radioIcon = require 'node-noto-emoji/dist/radio'
scrollIcon = require 'node-noto-emoji/dist/scroll'
clockIcon = require 'node-noto-emoji/dist/mantelpiece_clock'

{ navigate_to_url } = require 'tbirds/util/navigate-to-url'
HasJsonView = require '../../../has-jsonview'

showModels = require '../librivox-books'
    
view_template = tc.renderable (model) ->
  tc.div '.row.listview-list-entry', ->
    tc.raw marked "# #{model.appName} started."

class MainView extends Marionette.View
  template: tc.renderable ->
    tc.div '.listview-header', ->
      tc.img '.mr-3.mb-1', src:scrollIcon, style:"height:2rem;width:2rem"
      tc.text 'Search the Internet Archive'
      tc.img '.ml-3.mb-1', src:clockIcon, style:"height:2rem;width:2rem"
    tc.input '.search-query'
    
module.exports = MainView

