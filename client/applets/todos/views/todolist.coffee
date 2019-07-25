import Backbone from 'backbone'
import tc from 'teacup'

import * as Templates from 'tbirds/templates/basecrud'
import * as Views from 'tbirds/crud/basecrudviews'
import navigate_to_url from 'tbirds/util/navigate-to-url'


MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'todos'

base_item_template = (name, route_name) ->
  tc.renderable (model) ->
    item_btn = ".btn.btn-primary.btn-xs"
    tc.li ".list-group-item.#{name}-item", ->
      tc.span '.edit-button.btn.btn-primary.btn-xs', 'Edit'
      tc.text " "
      tc.span ->
        tc.a href:"##{route_name}/#{name}s/view/#{model.id}", model.name
        
      tc.div '.todo-completed.checkbox.pull-right', ->
        tc.label ->
          opts =
            type: 'checkbox'
          if model.completed
            opts.checked = ''
          tc.div '.form-check', ->
            tc.input "#todo-id-#{model.id}.todo-checkbox.form-check-input", opts
            tc.label '.form-check-label', for:"todo-id-#{model.id}", 'done'
        
class ItemView extends Views.BaseItemView
  route_name: 'todos'
  template: base_item_template 'todo', 'todos'
  item_type: 'todo'
  ui:
    edit_item: '.edit-button'
    delete_item: '.delete-item'
    item: '.list-item'
    completed: '.todo-checkbox'
    
  events: ->
    'click @ui.edit_item': 'edit_item'
    'click @ui.delete_item': 'delete_item'
    'change @ui.completed': 'todo_completed'
    
  edit_item: ->
    navigate_to_url "##{@route_name}/#{@item_type}s/edit/#{@model.id}"
    
  delete_item: ->
    if __DEV__
      console.log "delete_#{@item_type}", @model
    view = new ConfirmDeleteModal
      model: @model
    if __DEV__
      console.log 'modal view', view
    show_modal view, true

  todo_completed: (event) ->
    completed = event.target.checked ^ 0
    @model.set 'completed', completed
    response = @model.save()
    response.done =>
      applet = MainChannel.request 'main:applet:get-applet', 'todos'
      MessageChannel.request 'success', "Updated #{@model.get 'name'}"
      controller = applet.router.controller
      checked = not event.target.checked
      controller.list_certain_todos checked ^ 0
      
  
class ListView extends Views.BaseListView
  route_name: 'todos'
  childView: ItemView
  template: Templates.base_list_template 'todo'
  childViewContainer: '#todo-container'
  item_type: 'todo'
    
export default ListView

