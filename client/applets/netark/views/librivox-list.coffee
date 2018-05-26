Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
marked = require 'marked'

#radioIcon = require 'node-noto-emoji/dist/radio'
radioIcon = require 'node-noto-emoji/dist/radio'
micIcon = require 'node-noto-emoji/dist/microphone'
booksIcon = require 'node-noto-emoji/dist/books'

{ navigate_to_url } = require 'tbirds/util/navigate-to-url'
HasJsonView = require '../../../has-jsonview'

showModels = require '../librivox-books'
    
class Entry extends Marionette.View
  className: 'col-md-4'
  template: tc.renderable (model) ->
    tc.div '.listview-list-entry', ->
      tc.a href:"#netark/view/#{model.id}", model.name
  ui:
    link: 'a'
  events:
    'click @ui.link': 'linkClicked'
  linkClicked: (event) ->
    #event.preventDefault()
    console.log "show", @model.id

class EntryCollectionView extends Marionette.CollectionView
  className: 'row'
  childView: Entry



class JsonView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.jsonview.listview-list-entry', style:'overflow:auto'
  behaviors:
    HasJsonView:
      behaviorClass: HasJsonView
    
class MainView extends Marionette.View
  template: tc.renderable ->
    tc.div '.listview-header', ->
      tc.img '.mr-3.mb-1', src:micIcon, style:"height:2rem;width:2rem"
      tc.text 'Librivox Audiobooks'
      tc.img '.ml-3.mb-1', src:booksIcon, style:"height:2rem;width:2rem"
    tc.div '.items'
  ui:
    itemList: '.items'
  regions:
    itemList: '@ui.itemList'
  onRender: ->
    collection = new Backbone.Collection showModels
    view = new EntryCollectionView
      collection: collection
    @showChildView 'itemList', view
  templateContext:
    appName: 'netark'
    
module.exports = MainView

