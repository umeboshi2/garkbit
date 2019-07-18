import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'

{ navigate_to_url } = require 'tbirds/util/navigate-to-url'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'places'

itemTemplate = tc.renderable (model) ->
  itemButton = '.btn.btn-secondary.btn-sm'
  tc.span '.mr-auto', ->
    tc.a href:"#places/view/#{model.id}", model.name

class ItemView extends Marionette.View
  template: itemTemplate
  tagName: 'li'
  className: ->
    "list-group-item location-item row"

listTemplate = tc.renderable ->
  tc.div '.listview-header', ->
    tc.text "Your Places"
  tc.hr()
  tc.div '.places-container.list-group'


class ListView extends Marionette.View
  template: listTemplate
  ui: ->
    itemList: '.places-container'
  regions: ->
    itemList: '@ui.itemList'
  onRender: ->
    view = new Marionette.CollectionView
      tagName: 'ul'
      className: 'list-group'
      collection: @collection
      childView: ItemView
    @showChildView 'itemList', view
    

export default ListView

