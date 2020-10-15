import { Radio, history } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import PaginateBar from 'tbirds/views/paginate-bar'


import ConfirmDeleteModal from './confirm-delete-modal'
import itemTemplate from './templates/tvshow-item'

MainChannel = Radio.channel 'global'

listContainer = '.show-list'

listTemplate = tc.renderable ->
  tc.div '.listview-header', ->
    tc.text "TV Shows"
  tc.nav '.paginate-bar'
  tc.button '.flat-list.btn.btn-info', "Show flat list"
  tc.div listContainer


class ItemView extends MnView
  template: itemTemplate
  templateContext:
    divStyle: 'border-style:solid;border-width:3px'
    cardClasses: '.bg-body-d5'
  className: 'col-md-2'
  ui:
    item: '.show-item'
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
  className: 'row'

class ListView extends MnView
  template: listTemplate
  options:
    listContainer: listContainer
  ui: ->
    header: '.listview-header'
    itemList: listContainer
    flatListButton: '.flat-list'
    paginateBar: '.paginate-bar'
  regions:
    paginateBar: '@ui.paginateBar'
    itemList: '@ui.itemList'
  events:
    'click @ui.flatListButton': 'showFlatList'
  onRender: ->
    view = new ItemCollectionView
      collection: @collection
    @showChildView 'itemList', view
    pager = new PaginateBar
      collection: @collection
    @showChildView 'paginateBar', pager
  onBeforeDestroy: ->
    @collection.off 'pageable:state:change'
  showFlatList: ->
    history.navigate '#tvmaze/shows/flat', trigger:true
    
export default ListView

