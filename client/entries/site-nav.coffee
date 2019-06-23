import Backbone from 'backbone'

import devMenu from './dev-menu-entries'
import demoMenu from './demo-menu-entries'
import miscMenu from './misc-menu-entries'
import adminEntries from './admin-menu-entries'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
SiteNavChannel = Backbone.Radio.channel 'site-nav'
NavbarChannel = Backbone.Radio.channel 'navbar'


useCornsilkPurple = ->
  # FIXME need better way to resolve tbirds sass
  if not __useCssModules__
    #require '../../node_modules/tbirds/sass/cornsilk-purple.scss'
    require '../../sass/cornsilk-purple.scss'
  else
    require '../../node_modules/tbirds/sass/initial.scss'
  
useDarkSeaGreen = ->
  if not __useCssModules__
    #require '../../node_modules/tbirds/sass/cornsilk-purple.scss'
    require '../../sass/DarkSeaGreen.scss'
  else
    require '../../node_modules/tbirds/sass/initial.scss'
  
  

SiteNavChannel.reply 'set-index-entries', ->
  entries = [
    demoMenu
    miscMenu
    ]
  if __DEV__
    entries.push devMenu
  NavbarChannel.request 'clear-entries', 'site'
  NavbarChannel.request 'add-entries', entries, 'site'
  #useCornsilkPurple()
  

SiteNavChannel.reply 'set-admin-entries', ->
  NavbarChannel.request 'clear-entries', 'site'
  NavbarChannel.request 'add-entries', adminEntries, 'site'
  #useDarkSeaGreen()

