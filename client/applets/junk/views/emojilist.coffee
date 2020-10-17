import { View } from 'backbone.marionette'
import tc from 'teacup'
import emoji from 'node-emoji'

if __DEV__
  window.emoji = emoji

view_template = tc.renderable ->
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
      
class MainView extends View
  template: view_template
  templateContext:
    appName: 'msleg'
    
export default MainView

