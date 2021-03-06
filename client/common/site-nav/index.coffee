import { Radio } from 'backbone'

import devMenu from './dev-menu-entries'
import demoMenu from './demo-menu-entries'
import miscMenu from './misc-menu-entries'
import adminEntries from './admin-menu-entries'

SiteNavChannel = Radio.channel 'site-nav'
NavbarChannel = Radio.channel 'navbar'


SiteNavChannel.reply 'set-index-entries', ->
  entries = [
    demoMenu
    miscMenu
    ]
  entries = []
  if __DEV__
    entries.push devMenu
  NavbarChannel.request 'clear-entries', 'site'
  NavbarChannel.request 'add-entries', entries, 'site'
  #useCornsilkPurple()
  

SiteNavChannel.reply 'set-admin-entries', ->
  NavbarChannel.request 'clear-entries', 'site'
  NavbarChannel.request 'add-entries', adminEntries, 'site'
  #useDarkSeaGreen()

