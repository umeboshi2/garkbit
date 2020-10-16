import { Model, Radio } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import BootstrapFormView from 'tbirds/views/bsformview'
import { form_group_input_div } from 'tbirds/templates/forms'
import navigateToUrl from 'tbirds/util/navigate-to-url'


import scrollIcon from 'node-noto-emoji/dist/scroll'
import clockIcon from 'node-noto-emoji/dist/mantelpiece_clock'

import HasJsonView from 'common/has-jsonview'
    
AppChannel = Radio.channel 'netark'

class SearchModel extends Model
  url: "/api/dev/proxy/https://archive.org/advancedsearch.php"

if __DEV__
  console.log "SearchModel", SearchModel

class JsonView extends MnView
  template: tc.renderable ->
    tc.div '.jsonview.listview-list-entry', style:'overflow:auto'
  behaviors:
    HasJsonView:
      behaviorClass: HasJsonView
    
class SearchForm extends BootstrapFormView
  template: tc.renderable ->
    tc.form ->
      form_group_input_div
        input_id: 'input_query'
        label: 'query'
        input_attributes:
          'data-validation': 'query'
      tc.input '.btn.btn-primary', type:'submit', value:"Search"
  ui:
    query: '#input_query'
  createModel: ->
    return new Model

  updateModel: ->
    console.log "model", @model, @ui
    @model.set 'query', @ui.query.val()
  saveModel: ->
    console.log "model", @model
    @trigger 'save:form:success', @model

class ResultEntry extends MnView
  template: tc.renderable (model) ->
    tc.div '.listview-list-entry', ->
      tc.div model.title
      tc.div model.description
      tc.button '.btn.btn-sm.btn-info', 'Select'
      tc.div '.object-view'
  ui:
    objectView: '.object-view'
  regions:
    objectView: '@ui.objectView'
  events:
    'click button': 'buttonClicked'
  onRender: ->
    jview = new JsonView
      model: @model
    @showChildView 'objectView', jview
  buttonClicked: ->
    id = @model.get 'identifier'
    navigateToUrl "#netark/view/#{id}"
    
    
class ResultsView extends MnView
  template: tc.renderable ->
    tc.div '.items'
  ui:
    itemList: '.items'
  regions:
    itemList: '@ui.itemList'
  onRender: ->
    collection = @collection
    view = new CollectionView
      childView: ResultEntry
      collection: collection
    @showChildView 'itemList', view
    
    
  
class MainView extends MnView
  template: tc.renderable ->
    tc.div '.listview-header', ->
      tc.img '.mr-3.mb-1', src:scrollIcon, style:"height:2rem;width:2rem"
      tc.text 'Search the Internet Archive'
      tc.img '.ml-3.mb-1', src:clockIcon, style:"height:2rem;width:2rem"
    tc.div '.search-form'
    tc.div '.results'
  ui:
    searchForm: '.search-form'
    results: '.results'
  regions:
    searchForm: '@ui.searchForm'
    results: '@ui.results'
  onRender: ->
    view = new SearchForm
    @showChildView 'searchForm', view
  childViewEvents: ->
    'save:form:success': 'getResults'
  getResults: (model) ->
    console.log 'getResults', model
    SearchResults = AppChannel.request 'SearchResults'
    s = new SearchResults
    s.query = model.get 'query'
    response = s.fetch()
    response.done =>
      view = new ResultsView
        collection: s
      window.searchResults = s
      @showChildView 'results', view
      
      

    
queryPrelingerCollection = "mediatype:collection collection:prelinger "
if __DEV__
  console.log "queryPrelingerCollection", queryPrelingerCollection
  
export default MainView
