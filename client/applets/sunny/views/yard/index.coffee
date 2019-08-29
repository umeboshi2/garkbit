import _ from 'underscore'
import Backbone from 'backbone'
import { View } from 'backbone.marionette'
import tc from 'teacup'

import BaseMapView from 'tbirds/views/base-map'

import { EditYardView, NewYardView } from './yardeditor'

YardLocationView = require './yardlocation'
import YardRoutineView from './yardroutine'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
SunnyChannel = Backbone.Radio.channel 'sunny'

class NewHeaderView extends View
  template: tc.renderable (model) ->
    tc.text "New Yard"

class YardHeaderView extends View
  template: tc.renderable (model) ->
    tc.text "Yard #{model.name} of "
    tc.a href:"#sunny/clients/view/#{model.sunnyclient_id}", ->
      tc.text "#{model.client.fullname}" || 'client'

class YardViewer extends View
  template: tc.renderable (model) ->
    tc.div '.yard-header.listview-header'
    tc.div '.yard-routine'
    tc.div '.location-container'
    tc.div '.yard-editor'
    
  regions:
    header: '.yard-header'
    location: '.location-container'
    editor: '.yard-editor'
    routine: '.yard-routine'
    
    
  _show_viewclass: (region, ViewClass) ->
  showViewClass: (region, ViewClass) ->
    view = new ViewClass
      model: @model
    @showChildView region, view

  onRender: ->
    if @model.has 'name'
      headerClass = YardHeaderView
      editorClass = EditYardView
    else
      headerClass = NewHeaderView
      editorClass = NewYardView
    @showViewClass 'header', headerClass
    @showViewClass 'editor', editorClass
    @showViewClass 'location', YardLocationView
    @showViewClass 'routine', YardRoutineView
    
    
export default YardViewer
