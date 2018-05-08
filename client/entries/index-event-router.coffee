import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import jwtDecode from 'jwt-decode'
import ms from 'ms'

import navigate_to_url from 'tbirds/util/navigate-to-url'
import TopApp from 'tbirds/top-app'
import setupAuthModels from 'tbirds/authmodels'
import TH from 'tbirds/token-handler'

import objectEmpty from '../object-empty'

import './base'
import FooterView from './footerview'

import pkg from '../../package.json'
pkgmodel = new Backbone.Model pkg

import MainAppConfig from './index-config'
console.log "MainAppConfig", MainAppConfig
setupAuthModels MainAppConfig

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'

show_footer = ->
  token = MainChannel.request 'main:app:decode-auth-token'
  pkgmodel.set 'token', token
  pkgmodel.set 'remaining', TH.accessTimeRemaining()
  view = new FooterView
    model: pkgmodel
  footer_region = app.getView().getRegion 'footer'
  footer_region.show view

app = new TopApp
  appConfig: MainAppConfig

if __DEV__
  # DEBUG attach app to window
  window.App = app

# register the main router
#MainChannel.request 'main:app:route'
import TkRouter from 'tbirds/tkrouter'
class MainRouter extends TkRouter
  channelName: 'router'
  eventRoutes:
    'route:applet:event':
      action: 'handleRoute'
      route: ':appname*suffix'
    'applet:event':
      action: 'handleRoute'
      route: ':appname*suffix'
  handleRoute: (options) ->
    console.log "handleRoute called", arguments
    appname = options.appname
    suffix = options.suffix
    tail = options.tail
    config = MainChannel.request 'main:app:config'
    handler = `import(\`applets/${appname}/main\`)`
    handler.then (Applet) ->
      # FIXME fix applet structure to provide appropriate export
      applet = new Applet.default
        appConfig: config
        appName: appname
      MainChannel.request 'main:applet:register', appname, applet
      applet.start()
      console.log "applet #{appname} started"
      return
    .catch (err) ->
      if err.message.startsWith 'Cannot find module'
        MessageChannel.request 'warning', "Bad route #{appname}, #{suffix}!!"
        return
      # catch this here for initial page load with invalid
      # subpath
      else if err.message.startsWith 'Unhandled applet'
        MessageChannel.request 'warning', err.message
        return
      else
        throw err
    return
  navigate: (options) ->
    console.log "navigate called with", options
    #@router.navigate options, trigger: true
    channel = @getChannel()
    console.log "channel is", channel
    url = arguments[0]
    if url.startsWith '#'
      console.log "url starts with #", url
      url = url.slice(1)
    console.log "url is", url
    r = @router.translateRoute url
    console.log "route is", r
    console.log "router is ", @router
    re = @router._routeToRegExp ":appname*suffix"
    args = @router._extractParameters(re, url)
    console.log "args", args
    rargs =
      appname: args[0]
      suffix: args[1]
      tail: args[2]
    channel.trigger "route:applet:event", rargs
    @router.navigateFromEvent 'route:applet:event', args
    
    

if false
  router = new MainRouter
  MainChannel.trigger 'route:applet:event'
  MainChannel.reply 'main-router', ->
    return router
else
  MainChannel.request 'main:app:route'

app.on 'before:start', ->
  theme = MainChannel.request 'main:app:get-theme'
  theme = if theme then theme else 'vanilla'
  MainChannel.request 'main:app:switch-theme', theme
  
app.on 'start', ->
  #show_footer()
  #setInterval show_footer, ms '5s'
  refreshOpts =
    refreshInterval: MainAppConfig.authToken.refreshInterval
    refreshIntervalMultiple: MainAppConfig.authToken.refreshIntervalMultiple
    loginUrl: '#frontdoor/login'
  keep_fresh = ->
    TH.keepTokenFresh refreshOpts
  setInterval keep_fresh, ms '10s'

TH.startUserApp app, MainAppConfig
  
export default app


