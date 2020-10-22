import { Radio } from 'backbone'
import AppRouter from 'marionette.approuter'
import navigateToUrl from 'tbirds/util/navigate-to-url'
import isObjectEmpty from 'tbirds/util/object-empty'

MainChannel = Radio.channel 'global'
SiteNavChannel = Radio.channel 'site-nav'

class AdminRouter extends AppRouter
  # Backbone.Router prototype overridden by
  # backbone.routefilter which provides "before" method
  # before: (route, params) -> # noqa
  before: ->
    user = MainChannel.request 'main:app:decode-auth-token'
    hasAccess = false
    permittedGroups = @getOption('permittedGroups') or ['admin']
    if not isObjectEmpty user
      for gname in user.groups
        if gname in permittedGroups
          hasAccess = true
    if not hasAccess
      #MessageChannel.request 'warning', 'Restricted access only!'
      #navigate_to_url '/#frontdoor/login'
      navigateToUrl '#'
      MainChannel.request 'main:app:show-login'
  onRoute: ->
    navbarEntries = @getOption('navbarEntries') or 'admin'
    SiteNavChannel.request "set-#{navbarEntries}-entries"

export default AdminRouter

