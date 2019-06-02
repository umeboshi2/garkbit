import Backbone from 'backbone'
import { View, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import navigate_to_url from 'tbirds/util/navigate-to-url'

client_yard_teplate = tc.renderable (model) ->
  tc.div '.row.listview-list-entry', ->
    tc.a href:"#sunny/yards/view/#{model.id}", model.name
    
client_view_template = tc.renderable (model) ->
  #tc.div '.row.listview-list-entry', ->
  tc.div '.row.listview-list-entry', ->
    tc.table '.table', ->
      tc.thead '.table-info', ->
        tc.tr ->
          tc.th scope:'col', "Option"
          tc.th scope:'col', "Value"
      tc.tr ->
        tc.td "Name:"
        tc.td "#{model.name}"
      tc.tr ->
        tc.td "Full Name:"
        tc.td "#{model.fullname}"
      tc.tr ->
        tc.td "Email:"
        tc.td "#{model.email}"
      tc.tr ->
        tc.td "Description"
        tc.td model.description
  tc.div '.row', ->
    tc.div '.listview-header', ->
      tc.span 'Yards'
      tc.button '#add-yard-btn.btn.btn-default.btn-xs.pull-right', 'Add Yard'
  tc.div '.row', ->
    tc.div "#client-yards"


class ClientYardView extends View
  template: client_yard_teplate
  
class ClientMainView extends CollectionView
  childView: ClientYardView
  childViewContainer: '#client-yards'
  template: client_view_template
  ui:
    addyard: '#add-yard-btn'
    yards: '#client-yards'
  events: ->
    'click @ui.addyard': 'add_yard'

  add_yard: ->
    navigate_to_url "#sunny/yards/add/#{@model.id}"
    
module.exports = ClientMainView

