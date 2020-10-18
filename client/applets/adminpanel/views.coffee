import $ from 'jquery'
import { Radio } from 'backbone'
import { View } from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'

MainChannel = Radio.channel 'global'

console.warn "This needs to be updated or removed"


DefaultStaticDocumentTemplate = tc.renderable (doc) ->
  tc.article '.document-view.content', ->
    tc.div '.body', ->
      tc.raw marked doc.content

THEMES = ['vanilla', 'cornsilk', 'BlanchedAlmond', 'DarkSeaGreen',
  'LavenderBlush']
  
export class ThemeSwitchView extends View
  ui:
    stylesheet: '#main-stylesheet'
    theme: '.theme'
  events: ->
    'click @ui.theme': 'switch_theme'
  templateContext: ->
    ui: @ui
  template: tc.renderable ->
    tc.div ->
      THEMES.forEach (theme) ->
        tc.div ".theme.btn.btn-primary", theme
  switch_theme: (event) ->
    target = $(event.target)
    theme = target.html()
    @performSwitch theme
  performSwitch: (theme) ->
    console.log "performSwitch", theme
    MainChannel.request 'main:app:set-theme', theme
    MainChannel.request 'main:app:switch-theme', theme
    
export class FrontDoorMainView extends View
  template: DefaultStaticDocumentTemplate
