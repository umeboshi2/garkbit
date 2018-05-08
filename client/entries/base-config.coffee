import tc from 'teacup'

import ModalRegion from 'tbirds/regions/bsmodal'
import config from 'tbirds/app-config'
import MainPageLayout from 'tbirds/tklayout'


class Layout extends MainPageLayout
  template: tc.renderable () ->
    tc.div '#modal'
    tc.div ".container-fluid", ->
      tc.div '#navbar-view-container'
      tc.div '.row.fixed-bottom', ->
        tc.div '.col-md-4', ->
          tc.div '#messages'
      tc.div '#applet-content'
      tc.div '#footer'
  regions:
    messages: '#messages'
    navbar: '#navbar-view-container'
    modal: ModalRegion
    applet: '#applet-content'
    footer: '#footer'
  
navbarBrandTemplate = tc.renderable (model) ->
  padding = '.pt-1.pb-1.pl-2.pr-2'
  padding = '.p-1.rounded.border.border-secondary'
  tc.a ".navbar-brand.bg-body-d5#{padding}", href:model.url, ->
    tc.img src:"/assets/Cartoon-Concierge.svg", width:"40", height:"40"
    tc.span '.mt-2', model.label
  tc.span '.toggle-container'


config.userMenuApp = require './user-menu-view'
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
config.authToken.loginUrl = '#frontdoor/login'

config.appRegion = '#root-div'

export default config
