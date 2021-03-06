import { Radio } from 'backbone'
import { View, CollectionView } from 'backbone.marionette'

import BootstrapFormView from 'tbirds/views/bsformview'
import navigate_to_url from 'tbirds/util/navigate-to-url'
import make_field_input_ui from 'tbirds/util/make-field-input-ui'

import 'tbirds/regions/bsmodal'
{ confirmDeleteTemplateFactory } = require './templates'

MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'


class ConfirmDeleteModal extends View
  #template: confirmDeleteTemplate
  ui:
    confirm_delete: '#confirm-delete-button'
    cancel_button: '#cancel-delete-button'
    
  events: ->
    'click @ui.confirm_delete': 'confirm_delete'

  confirm_delete: ->
    name = @model.get 'name'
    response = @model.destroy()
    response.done ->
      MessageChannel.request 'success', "#{name} deleted.",
    response.fail ->
      MessageChannel.request 'danger', "#{name} NOT deleted."
      
class BaseItemView extends View
  tagName: 'li'
  className: ->
    "list-group-item #{@item_type}-item row"
  ui: ->
    edit_item: '.edit-item'
    delete_item: '.delete-item'
    item: '.list-item'
    
  events: ->
    'click @ui.edit_item': 'edit_item'
    'click @ui.delete_item': 'delete_item'
    
  edit_item: ->
    navigate_to_url "##{@route_name}/#{@item_type}/edit/#{@model.id}"
    
  _show_modal: (view, backdrop) ->
    app = MainChannel.request 'main:app:object'
    layout = app.getView()
    modal_region = layout.getRegion 'modal'
    modal_region.backdrop = backdrop
    modal_region.show view
  
  delete_item: ->
    if __DEV__
      console.log "delete_#{@item_type}", @model
    view = new ConfirmDeleteModal
      model: @model
      template: confirmDeleteTemplateFactory @options
    if __DEV__
      console.log 'modal view', view
    @_show_modal view, true
    

class BaseListView extends View
  regions: ->
    itemList: "##{@item_type}-container"
  ui: ->
    addItem: "#add-#{@item_type}"
  onRender: ->
    view = new CollectionView
      tagName: 'ul'
      className: 'list-group'
      collection: @collection
      childView: @childView
      childViewOptions: @options
    @showChildView 'itemList', view
  events: ->
    'click @ui.addItem': 'addItem'
  addItem: ->
    navigate_to_url "##{@route_name}/#{@item_type}/add"
 
class BaseFormView extends BootstrapFormView
  ui: ->
    return make_field_input_ui @getOption 'fieldList'
  updateModel: ->
    fieldList = @getOption 'fieldList'
    for field in fieldList
      @model.set field, @ui[field].val()

  getViewUrl: ->
    return "##{@options.routeName}/#{@options.modelName}/view/#{@model.id}"
    
  onSuccess: (model) ->
    name = @model.get @options.entryField
    msg = "#{name} saved successfully."
    MessageChannel.request 'success', msg
    navigate_to_url @getViewUrl()

class BaseNewFormView extends BaseFormView
  createModel: ->
    name = @getOption 'modelName'
    # FIXME fix tbirds form view to use Mn.Object
    channel = Radio.channel @getOption 'channelName'
    return channel.request "db:#{name}:new"

  saveModel: ->
    name = @getOption 'modelName'
    # FIXME fix tbirds form view to use Mn.Object
    channel = Radio.channel @getOption 'channelName'
    collection = channel.request "db:#{name}:collection"
    collection.add @model
    super()

  onSuccess: (model) ->
    return model
    
    
class BaseEditFormView extends BaseFormView
  # the model should be assigned in the controller
  createModel: ->
    @model
    


    
MainChannel.reply 'crud:view:item', ->
  BaseItemView
MainChannel.reply 'crud:view:list', ->
  BaseListView
MainChannel.reply 'crud:view:new-item', ->
  BaseNewFormView
MainChannel.reply 'crud:view:edit-item', ->
  BaseEditFormView
  
export {
  BaseItemView
  BaseListView
  BaseNewFormView
  BaseEditFormView
  }
