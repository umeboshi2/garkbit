$ = require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
marked = require 'marked'

navigate_to_url = require('tbirds/util/navigate-to-url').default
PaginateBar = require('tbirds/views/paginate-bar').default


MessageChannel = Backbone.Radio.channel 'messages'

itemTemplate = tc.renderable (model) ->
  itemBtn = '.btn.btn-sm'
  tc.li '.list-group-item.bg-body-d5', ->
    tc.span ->
      tc.a href:"", model.person.name

listTemplate = tc.renderable ->
  tc.div '.listview-header', ->
    tc.text "US Gov Roles"
  tc.div '.paginate-bar'
  tc.div '.navbox'
  tc.ul ".list-group"

class ItemView extends Marionette.View
  template: itemTemplate
  ui:
    item: '.list-group-item'
    link: 'a'
  events:
    'click @ui.link': 'showRole'
  showRole: (event) ->
    event.preventDefault()
    MessageChannel.request 'success', 'Cool!'
    
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
    @showChildView 'itemList', view
    view = new PaginateBar
      collection: @collection
      setKeyHandler: true
    @showChildView 'paginateBar', view
    
view_template = tc.renderable (model) ->
  tc.div '.row.listview-list-entry', ->
    tc.raw marked "# #{model.appName} started."
    
class MainView extends Marionette.View
  template: view_template
  templateContext:
    appName: 'usgov'
    
module.exports = ListView

