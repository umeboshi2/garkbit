Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'

Templates = require 'tbirds/templates/basecrud'
Views = require 'tbirds/crud/basecrudviews'
navigate_to_url = require('tbirds/util/navigate-to-url').default
capitalize = require('tbirds/util/capitalize').default
PaginateBar = require('tbirds/views/paginate-bar').default

HasPageableCollection = require './pageable-view'

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
  

  
class ListView extends Marionette.View
  template: listTemplate
  ui:
    header: '.listview-header'
    itemList: '.list-group'
    paginateBar: '.paginate-bar'
  regions:
    itemList: '@ui.itemList'
    paginateBar: '@ui.paginateBar'
    navBox: '.navbox'
  onRender: ->
    view = new ItemCollectionView
      collection: @collection
    console.log "View", view
    @showChildView 'itemList', view
    view = new PaginateBar
      collection: @collection
      setKeyHandler: true
    @showChildView 'paginateBar', view
    
export default ListView

