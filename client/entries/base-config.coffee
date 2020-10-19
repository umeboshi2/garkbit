import tc from 'teacup'

import ModalRegion from './bsmodal'
#import ModalRegion from 'tbirds/regions/bsmodal'
import config from 'tbirds/app-config'
import MainPageLayout from 'tbirds/tklayout'
import emoji from 'node-emoji'

import navbarBrandTemplate from './navbar-brand-template'
import UserMenuApp from './user-menu-view'

class Layout extends MainPageLayout
  template: tc.renderable () ->
    tc.div '#modal'
    tc.div ".container-fluid", ->
      tc.div '#navbar-view-container'
      tc.div '.row.fixed-bottom', ->
        tc.div '.col', ->
          tc.div '#messages'
      tc.div '#applet-content'
      tc.div '#footer'
  regions:
    messages: '#messages'
    navbar: '#navbar-view-container'
    modal: ModalRegion
    applet: '#applet-content'
    footer: '#footer'

  
config.userMenuApp = UserMenuApp
config.layout = Layout
config.hasUser = true
config.appletRoutes.profile = 'userprofile'

config.brand.label = 'Garkbit'
config.brand.url = '#'
config.navbarBrandTemplate = navbarBrandTemplate

config.authToken.refreshInterval = '5m'
# for testing authToken
if __DEV__ and false
  config.authToken.refreshInterval = '10s'

config.authToken.refreshIntervalMultiple = 3
config.authToken.loginUrl = '#login'

config.appRegion = '#root-div'
#config.useNavbar = false

config.appletRoutes =
  pages: 'frontdoor'
  login: 'frontdoor'
  logout: 'frontdoor'
  admin: 'adminpanel'
  profile: 'userprofile'

export default config
