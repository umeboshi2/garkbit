import { Model } from 'backbone'
import { View } from 'backbone.marionette'
import tc from 'teacup'

import BaseToggleView from '../base-toggle'
import BaseInfoEditView from '../base-infoedit'

import { EditYardView } from './editor'
import YardLocationView from './location'
import YardRoutineView from './routine'
import YardInfoView from './info'
import YardSessionView from './sessions'


class NewHeaderView extends View
  template: tc.renderable ->
    tc.text "New Yard"

class YardHeaderView extends View
  template: tc.renderable (model) ->
    tc.text "Yard #{model.name} of "
    tc.a href:"#sunny/clients/view/#{model.sunnyclient_id}", ->
      tc.text "#{model.client.fullname}" || 'client'

class YardInfoEditView extends BaseInfoEditView
  infoView: YardInfoView
  editView: EditYardView
  
regionViews =
  location: YardLocationView
  info: YardInfoEditView
  sessions: YardSessionView
  routine: YardRoutineView
    
regionToggleName = (reg) ->
  return "#{reg}Toggle"
regionContainerName = (reg) ->
  return "#{reg}Container"
toggleClassName = (reg) ->
  return ".yard-#{reg}-toggle"
containerClassName = (reg) ->
  return ".yard-#{reg}-container"
  
class YardViewer extends View
  template: tc.renderable ->
    tc.div '.yard-header.listview-header'
    tc.div '.btn-group', ->
      for reg of regionViews
        tc.div toggleClassName(reg)
    for reg of regionViews
      tc.div containerClassName(reg)
    tc.div '.yard-editor'
  ui: ->
    ui =
      header: '.yard-header'
      editor: '.yard-editor'
    for reg of regionViews
      ui[regionToggleName(reg)] = toggleClassName(reg)
      ui[regionContainerName(reg)] = containerClassName(reg)
    return ui
  regions: ->
    regions =
      header: '@ui.header'
      editor: '@ui.editor'
    for reg of regionViews
      regions[regionToggleName(reg)] = "@ui.#{regionToggleName(reg)}"
      regions[regionContainerName(reg)] = "@ui.#{regionContainerName(reg)}"
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
      model = new Model
        label: reg
      view = new BaseToggleView
        #className: 'badge'
        className: 'btn btn-sm btn-primary'
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
