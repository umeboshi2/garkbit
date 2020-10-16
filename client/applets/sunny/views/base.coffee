import { Radio } from 'backbone'
import { View, CollectionView } from 'backbone.marionette'

import navigate_to_url from 'tbirds/util/navigate-to-url'

MainChannel = Radio.channel 'global'

# FIXME
show_modal = ->

export class BaseItemView extends View
  ui:
    edit_item: '.edit-item'
    delete_item: '.delete-item'
    item: '.list-item'
    
  events: ->
    'click @ui.edit_item': 'edit_item'
    'click @ui.delete_item': 'delete_item'
    
  edit_item: ->
    navigate_to_url "#sunny/#{@item_type}s/edit/#{@model.id}"
    
  delete_item: ->
    if __DEV__
      console.log "delete_#{@item_type}", @model
      class ConfirmDeleteModal extends View
      view = new ConfirmDeleteModal
        model: @model
    if __DEV__
      console.log 'modal view', view
    show_modal view, true
    if __DEV__ and DEBUG
      console.log "show_modal", show_modal

export class BaseListView extends CollectionView
  childViewContainer: "##{@item_type}-container"
  ui: ->
    make_new_item: "#new-#{@item_type}"
    
  events: ->
    'click @ui.make_new_item': 'make_new_item'

  _show_modal: (view, backdrop=false) ->
    modal_region = MainChannel.request 'main:app:get-region', 'modal'
    modal_region.backdrop = backdrop
    modal_region.show view

  
  make_new_item: ->
    # FIXME - fix url dont't add 's'
    history.navigate "#sunny/#{@item_type}s/new", trigger:true
