import path from 'path'
import $ from 'jquery'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'

import HasJsonView from '../../has-jsonview'


MainChannel = Backbone.Radio.channel 'global'

class Renderer extends marked.Renderer
  link: (href, title, text) ->
    if href.startsWith '#'
      return super href, title, text
    dirname = path.dirname location.hash
    if dirname is '.'
      dirname = '#frontdoor/view'
    unless href.startsWith 'http'
      href = path.join dirname, href
    return super href, title, text

renderer = new Renderer
DefaultStaticDocumentTemplate = tc.renderable (doc) ->
  tc.article '.document-view.content', ->
    tc.div '.body', ->
      tc.raw marked doc.content, renderer:renderer

THEMES = ['vanilla', 'cornsilk', 'BlanchedAlmond', 'DarkSeaGreen',
  'LavenderBlush']

class ThemeSwitchView extends Backbone.Marionette.View
  ui:
    stylesheet: '#main-stylesheet'
    theme: '.theme'
  events: ->
    'click @ui.theme': 'switch_theme'
  templateContext: ->
    ui: @ui
  template: tc.renderable (model) ->
    tc.div ->
      THEMES.forEach (theme) ->
        tc.div ".theme.btn.btn-default", theme
  switch_theme: (event) ->
    target = $(event.target)
    theme = target.html()
    @performSwitch theme
  performSwitch: (theme) ->
    console.log "performSwitch", theme
    MainChannel.request 'main:app:set-theme', theme
    MainChannel.request 'main:app:switch-theme', theme
    
class FrontDoorMainView extends Backbone.Marionette.View
  template: DefaultStaticDocumentTemplate

class StatsView extends Backbone.Marionette.View
  template: tc.renderable (model) ->
    tc.div '.jsonview.listview-list-entry', style:'overflow:auto'
  behaviors:
    HasJsonView:
      behaviorClass: HasJsonView
      
  
export {
  FrontDoorMainView
  ThemeSwitchView
  StatsView
  }
