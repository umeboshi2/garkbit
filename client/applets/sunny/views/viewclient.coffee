import Backbone from 'backbone'
import { View, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import navigate_to_url from 'tbirds/util/navigate-to-url'

import { NewClientView, EditClientView } from './clienteditor'
import ClientInfoView from './client-info'
import BaseInfoEditView from './base-infoedit'
import BaseToggleView from './base-toggle'

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
  childViewContainer: '.client-yards'
  template: tc.renderable ->
    tc.div '.listview-header', ->
      tc.span 'Yards'
      tc.button '.add-yard-btn.btn.btn-primary.btn-sm.pull-right', 'Add Yard'
    tc.div '.row', ->
      tc.div ".client-yards"
  ui:
    addyard: '.add-yard-btn'
  events: ->
    'click @ui.addyard': 'addYard'

  addYard: ->
    console.log 'addYard clicked'
    
class ClientInfoEditView extends BaseInfoEditView
  infoView: ClientInfoView
  editView: EditClientView

    
regionViews =
  info: ClientInfoEditView
  yards: YardListView


regionToggleName = (reg) ->
  return "#{reg}Toggle"
regionContainerName = (reg) ->
  return "#{reg}Container"
toggleClassName = (reg) ->
  return ".#{reg}-toggle"
containerClassName = (reg) ->
  return ".#{reg}-container"
  


  
class ClientMainView extends View
  template: tc.renderable (model) ->
    tc.div '.listview-header'
    for reg of regionViews
      tc.div toggleClassName(reg)
      tc.div containerClassName(reg)
  templateContext: ->
    collection: @collection
  ui: ->
    ui =
      header: '.listview-header'
    for reg of regionViews
      ui[regionToggleName(reg)] = toggleClassName(reg)
      ui[regionContainerName(reg)] = containerClassName(reg)
    return ui
  regions: ->
    regions =
      header: '@ui.header'
    for reg of regionViews
      regions[regionToggleName(reg)] = "@ui.#{regionToggleName(reg)}"
      regions[regionContainerName(reg)] = "@ui.#{regionContainerName(reg)}"
    return regions
  onRender: ->
    for reg of regionViews
      model = new Backbone.Model
        label: reg
      view = new BaseToggleView
        className: 'btn btn-primary btn-sm'
        model: model
        name: reg
      region = regionToggleName(reg)
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
        collection: @collection
      @showChildView container, view
    
export default ClientMainView
