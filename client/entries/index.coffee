import { Radio } from 'backbone'
import ms from 'ms'

#import TopApp from 'tbirds/top-app'
#import TkAppState from 'tbirds/top-app'
import createMainApp from 'tbirds/start-main-app'

import setupAuthModels from 'tbirds/authmodels'
import TH from 'tbirds/token-handler'

import './base'
import '../indexrouter'
import './site-nav'

import bumblrSchema from '../applets/bumblr/dbschema'
import tvmazeSchema from '../applets/tvmaze/dbschema'
# these are in ../oldapplets
# import ebcsvSchema from '../applets/ebcsv/dbschema'
# import mslegSchema from '../applets/msleg/dbschema'

import MainAppConfig from './base-config'

setupAuthModels MainAppConfig

MainChannel = Radio.channel 'global'
SiteNavChannel = Radio.channel 'site-nav'


app = createMainApp MainAppConfig

if __DEV__
  # DEBUG attach app to window
  window.App = app

# create the main router
MainChannel.request 'main:app:create-main-router'

app.on 'before:start', ->
  theme = MainChannel.request 'main:app:get-theme'
  theme = if theme then theme else 'plain'
  # MainChannel.request 'main:app:switch-theme', theme
  
app.on 'start', ->
  SiteNavChannel.request 'set-index-entries'
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
  # ebcsv: ebcsvSchema
  # msleg: mslegSchema
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


