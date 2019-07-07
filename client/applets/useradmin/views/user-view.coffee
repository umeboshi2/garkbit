import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'
import axios from 'axios'

import AvailableGroupView from './available-groups'
import CurrentGroupView from './current-groups'


MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'useradmin'

simpleTemplate = tc.renderable (model) ->
  tc.div '.row', ->
    tc.div '.col', ->
      tc.dl ->
        tc.dt "Name"
        tc.dd model.fullname
        tc.dt 'Login'
        tc.dd model.username
    tc.div '.col', ->
      tc.div 'Current groups'
      tc.div '.current-groups'
    tc.div '.col', ->
      tc.div 'Available groups'
      tc.div '.available-groups'
      
  tc.div '.row', ->
    tc.a href:'#useradmin/user/list', ->
      tc.button '.btn.btn-sm.btn-info', 'Users'

class MainView extends Marionette.View
  channelName: 'useradmin'
  template: simpleTemplate
  ui:
    available: '.available-groups'
    current: '.current-groups'
  regions:
    available: '@ui.available'
    current: '@ui.current'
  childViewEvents:
    'user:groups:change': 'groupsChanged'

  groupsChanged: ->
    console.log "groupsChanged"
    response = @model.fetch()
    response.done =>
      @render()
     
  showCurrentGroups: ->
    user = @model
    collection = new Backbone.Collection user.get 'groups'
    currentGroupsView = new Marionette.CollectionView
      tagname: 'ul'
      className: 'list-group'
      collection: collection
      childView: CurrentGroupView
      childViewOptions:
        user: @model
      childViewTriggers:
        'user:groups:change': 'user:groups:change'
    @showChildView 'current', currentGroupsView
    currentGroupsView.on 'user:groups:change', @somethingHappened

  showAvailableGroups: (groups) ->
    user = @model
    currentGroups = user.get 'groups'
    currentGids = (g.id for g in currentGroups)
    available = new Backbone.Collection
    groups.forEach (g) ->
      if g.id not in currentGids
        available.add g
    view = new Marionette.CollectionView
      channelName: 'useradmin'
      tagName: 'ul'
      className: 'list-group'
      collection: available
      childView: AvailableGroupView
      childViewOptions:
        user: @model
      childViewTriggers:
        'user:groups:change': 'user:groups:change'
    @showChildView 'available', view
    
  onRender: ->
    user = @model
    @showCurrentGroups()
    groups = AppChannel.request 'db:group:collection'
    response = groups.fetch()
    response.done =>
      @showAvailableGroups groups
      

export default MainView
