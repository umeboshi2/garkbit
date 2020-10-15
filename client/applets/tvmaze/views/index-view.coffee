import { View as MnView } from 'backbone.marionette'
import tc from  'teacup'
import marked from 'marked'

import ConfirmDeleteModal from './confirm-delete-modal'
import SearchFormView from './search-show-view'
import SearchResultsView from './show-search-results'

import mainText from 'raw-loader!../index-doc.md'


DefaultStaticDocumentTemplate = tc.renderable ->
  tc.article '.document-view.content', ->
    tc.div '.body', ->
      tc.h1 'TV Maze API Demo'
      tc.div '.search-form.listview-list-entry'
      tc.div '.search-results'
      tc.raw marked mainText
      
class MainView extends MnView
  template: DefaultStaticDocumentTemplate
  templateContext:
    appName: 'tvmaze'
  ui:
    searchForm: '.search-form'
    searchResults: '.search-results'
  childViewEvents:
    'save:form:success': 'doSomething'
  doSomething: (model) ->
    rview = @getChildView 'searchResults'
    if not rview.ui.header.is ':visible'
      rview.ui.header.show()
    msg = "#{rview.collection.length}  results for \"#{model.get 'tvshow'}\""
    rview.triggerMethod 'set:header', msg
  regions:
    searchForm: '@ui.searchForm'
    searchResults: '@ui.searchResults'
  onRender: ->
    view = new SearchFormView
      collection: @collection
    @showChildView 'searchForm', view
    rview = new SearchResultsView
      collection: @collection
    @showChildView 'searchResults', rview

export default MainView
export { ConfirmDeleteModal }

