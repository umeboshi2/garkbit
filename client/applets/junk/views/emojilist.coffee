Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
emoji = require 'node-emoji'
window.emoji = emoji


navigate_to_url = require('tbirds/util/navigate-to-url').default


view_template = tc.renderable (model) ->
  tc.div '.row.listview-list-entry', ->
    tc.h1 "List of Emojis#{emoji.get('tm')}#{emoji.get('atom_symbol')}"
  tc.div '.listview-list-entry', ->
    tc.span '.text-danger.fa.fa-3x', ->
      emoji.get 'heart'
    tc.span '.fa.fa-3x', ->
      emoji.get "coffee"
  tc.div '.row', ->
    Object.keys(emoji.emoji).forEach (key) ->
      tc.div '.listview-list-entry.col-md-3', ->
        tc.span key
        tc.span '.fa.fa-2x.ml-3', emoji.get(key)
      
class MainView extends Marionette.View
  template: view_template
  templateContext:
    appName: 'msleg'
    
module.exports = MainView

