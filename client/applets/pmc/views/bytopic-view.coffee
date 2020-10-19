import { Radio } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'
import PageableCollection from 'backbone.paginator'
import { capitalize } from 'lodash'

import { FrontMatterModel } from '../dbchannel/front-matter'
import PaginateBar from 'tbirds/views/paginate-bar'
import PMCFrontMatter from './pmc-front-matter'

AppChannel = Radio.channel 'pmc'

class ClientCollection extends PageableCollection
  mode: 'client'
  
class SimpleEntry extends MnView
  templateContext: ->
    hasOAIcontent: @model.hasOAIcontent()
  template: tc.renderable (model) ->
    if not model.hasOAIcontent
      tc.div model.id
    tc.div '.content'
  ui:
    content: '.content'
  regions:
    content: '@ui.content'
  onRender: ->
    if @model.hasOAIcontent()
      view = new PMCFrontMatter
        model: @model
      @showChildView 'content', view
  childViewTriggers:
    'model:destroyed': 'model:destroyed'
    
class MainView extends MnView
  templateContext: ->
    topicName: @getOption 'name'
  template: tc.renderable (model) ->
    tc.h3 '.text-center', "#{capitalize model.topicName} PMC Papers"
    tc.div '.paginate-bar'
    tc.div '.content'
  ui:
    content: '.content'
    paginateBar: '.paginate-bar'
  regions:
    content: '@ui.content'
    paginateBar: '@ui.paginateBar'
  childViewTriggers:
    'model:destroyed': 'model:destroyed'
  childViewEvents:
    'model:destroyed': 'onModelDestroyed'
  triggerMethods:
    'model:destroyed': 'onModelDestroyed'
    
  onRender: ->
    #collection = AppChannel.request 'make-fm-pageable'
    articles = AppChannel.request 'get-fm-collection'
    collection = new ClientCollection
    @collection.each (model) ->
      collection.add articles.get(model.get('pmcid'))
    pbar = new PaginateBar
      collection: collection
    @showChildView 'paginateBar', pbar
    view = new CollectionView
      collection: collection
      childView: SimpleEntry
    @showChildView 'content', view
  onModelDestroyed: ->
    console.log "onModelDestroyed"
    
export default MainView
