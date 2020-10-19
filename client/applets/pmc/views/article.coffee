import { Radio } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import PaginateBar from 'tbirds/views/paginate-bar'
import PMCFrontMatter from './pmc-front-matter'

AppChannel = Radio.channel 'pmc'

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
    
class MainView extends MnView
  template: tc.renderable (model) ->
    tc.h3 '.text-center', "Viewing PMC#{model.id}"
    tc.div '.content'
  ui:
    content: '.content'
  regions:
    content: '@ui.content'
  onRender: ->
    collection = AppChannel.request 'make-fm-pageable'
    response = collection.fetch()
    response.done =>
      view = new SimpleEntry
        model: @model
      @showChildView 'content', view
      
export default MainView
