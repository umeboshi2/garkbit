import Backbone from 'backbone'
import { View, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import navigate_to_url from 'tbirds/util/navigate-to-url'

import { NewClientView, EditClientView } from './clienteditor'
import ClientInfoView from './client-info'
import BaseInfoEditView from './base-infoedit'

getFAtoggleState = (el) ->
  if el.hasClass 'fa-toggle-off'
    return false
  else if el.hasClass 'fa-toggle-on'
    return true
  else
    throw Error("bad el", el)
    
client_yard_teplate = tc.renderable (model) ->
  tc.div '.row.listview-list-entry', ->
    tc.a href:"#sunny/yards/view/#{model.id}", model.name
    
client_view_template = tc.renderable (model) ->
  tc.div '.badge.info-toggle', ->
    tc.span '.mr-1', 'info'
    tc.i '.ml-1.pl-1.fa.fa-toggle-off'
  tc.div '.client-info-container'

  tc.div '.badge.yards-toggle', ->
    tc.span '.mr-1', "(#{model.collection.length}) yards"
    tc.i '.ml-1.pl-1.fa.fa-toggle-off'
  tc.div '.yards-container', ->

class ClientYardView extends View
  template: client_yard_teplate

class YardListView extends CollectionView
  childView: ClientYardView
  childViewContainer: '#client-yards'
  template: tc.renderable ->
    tc.div '.listview-header', ->
      tc.span 'Yards'
      tc.button '#add-yard-btn.btn.btn-primary.btn-xs.pull-right', 'Add Yard'
    tc.div '.row', ->
      tc.div "#client-yards"
      
  
class ClientMainView extends View
  template: client_view_template
  templateContext: ->
    collection: @collection
  ui:
    addyard: '#add-yard-btn'
    yards: '#client-yards'
    infoToggle: '.info-toggle'
    yardsToggle: '.yards-toggle'
    infoContainer: '.client-info-container'
    yardsContainer: '.yards-container'
  regions:
    infoContainer: '@ui.infoContainer'
    yardsContainer: '@ui.yardsContainer'
  events: ->
    'click @ui.addyard': 'add_yard'
    'click @ui.infoToggle': 'infoToggleClicked'
    'click @ui.yardsToggle': 'yardsToggleClicked'
    
  infoToggleClicked: (event) ->
    el = @ui.infoToggle.children('i')
    state = getFAtoggleState el
    @toggleInfo state
    
  toggleInfo: (state) ->
    el = @ui.infoToggle.children('i')
    if not state
      el.removeClass 'fa-toggle-off'
      el.addClass 'fa-toggle-on'
      view = new BaseInfoEditView
        model: @model
        infoView: ClientInfoView
        editView: EditClientView
      @showChildView 'infoContainer', view
    else
      el.removeClass 'fa-toggle-on'
      el.addClass 'fa-toggle-off'
      @getRegion('infoContainer').empty()
      
      
  yardsToggleClicked: (event) ->
    el = @ui.yardsToggle.children('i')
    state = getFAtoggleState el
    @toggleYards state
    
  toggleYards: (state) ->
    el = @ui.yardsToggle.children('i')
    if not state
      el.removeClass 'fa-toggle-off'
      el.addClass 'fa-toggle-on'
      view = new YardListView
        model: @model
        collection: @collection
      @showChildView 'yardsContainer', view
    else
      el.removeClass 'fa-toggle-on'
      el.addClass 'fa-toggle-off'
      @getRegion('yardsContainer').empty()
      
      
  add_yard: ->
    navigate_to_url "#sunny/yards/add/#{@model.id}"
    
module.exports = ClientMainView

