import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'
import axios from 'axios'

MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'useradmin'

currentItemTemplate = tc.renderable (model) ->
  tc.span '.mr-auto', ->
    #href = model.itemViewUrl
    #tc.a href:href, model.itemLabel
    tc.text model.name
  tc.span '.ml-auto.btn-group.pull-right', ->
    tc.button '.remove-item.btn.btn-sm.btn-info.fa.fa-minus', 'remove'

class CurrentGroupView extends Marionette.View
  tagname: 'li'
  className: -> 'list-group-item row'
  template: currentItemTemplate
  ui: ->
    removeItem: '.remove-item'
    item: '.list-group-item'
  events: ->
    'click @ui.removeItem': 'removeItem'
    'user:groups:change': 'onUserGroupsChange'
  onUserGroupsChange: ->
    console.log "onUserGroupsChange"
  #triggers:
  #  'user:groups:change': 'user:groups:change'
  removeItem: ->
    user = @getOption 'user'
    group = @model
    usergroups = AppChannel.request 'db:usergroup:collection'
    Model = AppChannel.request 'db:usergroup:modelClass'
    usergroup = new Model
      group_id: group.id
      user_id: user.id
    response = usergroup.fetch()
    
    response.fail ->
      MessageChannel.request 'danger', 'failed to retrieve model'
    response.done =>
      console.log "usergroup is ", usergroup, usergroup.isNew()
      delresponse = usergroup.destroy()
      delresponse.done =>
        @trigger "user:groups:change"
      delresponse.fail ->
        MessageChannel.request 'danger', 'failed to remove it'
      
     
    
availableItemTemplate = tc.renderable (model) ->
  tc.span '.mr-auto', ->
    tc.text model.name
  tc.span '.ml-auto.btn-group.pull-right', ->
    tc.button '.add-item.btn.btn-sm.btn-info.fa.fa-plus', 'add'


class AvailableGroupView extends Marionette.View
  tagname: 'li'
  className: -> 'list-group-item row'
  template: availableItemTemplate
  ui: ->
    addItem: '.add-item'
    item: '.list-group-item'
  events: ->
    'click @ui.addItem': 'addItem'

  addItem: ->
    user = @getOption 'user'
    group = @model

    Model = AppChannel.request 'db:usergroup:modelClass'
    usergroup = new Model
      group_id: group.id
      user_id: user.id
    console.log "addItem usergroup", usergroup
    response = usergroup.save()
    response.fail ->
      MessageChannel
     
    
simpleTemplate = tc.renderable (model) ->
  console.warn "MODEL", model
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
  onUserGroupsChange: ->
    console.log "onUserGroupsChange"
    @render()
  onRender: ->
    user = @model
    collection = new Backbone.Collection user.get 'groups'
    currentGroupsView = new Marionette.CollectionView
      tagname: 'ul'
      className: 'list-group'
      collection: collection
      childView: CurrentGroupView
      childViewOptions:
        user: @model
      childViewEvents:
        'user:groups:change': 'user:groups:change'
        
    @showChildView 'current', currentGroupsView
    
      
    console.log "MainView user", user
    currentGroups = user.get 'groups'
    currentGids = (g.id for g in currentGroups)
    groups = AppChannel.request 'db:group:collection'
    response = groups.fetch()
    response.done =>
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
        childViewEvents:
          'user:groups:change': 'user:groups:change'
      @showChildView 'available', view
    

export default MainView
