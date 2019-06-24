import Marionette from 'backbone.marionette'
import AppRouter from 'marionette.approuter'
import navigate_to_url from 'tbirds/util/navigate-to-url'
import isObjectEmpty from 'tbirds/util/object-empty'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
SiteNavChannel = Backbone.Radio.channel 'site-nav'

class IndexRouter extends AppRouter
  # Backbone.Router prototype overridden by
  # backbone.routefilter which provides "before" method
  before: (route, params) ->
    user = MainChannel.request 'main:app:decode-auth-token'
  onRoute: ->
    SiteNavChannel.request 'set-index-entries'

MainChannel.reply 'main:app:IndexRouter', ->
  return IndexRouter
  
export default IndexRouter

