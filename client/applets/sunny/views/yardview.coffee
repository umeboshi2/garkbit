import _ from 'underscore'
import Backbone from 'backbone'
import { View } from 'backbone.marionette'
import tc from 'teacup'

import BootstrapFormView from 'tbirds/views/bsformview'
import navigate_to_url from 'tbirds/util/navigate-to-url'
import make_field_input_ui from 'tbirds/util/make-field-input-ui'
import {
  make_field_input
  make_field_textarea } from 'tbirds/templates/forms'

Marionette = require 'backbone.marionette'

{ EditYardView
  NewYardView } = require './yardeditor'

YardLocationView = require './yardlocation'
YardRoutineView = require './yardroutine'

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
      tc.text "#{model.sunnyclient.fullname}" || 'client'

class YardViewer extends View
  templateOrig: tc.renderable (model) ->
    tc.div '#yard-header.listview-header'
    tc.div '#location-container.listview-list-entry'
    tc.div '#yard-editor.listview-list-entry'
    tc.div '#yard-routine.listview-list-entry'
    
  template: tc.renderable (model) ->
    tc.div '#yard-header.listview-header'
    tc.div '#yard-routine.listview-list-entry'
    tc.div '#location-container.listview-list-entry'
    tc.div '#yard-editor.listview-list-entry'
    
  regions:
    header: '#yard-header'
    location: '#location-container'
    editor: '#yard-editor'
    routine: '#yard-routine'
    
    
  _show_viewclass: (region, ViewClass) ->
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
    @_show_viewclass 'header', headerClass
    @_show_viewclass 'editor', editorClass
    @_show_viewclass 'location', YardLocationView
    @_show_viewclass 'routine', YardRoutineView
    
    
export default YardViewer
