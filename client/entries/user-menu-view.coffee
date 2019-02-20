import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import Toolkit from 'marionette.toolkit'
import tc from 'teacup'

MainChannel = Backbone.Radio.channel 'global'

linkItem = '.nav-link.dropdown-item'
entryLinkItem = ".navbar-entry#{linkItem}"

guest_menu = tc.renderable (user) ->
  tc.li '.nav-item.dropdown', ->
    tc.a '.nav-link.dropdown-toggle', 'data-toggle':'dropdown', ->
      tc.text user.guestUserName
      tc.b '.caret'
    tc.ul '.dropdown-menu', ->
      tc.li ->
        tc.a entryLinkItem, href:user.loginUrl, 'login'

user_menu = tc.renderable (user) ->
  tc.li '.nav-item.dropdown', ->
    tc.a '.nav-link.dropdown-toggle', 'data-toggle':'dropdown', ->
      tc.text user.name
      tc.b '.caret'
    tc.ul '.dropdown-menu', ->
      tc.li ->
        tc.a entryLinkItem, href:'#profile', 'User Profile'
      # FIXME need better way to figure out admin access
      if 'admin' in user.groups
        tc.li ->
          tc.a entryLinkItem, href:'/admin', 'Administration'
        tc.li ->
          tc.a entryLinkItem, href:'#dbadmin', 'Database'
      tc.li ->
        tc.a entryLinkItem, href:"#frontdoor/logout", 'logout'

class UserMenuView extends Marionette.View
  tagName: 'ul'
  className: "navbar-nav ml-auto"
  templateContext: ->
    loginUrl: @options.appConfig.loginUrl
    guestUserName: @options.appConfig.guestUserName
    # FIXME
    model: @model or new Backbone.Model
    options: @options
  template: (user) ->
    if user?.name
      return user_menu user
    else
      # FIXME
      return guest_menu user
      
class UserMenuApp extends Toolkit.App
  initialize: (options) ->
    token = MainChannel.request "main:app:decode-auth-token"
    @options.user = token
    view = new UserMenuView
      appConfig: @getOption 'appConfig'
      model: new Backbone.Model @getOption 'user'
    @showView view
    
    
export default UserMenuApp
