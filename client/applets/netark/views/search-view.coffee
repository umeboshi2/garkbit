Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
marked = require 'marked'

BootstrapFormView = require('tbirds/views/bsformview').default
{ form_group_input_div } = require 'tbirds/templates/forms'


scrollIcon = require 'node-noto-emoji/dist/scroll'
clockIcon = require 'node-noto-emoji/dist/mantelpiece_clock'

navigate_to_url = require('tbirds/util/navigate-to-url').default
HasJsonView = require('../../../has-jsonview').default

showModels = require '../librivox-books'
    
AppChannel = Backbone.Radio.channel 'netark'

class SearchModel extends Backbone.Model
  url: "/api/dev/proxy/https://archive.org/advancedsearch.php"
  

class JsonView extends Marionette.View
  template: tc.renderable (model) ->
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
    return new Backbone.Model

  updateModel: ->
    console.log "model", @model, @ui
    @model.set 'query', @ui.query.val()
  saveModel: ->
    console.log "model", @model
    @trigger 'save:form:success', @model

class ResultEntry extends Marionette.View
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
    navigate_to_url "#netark/view/#{id}"
    
    
class ResultsView extends Marionette.View
  template: tc.renderable ->
    tc.div '.items'
  ui:
    itemList: '.items'
  regions:
    itemList: '@ui.itemList'
  onRender: ->
    #data = @model.toJSON()
    #collection = new Backbone.Collection data.response.docs
    collection = @collection
    view = new Marionette.CollectionView
      childView: ResultEntry
      collection: collection
    @showChildView 'itemList', view
    
    
  
class MainView extends Marionette.View
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
      console.log "SSSSSS", s
      view = new ResultsView
        collection: s
      window.searchResults = s
      @showChildView 'results', view
      
      

    
queryPrelingerCollection = "mediatype:collection collection:prelinger "
    
    
module.exports = MainView

