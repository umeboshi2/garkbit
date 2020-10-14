import { Radio } from 'backbone'
import AppRouter from 'marionette.approuter'

MainChannel = Radio.channel 'global'
SiteNavChannel = Radio.channel 'site-nav'

export class IndexRouter extends AppRouter
  # Backbone.Router prototype overridden by
  # backbone.routefilter which provides "before" method
  before: (route, params) ->
    user = MainChannel.request 'main:app:decode-auth-token'
  onRoute: ->
    navbarEntries = @getOption('navbarEntries') or 'index'
    SiteNavChannel.request "set-#{navbarEntries}-entries"
    
MainChannel.reply 'main:app:IndexRouter', ->
  return IndexRouter
