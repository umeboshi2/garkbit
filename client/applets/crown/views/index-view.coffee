import { Collection } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import JView from  'json-view'
import '../../../common/json-view.css'

makePageName = (fileName) ->
  return fileName.split('.md')[0]
  
makePageLink = (fileName) ->
  name = makePageName fileName
  return "#pages/blog/cv19/#{name}"

class LinksView extends MnView
  template: tc.renderable (model) ->
    tc.ul ->
      for link in model.links
        tc.li ->
          if link.startsWith '#pages'
            tc.span '.badge.badge-dark', ->
              tc.a href:link, ->
                tc.text link.split('#pages/blog/cv19/')[1]
          else
            tc.a href:link, link

class PageEntryView extends MnView
  template: tc.renderable (model) ->
    # console.log "template model", model
    tc.div '.row.card', ->
      tc.div '.card-body', ->
        tc.button '.links-btn.btn.btn-dark.btn-sm', ->
          tc.i '.fa.fa-toggle-down.toggle-icon'
        tc.a href:makePageLink(model.name), makePageName model.name
      tc.div '.links-view'
  ui:
    linksBtn: '.links-btn'
    linksView: '.links-view'
    toggleIcon: '.toggle-icon'
  regions:
    linksView: '@ui.linksView'
  events:
    'click @ui.linksBtn': 'linkBtnClicked'
  linkBtnClicked: ->
    region = @getRegion('linksView')
    if region.hasView()
      region.empty()
      @ui.toggleIcon.removeClass 'fa-toggle-up'
      @ui.toggleIcon.addClass 'fa-toggle-down'
    else
      @showListView()
      @ui.toggleIcon.removeClass 'fa-toggle-down'
      @ui.toggleIcon.addClass 'fa-toggle-up'
  showListView: ->
    view = new LinksView
      model: @model
    @showChildView 'linksView', view
    

class MainView extends MnView
  template: tc.renderable ->
    tc.div '.listview-header.text-center', ->
      tc.h1 "Index"
    tc.button '.refresh-btn.btn.btn-link.btn-sm', 'Refresh'
    tc.div '.index-view'
  ui:
    indexView: '.index-view'
    refreshBtn: '.refresh-btn'
  regions:
    indexView: '@ui.indexView'
  events:
    'click @ui.refreshBtn': 'refreshBtnClicked'
  showIndexView: ->
    # console.log "MODEL IS", @model
    view = new CollectionView
      childView: PageEntryView
      collection: new Collection @model.get 'pages'
    @showChildView 'indexView', view
    
  onRender: ->
    @showIndexView()
    
  refreshBtnClicked: ->
    @ui.refreshBtn.removeClass 'btn-link'
    @ui.refreshBtn.addClass 'btn-warning'
    response = @model.fetch
      data:
        nocache: Date.now()
    response.done =>
      region = @getRegion 'indexView'
      region.empty()
      @showIndexView()
      @ui.refreshBtn.removeClass 'btn-warning'
      @ui.refreshBtn.addClass 'btn-link'
      
        
  onDomRefresh2: ->
    @jsonView = new JView @model.toJSON()
    @ui.jsonView.prepend @jsonView.dom
    

export default MainView
