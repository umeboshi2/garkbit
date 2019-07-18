import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

userIcon = require 'node-noto-emoji/dist/man'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'userprofile'

user_profile_template = tc.renderable (model) ->
  tc.div ->
    tc.h2 "User Name: #{model.name}"
    tc.br()
    tc.h2 "Config:"
    tc.table ->
      for prop of model.config
        tc.tr ->
          tc.td ->
            tc.h3 prop
          tc.td ->
            tc.span model.config[prop]

userProfileTemplate = tc.renderable (model) ->
  tc.div '.card', style:'width: 18rem;', ->
    tc.img '.card-img-top', style:'height: 50px;', src:userIcon
    tc.div '.card-body', ->
      tc.h5 '.card-title', model.title
      tc.div '.card-text', ->
        tc.text 'Groups'
        tc.ul '.list-group', ->
          for g in model.groups
            tc.li '.list-group-item', g
        tc.button '.chpass-btn.btn.btn-primary', 'Change Password'
        tc.button '.map-btn.btn.btn-info', 'Map'
      tc.div '.card-text.child-container'
      
      

class UserMainView extends Marionette.View
  template: userProfileTemplate
  ui:
    childContainer: '.child-container'
    mapBtn: '.map-btn'
    chpassContainer: '.chpass-container'
    chpassBtn: '.chpass-btn'
  regions:
    childContainer: '@ui.childContainer'
  events:
    'click @ui.mapBtn': 'mapBtnClicked'
    'click @ui.chpassBtn': 'chpassBtnClicked'

  _childButtonClicked: (currentViewName, showMethod) ->
    region = @getRegion 'childContainer'
    showView = false
    if region.hasView()
      viewName = region.currentView.constructor.name
      if viewName != currentViewName
        showView = true
      region.empty()
    else
      showView = true
    if showView
      @[showMethod]()

    
  mapBtnClicked: =>
    @_childButtonClicked 'MapView', 'showMapView'
  chpassBtnClicked: ->
    @_childButtonClicked 'ChangePasswordView', 'showChpassView'
  showMapView: ->
    require.ensure [], () =>
      ViewClass = require('tbirds/views/mapview').default
      view = new ViewClass
      @showChildView 'childContainer', view
    # name the chunk
    , 'userprofile-view-map-childview'
  showChpassView: ->
    require.ensure [], () =>
      ViewClass = require('./chpassview').default
      view = new ViewClass
        model: AppChannel.request 'new-password-model'
      @showChildView 'childContainer', view
    # name the chunk
    , 'userprofile-view-chpass-childview'
    

module.exports = UserMainView


