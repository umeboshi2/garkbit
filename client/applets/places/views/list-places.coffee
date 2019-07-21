import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'

import BaseListView from 'tbirds/views/list-view'
import PaginateBar from 'tbirds/views/paginate-bar'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'places'

class ItemView extends Marionette.View
  template: tc.renderable (model) ->
    tc.span '.mr-auto', ->
      tc.a href:"#places/view/#{model.id}", model.name
  tagName: 'li'
  className: ->
    "list-group-item location-item row"

class ListView extends BaseListView
  ItemView: ItemView
  template: tc.renderable ->
    tc.div '.listview-header', ->
      tc.text "Your Places"
    tc.hr()
    tc.div '.paginate-bar'
    tc.div '.places-container'
  ui: ->
    itemList: '.places-container'
    paginateBar: '.paginate-bar'

export default ListView

