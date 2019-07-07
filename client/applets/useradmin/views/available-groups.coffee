import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'useradmin'

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
    #console.log "addItem usergroup", usergroup
    response = usergroup.save()
    response.fail ->
      MessageChannel.request 'danger', 'failed to save model'
    response.done =>
      @trigger "user:groups:change"
     
    
export default AvailableGroupView
