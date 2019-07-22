import _ from 'underscore'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

import Templates from 'tbirds/templates/basecrud'
import Views from 'tbirds/crud/basecrudviews'
import PaginateBar from 'tbirds/views/paginate-bar'
import BaseListView from 'tbirds/views/list-view'
import navigate_to_url from 'tbirds/util/navigate-to-url'
import capitalize from 'tbirds/util/capitalize'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'wikipages'

itemTemplate = tc.renderable (model) ->
  tc.li '.list-group-item.bg-body-d5', ->
    tc.span ->
      tc.a href:"", model.name

listTemplate = tc.renderable ->
  tc.div '.listview-header', ->
    tc.text "Wikipages"
  tc.div '.paginate-bar'
  tc.ul '.list-group'

class ItemView extends Marionette.View
  template: itemTemplate
  ui:
    item: '.list-group-item'
    link: 'a'
  events:
    'click @ui.link': 'showItem'
  showItem: (event) ->
    event.preventDefault()
    navigate_to_url "#wikipages/view/#{@model.get 'name'}"
    
class ItemCollectionView extends Marionette.CollectionView
  childView: ItemView
  

  
class ListView extends BaseListView
  ItemView: ItemView
  template: listTemplate
  ui:
    header: '.listview-header'
    itemList: '.list-group'
    paginateBar: '.paginate-bar'
  regions: ->
    return _.extend super(),
      navBox: '.navbox'

export default ListView

