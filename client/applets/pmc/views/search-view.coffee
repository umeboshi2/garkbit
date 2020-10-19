import { Collection, Radio } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'
import _ from 'underscore'

import ButtonInput from 'common/button-input'
import PMCFrontMatter from './pmc-front-matter'

AppChannel = Radio.channel 'pmc'

class SimpleEntry extends MnView
  templateContext: ->
    hasOAIcontent: @model.hasOAIcontent()
  template: tc.renderable (model) ->
    tc.text "PMCID: PMC#{model.id} "
    if not model.hasOAIcontent
      btnClass = '.btn.btn-outline-warning.btn-sm'
      tc.button ".dl-btn#{btnClass}.fa.fa-download", ->
        ' Download Front Matter'
    tc.div '.content'
  ui:
    content: '.content'
    button: '.dl-btn'
  regions:
    content: '@ui.content'
  events:
    'click @ui.button': 'buttonClicked'
  onRender: ->
    if @model.hasOAIcontent()
      view = new PMCFrontMatter
        model: @model
      @showChildView 'content', view
  buttonClicked: ->
    thisView = @
    remoteModel = @model
    if not remoteModel.get('content')
      response = remoteModel.fetch()
      response.done ->
        id = Number remoteModel.get('id')
        content = remoteModel.get('content')
        lpromise = AppChannel.request 'save-fm-content', id, content
        lpromise.then ->
          collection = AppChannel.request 'get-fm-collection'
          cresponse = collection.fetch()
          cresponse.done ->
            lmodel = collection.get id
            thisView.model = lmodel
            view = new PMCFrontMatter
              model: lmodel
            thisView.showChildView 'content', view
            thisView.ui.button.hide()
        
      

class MainView extends MnView
  template: tc.renderable ->
    tc.div '.search-input'
    tc.div '.content'
  ui:
    searchInput: '.search-input'
    content: '.content'
    button: 'button'
    input: 'input'
  regions:
    content: '@ui.content'
    searchInput: '@ui.searchInput'
  childViewEvents:
    'input:submit': 'searchClicked'
  onRender: ->
    view = new ButtonInput
    @showChildView 'searchInput', view
  searchClicked: (options) ->
    @searchTerm options.value
  searchTerm: (term) ->
    console.log 'searchTerm', term
    model = AppChannel.request 'make-search-model', term
    response = model.fetch()
    response.done =>
      pmcModels = new Collection []
      fmCollection = AppChannel.request 'get-fm-collection'
      res = model.get 'eSearchResult'
      ids = _.map res.IdList.Id, Number
      ids.forEach (pmcid) ->
        lmodel = fmCollection.get pmcid
        if lmodel?
          console.log "LOCAL model found", lmodel
          model = lmodel
        else
          model = AppChannel.request 'make-remote-model', pmcid
        pmcModels.add model
      view = new CollectionView
        collection: pmcModels
        childView: SimpleEntry
      @showChildView 'content', view
    
export default MainView
