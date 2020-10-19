import { Model, Collection, Radio } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'
import 'spectrum-colorpicker'
import PageableCollection from 'backbone.paginator'
import PaginateBar from 'tbirds/views/paginate-bar'

import { eventIndex } from './index-models'
import './spectrum.css'

class TopicColorCollection extends PageableCollection
  mode: 'client'
  comparator: 'name'

class Entry extends MnView
  tagName: "li"
  className: 'list-group-item'
  template: tc.renderable (model) ->
    tc.div '.row', ->
      tc.span '.mr-auto', model.name
      #tc.button '.btn.btn-primary.ml-auto', 'color'
      tc.input '.form-control', tyoe:'text', value:model.value
  ui:
    button: 'button'
    input: 'input'
  events:
    'click @ui.button': 'buttonClicked'
    'change @ui.input': 'inputChanged'
  #triggers:
  #  'change @ui.input': 'input:changed'
  onRender: ->
    color = @model.get "value"
    @ui.input.spectrum()
  buttonClicked: ->
    console.log 'buttonClicked', @model.get('name')
    button = @ui.button
    picker = @ui.button.spectrum
      color: 'SkyBlue'
  inputChanged: ->
    value = @ui.input.val()
    @model.set 'value', value
    console.log "Input Changed", value
    @trigger('input:changed', @model)

class TopicCollectionView extends CollectionView
  tagName: 'ul'
  className: 'list-group input-group'
  childView: Entry
  viewComparator: 'name'
  childViewTriggers:
    'input:changed': 'input:changed'


class MainView extends MnView
  template: tc.renderable (model) ->
    tc.h3 ".text-center", "Select Topic Colors"
    tc.div '.paginate-bar'
    tc.div '.content'
  ui:
    paginateBar: '.paginate-bar'
    content: '.content'
  regions:
    paginateBar: '@ui.paginateBar'
    content: '@ui.content'
  childViewEvents:
    'input:changed': 'inputChanged'
  onRender: ->
    topics = []
    content = @model.get 'content'
    for key of content
      item =
        content[key]
      topics.push item
    collection = new TopicColorCollection topics
    pbar = new PaginateBar
      collection: collection
    @showChildView 'paginateBar', pbar
    view = new TopicCollectionView
      collection: collection
    @showChildView 'content', view
  inputChanged: (model) ->
    topics = @model.get 'content'
    data = model.toJSON()
    topics[data.name].value = data.value
    @model.save().then =>
      @render()
    
export default MainView
