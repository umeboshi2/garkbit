import $ from 'jquery'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

MainChannel = Backbone.Radio.channel 'global'

Themes = [
  'plain'
  'cornsilk'
  'darkseagreen'
  ]

cssInfo = {}



class ThemeRemover extends Marionette.MnObject
  remove: (name) ->
    linkEl = $('head link')
    linkEl.each (index, element) ->
      el = $ element
      href = el.attr 'href'
      console.log "el", el
      if href.startsWith "garkbit-css-#{name}"
        console.log "href", href
        cssInfo[name] = href
        el.remove()

class ThemeSetter extends Marionette.MnObject
  setTheme: (name) ->
    @[name]()
  setThemeOrig: (name) ->
    console.log "cssInfo", name, cssInfo
    if not cssInfo.hasOwnProperty name
      @[name]()
    else
      console.log "#{name} found in cssInfo", cssInfo[name]
      html = "<link rel=\"stylesheet\" type=\"text/css\" href=\"#{href}\">"
      console.log "html", html
      href = cssInfo[name]
      if href
        lastLink = $("head link[rel='stylesheet']").last()
        lastLink.after html
  plain: ->
    require.ensure [], () ->
      require '../../sass/plain.scss'
    # name the chunk
    , 'garkbit-css-plain'
    .then (options) ->
      console.log "options", options
      
  cornsilk: ->
    require.ensure [], () ->
      require '../../sass/cornsilk-purple.scss'
    # name the chunk
    , 'garkbit-css-cornsilk'
  darkseagreen: ->
    require.ensure [], () ->
      require '../../sass/DarkSeaGreen.scss'
    # name the chunk
    , 'garkbit-css-darkseagreen'

class ThemeSwitcher extends Marionette.MnObject
  switchTheme: (name) ->
    remover = new ThemeRemover
    Themes.forEach (name) ->
      remover.remove name
    setter = new ThemeSetter
    setter.setTheme name
    setter[name]()


MainChannel.reply 'main:app:switch-theme', (name) ->
  console.log "switch-theme", name
  themes = new ThemeSwitcher
  themes.switchTheme name
    
export default ThemeSwitcher
