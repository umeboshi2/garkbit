import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import Toolkit from 'marionette.toolkit'
import tc from 'teacup'
import navigate_to_url from 'tbirds/util/navigate-to-url'

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
  if user.isGuest
    tc.li '.nav-item.btn.btn-primary.login-btn', 'login'
  else
    tc.li '.nav-item.dropdown', ->
      tc.a '.nav-link.dropdown-toggle', 'data-toggle':'dropdown', ->
        tc.text user.name
        tc.b '.caret'
      tc.ul '.dropdown-menu', ->
        if not user?.isGuest
          tc.li ->
            tc.a entryLinkItem, href:'#profile', 'User Profile'
          # FIXME need better way to figure out admin access
          if 'admin' in user.groups
            tc.li ->
              tc.a entryLinkItem, href:'#admin', 'Administration'
            tc.li ->
              tc.a entryLinkItem, href:'#dbadmin', 'Database'
          tc.li ->
            tc.a entryLinkItem, href:"#frontdoor/logout", 'logout'
        else
          tc.li ->
            tc.a entryLinkItem, href:'#frontdoor/login', 'login'
        

class UserMenuView extends Marionette.View
  tagName: 'ul'
  className: "navbar-nav ml-auto"
  template: user_menu
  ui:
    loginBtn: '.login-btn'
  events:
    'click @ui.loginBtn': 'loginBtnClicked'
  model: ->
    model = MainChannel.request "main:app:currentUser"
    return model
  modelEvents:
    'change': 'onChange'
  onChange: ->
    @render()
  loginBtnClicked: ->
    MainChannel.request 'main:app:show-login'
    
    
class UserMenuApp extends Toolkit.App
  initialize: (options) ->
    token = MainChannel.request "main:app:decode-auth-token"
    model = MainChannel.request 'main:app:currentUser'
    @options.user = token
    if not token?.groups
      token.groups = []
    view = new UserMenuView
      appConfig: @getOption 'appConfig'
      model: model
    @showView view
    
    
export default UserMenuApp
