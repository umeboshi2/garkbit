import { Radio } from 'backbone'
import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'

MessageChannel = Radio.channel 'messages'
AppChannel = Radio.channel 'useradmin'

currentItemTemplate = tc.renderable (model) ->
  tc.span '.mr-auto', ->
    tc.text model.name
  tc.span '.ml-auto.btn-group.pull-right', ->
    tc.button '.remove-item.btn.btn-sm.btn-info.fa.fa-minus', 'remove'

class CurrentGroupView extends MnView
  tagname: 'li'
  className: -> 'list-group-item row'
  template: currentItemTemplate
  ui: ->
    removeItem: '.remove-item'
    item: '.list-group-item'
  events: ->
    'click @ui.removeItem': 'removeItem'
  removeItem: ->
    user = @getOption 'user'
    group = @model
    Model = AppChannel.request 'db:usergroup:modelClass'
    usergroup = new Model
      group_id: group.id
      user_id: user.id
    response = usergroup.fetch()
    
    response.fail ->
      MessageChannel.request 'danger', 'failed to retrieve model'
    response.done =>
      delresponse = usergroup.destroy()
      delresponse.done =>
        @trigger "user:groups:change"
      delresponse.fail ->
        MessageChannel.request 'danger', 'failed to remove it'
      
     
    
export default CurrentGroupView
