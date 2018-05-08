Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
Toolkit = require 'marionette.toolkit'
tc = require 'teacup'

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
  onBeforeStart: ->
    @setRegion @options.parentApp.getView().getRegion 'userEntries'
    token = MainChannel.request "main:app:decode-auth-token"
    @options.user = token
    
  onStart: ->
    token = MainChannel
    appConfig = @options.appConfig
    view = new UserMenuView
      appConfig: appConfig
      model: new Backbone.Model @options.user
    @showView view

module.exports = UserMenuApp
