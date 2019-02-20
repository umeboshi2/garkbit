Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
marked = require 'marked'
JView = require 'json-view'
require 'json-view/devtools.css'
PaginateBar = require("../../../paginate-bar").default

{ navigate_to_url } = require 'tbirds/util/navigate-to-url'

# https://www.courtlistener.com/docket/5203558/parker-v-leaf-river-cellulose-llc/
#



getTextAttribute = (model) ->
  textAttribute = null
  for attribute in ['html_with_citations', 'html_lawbox', 'html']
    if model[attribute]
      textAttribute = attribute
      break
  return textAttribute

view_template = tc.renderable (model) ->
  tc.div '.paginate-bar'
  tc.div '.cluster-list'
  tc.div '.row.listview-list-entry', ->
    tc.raw marked "# JSON view."
  tc.div ".jsonview"
  console.log "MODEL", model
  

itemTemplate = tc.renderable (model) ->
  textAttribute = getTextAttribute model
  tc.span '.mr-auto', ->
    name = model.case_name
    #name = path.basename model.absolute_url
    if model[textAttribute]
      tc.a '.text-link', href:"", ->
        tc.text "(#{textAttribute})#{name}"
    else
      tc.span name
    tc.a href:"http://127.0.0.1:9000/#{model.local_path}", ->
      tc.small ".bg-info.text-white", "  local"
    
    tc.span '.jsonview'
    tc.div '.full-text.listview-list-entry', ->
      if model[textAttribute]
        tc.raw model[textAttribute]
  
listTemplate = tc.renderable (model) ->
  tc.div '.listview-header', ->
    tc.text "Clusters"
  tc.hr()
  tc.div ".clusterlist-container.list-group"
  


class ItemView extends Marionette.View
  tagName: 'li'
  className: "list-group-item row"
  template: itemTemplate
  onDomRefresh: ->
    @jsonView = new JView @model.toJSON()
    @ui.jsonView.prepend @jsonView.dom
  ui:
    jsonView: '.jsonview'
    fullText: '.full-text'
    textToggle: '.text-link'
  FullTextVisible: false
  onRender: ->
    @ui.fullText.hide()
  events:
    'click @ui.textToggle': 'toggleTextView'
  toggleTextView: (event) ->
    event.preventDefault()
    if not @FullTextVisible
      @ui.fullText.show()
      @FullTextVisible = true
    else
      @ui.fullText.hide()
      @FullTextVisible = false
    
class ItemCollectionView extends Marionette.CollectionView
  tagName: 'ul'
  childView: ItemView
  className: 'list-group'
    

class MainView extends Marionette.View
  template: view_template
  templateContext:
    appName: 'freelaw'
  ui:
    jsonView: '.jsonview'
    clusterList: '.cluster-list'
    paginateBar: '.paginate-bar'
  regions:
    clusterList: '@ui.clusterList'
    paginateBar: '@ui.paginateBar'
  onRender: ->
    view = new ItemCollectionView
      collection: @collection
    @showChildView 'clusterList', view
    console.log "Total pages", @collection.state.totalPages
    if @collection.state.totalPages > 1
      pview = new PaginateBar
        collection: @collection
        setKeyHandler: true
      region = @getRegion 'paginateBar'
      region.show pview
      
  onDomRefresh: ->
    @jsonView = new JView @collection.toJSON()
    @ui.jsonView.prepend @jsonView.dom
      
module.exports = MainView

