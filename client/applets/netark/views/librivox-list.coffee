import { Collection } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import micIcon from 'node-noto-emoji/dist/microphone'
import booksIcon from 'node-noto-emoji/dist/books'

import showModels from '../librivox-books'
import headerTemplate from './header-template'

class Entry extends MnView
  className: 'col-md-4'
  template: tc.renderable (model) ->
    tc.div '.listview-list-entry', ->
      tc.a href:"#netark/view/#{model.id}", model.name
  ui:
    link: 'a'
  events:
    'click @ui.link': 'linkClicked'
  linkClicked: ->
    #event.preventDefault()
    console.log "show", @model.id

class EntryCollectionView extends CollectionView
  className: 'row'
  childView: Entry

class MainView extends MnView
  template: tc.renderable ->
    headerTemplate
      text: 'Librivox Audiobooks'
      leftIcon: micIcon
      rightIcon: booksIcon
    tc.div '.items'
  ui:
    itemList: '.items'
  regions:
    itemList: '@ui.itemList'
  onRender: ->
    collection = new Collection showModels
    view = new EntryCollectionView
      collection: collection
    @showChildView 'itemList', view
  templateContext:
    appName: 'netark'
    
export default MainView
