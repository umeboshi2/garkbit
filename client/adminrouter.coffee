import Marionette from 'backbone.marionette'
import AppRouter from 'marionette.approuter'
import navigate_to_url from 'tbirds/util/navigate-to-url'
import isObjectEmpty from 'tbirds/util/object-empty'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
SiteNavChannel = Backbone.Radio.channel 'site-nav'

class AdminRouter extends AppRouter
  # Backbone.Router prototype overridden by
  # backbone.routefilter which provides "before" method
  before: (route, params) ->
    user = MainChannel.request 'main:app:decode-auth-token'
    isAdmin = false
    if not isObjectEmpty user
      if 'admin' in user.groups
        isAdmin = true
    if not isAdmin
      MessageChannel.request 'warning', 'Admin access only!'
      navigate_to_url '/#frontdoor/login'
  onRoute: ->
    SiteNavChannel.request 'set-admin-entries'

export default AdminRouter

