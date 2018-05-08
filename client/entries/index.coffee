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

pkg = require '../../package.json'
pkgmodel = new Backbone.Model pkg
console.log "HELLO"

#import lf from 'lovefield
import ebcsvSchema from '../applets/ebcsv/dbschema'
import bumblrSchema from '../applets/bumblr/dbschema'
import tvmazeSchema from '../applets/tvmaze/dbschema'
#console.log "tvmazeSchema", tvmazeSchema

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

schemas =
  ebcsv: ebcsvSchema
  bumblr: bumblrSchema
  tvmaze: tvmazeSchema
  
dbConns = {}

promises = Object.keys(schemas).map (key, index, array) ->
  schemas[key].connect().then (db) ->
    dbConns[key] = db
    if __DEV__ and DEBUG
      console.log "Connected to #{key} database."
Promise.all(promises).then ->
  app.dbConn = dbConns
  TH.startUserApp app, MainAppConfig
  MainChannel.reply 'main:app:dbConn', (name) ->
    #return app.getState('dbConn')[name]
    return app.dbConn[name]

  
export default app


