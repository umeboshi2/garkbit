import _ from 'underscore'
import Backbone from 'backbone'
import { View } from 'backbone.marionette'
import tc from 'teacup'

import BaseMapView from 'tbirds/views/base-map'

import { EditYardView, NewYardView } from './editor'

import YardLocationView from './location'
import YardRoutineView from './routine'

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

onOffText = (state) ->
  if state
    return 'on'
  else
    return 'off'
    

class BaseToggleView extends View
  state: false
  templateContext: ->
    toggleState: @state
    toggleText: onOffText @state
  template: tc.renderable (model) ->
    tc.span '.mr-1', model.label
    tc.i ".ml-1.pl-1.fa.fa-toggle-#{model.toggleText}"
  events:
    click: 'toggleState'
  toggleState: ->
    if @state
      @state = false
    else
      @state = true
    @render()
    @trigger 'toggle', @
  

regionViews =
  location: YardLocationView
  editor: EditYardView
  routine: YardRoutineView
  
class YardViewer extends View
  template: tc.renderable (model) ->
    tc.div '.yard-header.listview-header'
    for reg of regionViews
      tc.div ".yard-#{reg}-toggle"
      tc.div ".yard-#{reg}-container"
    tc.div '.yard-editor'
  regionToggleName: (reg) ->
    return "#{reg}Toggle"
  regionContainerName: (reg) ->
    return "#{reg}Container"
  ui: ->
    ui =
      header: '.yard-header'
      editor: '.yard-editor'
    for reg of regionViews
      ui[@regionToggleName(reg)] = ".yard-#{reg}-toggle"
      ui[@regionContainerName(reg)] = ".yard-#{reg}-container"
    return ui
  regions: ->
    regions =
      header: '@ui.header'
      editor: '@ui.editor'
    for reg of regionViews
      regions[@regionToggleName(reg)] = "@ui.#{@regionToggleName(reg)}"
      regions[@regionContainerName(reg)] = "@ui.#{@regionContainerName(reg)}"
    return regions
    
  _show_viewclass: (region, ViewClass) ->
    view = new ViewClass
      model: @model
    @showChildView region, view

  showHeader: ->
    if @model.has 'name'
      headerClass = YardHeaderView
    else
      headerClass = NewHeaderView
    @_show_viewclass 'header', headerClass
    
  onRender: ->
    @showHeader()
    for reg of regionViews
      model = new Backbone.Model
        label: reg
      view = new BaseToggleView
        className: 'badge'
        model: model
        name: reg
      region = "#{reg}Toggle"
      @showChildView region, view
      
  childViewEvents:
    'toggle': 'childToggled'

  childToggled: (view) ->
    name = view.getOption 'name'
    container = "#{name}Container"
    # state has already changed before event triggered
    # so we flip it with "not"
    state = not view.getOption 'state'
    #console.log "view state was", state
    if state
      region = @getRegion container
      region.empty()
    else
      view = new regionViews[name]
        model: @model
      @showChildView container, view

export default YardViewer
