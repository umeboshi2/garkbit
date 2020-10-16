import { extend } from 'lodash'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import BaseListView from 'tbirds/views/list-view'
import navigate_to_url from 'tbirds/util/navigate-to-url'


itemTemplate = tc.renderable (model) ->
  tc.li '.list-group-item.bg-body-d5', ->
    tc.span ->
      tc.a href:"", model.name

listTemplate = tc.renderable ->
  tc.div '.listview-header', ->
    tc.text "Wikipages"
  tc.div '.paginate-bar'
  tc.ul '.list-group'

class ItemView extends MnView
  template: itemTemplate
  ui:
    item: '.list-group-item'
    link: 'a'
  events:
    'click @ui.link': 'showItem'
  showItem: (event) ->
    event.preventDefault()
    navigate_to_url "#wikipages/view/#{@model.get 'name'}"
    
export class ItemCollectionView extends CollectionView
  childView: ItemView
  

  
class ListView extends BaseListView
  ItemView: ItemView
  template: listTemplate
  ui:
    header: '.listview-header'
    itemList: '.list-group'
    paginateBar: '.paginate-bar'
  regions: ->
    return extend super(),
      navBox: '.navbox'

export default ListView

