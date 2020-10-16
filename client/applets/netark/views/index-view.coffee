import { Collection } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import scrollIcon from 'node-noto-emoji/dist/scroll'
import clockIcon from 'node-noto-emoji/dist/mantelpiece_clock'
import dangerIcon from 'node-noto-emoji/dist/radioactive_sign'

import headerTemplate from './header-template'


# searchURl = "https://archive.org/services/search/v1/scrape?q=more_animation&count=100" # noqa

pages = [
  {
    id: 'otrr'
    name: 'Old Time Radio'
  },{
    id: 'librivox'
    name: 'Librivox Audiobooks'
  },{
    id: 'scifi'
    name: 'SciFi Movies'
  },{
    id: 'misc'
    name: 'Misc Stuff'
  }
]

class Entry extends MnView
  className: 'col-md-4'
  template: tc.renderable (model) ->
    tc.div '.listview-list-entry', ->
      tc.a href:"#netark/#{model.id}/list", model.name
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

warning = "This is an experimental app. Many parts will not \
work properly."
    
class MainView extends MnView
  template: tc.renderable ->
    headerTemplate
      text: "Internet Archive"
      leftIcon: scrollIcon
      rightIcon: clockIcon
    tc.div '.row.col-sm-4.offset-sm-4', ->
      tc.img src:dangerIcon
      tc.span warning
    tc.div '.items'
  ui:
    itemList: '.items'
  regions:
    itemList: '@ui.itemList'
  onRender: ->
    collection = new Collection pages
    console.log "Collection", collection
    view = new EntryCollectionView
      collection: collection
    @showChildView 'itemList', view
  templateContext:
    appName: 'netark'

export default MainView

