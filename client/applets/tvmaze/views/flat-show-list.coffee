import $ from 'jquery'
import { Radio, history } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from  'teacup'

import PaginateBar from 'tbirds/views/paginate-bar'

import ConfirmDeleteModal from './confirm-delete-modal'

MainChannel = Radio.channel 'global'

itemTemplate = tc.renderable (model) ->
  tc.li '.list-group-item', ->
    tc.span ->
      tc.a href:"#tvmaze/view/show/#{model.id}", model.content.name
    tc.span '.btn-group.pull-right', ->
      tc.button '.delete-item.btn.btn-sm.btn-danger.fa.fa-close',
      style:'display:none', 'delete'
    
listTemplate = tc.renderable (model) ->
  console.log "listTemplate", model
  tc.div '.listview-header', ->
    tc.text "TV Shows"
  tc.nav '.paginate-bar'
  tc.ul ".list-group"


class ItemView extends MnView
  template: itemTemplate
  ui:
    item: '.list-group-item'
    link: 'a'
    deleteItem: '.delete-item'
  events:
    'click @ui.link': 'showRole'
    'click @ui.deleteItem': 'deleteItem'
  showRole: (event) ->
    event.preventDefault()
    history.navigate "#tvmaze/shows/view/#{@model.id}", trigger:true
  _show_modal: (view, backdrop) ->
    app = MainChannel.request 'main:app:object'
    layout = app.getView()
    modal_region = layout.getRegion 'modal'
    modal_region.backdrop = backdrop
    modal_region.show view
  deleteItem: ->
    view = new ConfirmDeleteModal
      model: @model
    @_show_modal view, true
    
class ItemCollectionView extends CollectionView
  childView: ItemView

class ListView extends MnView
  template: listTemplate
  templateContext: ->
    collection: @collection
  ui:
    header: '.listview-header'
    paginateBar: '.paginate-bar'
    itemList: '.list-group'
  regions:
    paginateBar: '@ui.paginateBar'
    itemList: '@ui.itemList'
  onRender: ->
    view = new ItemCollectionView
      collection: @collection
    @showChildView 'itemList', view
    view = new PaginateBar
      collection: @collection
    @showChildView 'paginateBar', view
    
export default ListView

