import $ from 'jquery'
import { Radio, history } from 'backbone'
import { View } from 'backbone.marionette'
import tc from 'teacup'

import 'tbirds/regions/bsmodal'
{ modal_close_button } = require 'tbirds/templates/buttons'

MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'

AuthModel = MainChannel.request 'main:app:AuthModel'

########################################
BaseItemView = MainChannel.request 'crud:view:item'
BaseListView = MainChannel.request 'crud:view:list'

templateOptions =
  name: 'summary'
  entryField: 'name'
  routeName: 'muppy'
  
listTemplate = MainChannel.request 'crud:template:list', templateOptions

itemTemplateFactory = (opts) ->
  tc.renderable (model) ->
    itemBtn = ".btn.btn-secondary.btn-sm"
    tc.span '.mr-auto', ->
      href = "##{opts.routeName}/#{opts.name}/view/#{model.id}"
      label = "#{model[opts.entryField]} - #{model.content.length}"
      tc.a href: href, label
    tc.span '.ml-auto.btn-group.pull-right', ->
      tc.button ".mark-item.#{itemBtn}.btn-info.fa.fa-spinner", ' mark'
      tc.button ".edit-item.#{itemBtn}.btn-info.fa.fa-edit", ' edit'
      tc.button ".delete-item.#{itemBtn}.btn-danger.fa.fa-close", ' delete'

itemTemplate = itemTemplateFactory templateOptions

markedModels = []

modalTemplate = tc.renderable (model) ->
  tc.div '.modal-dialog.modal-lg', ->
    tc.div '.modal-content', ->
      tc.h3 '.center', "Diff of Summaries"
      tc.div '.modal-body', ->
        tc.pre style:"font-size:.2rem;", model.output
      tc.div '.modal-footer', ->
        tc.ul '.list-inline', ->
          tc.li "#confirm-delete-button", ->
            modal_close_button 'OK', 'check'
          tc.li "#cancel-delete-button", ->
            modal_close_button 'Cancel'
    
class ShowDiffModal extends View
  template: modalTemplate
  onDomRefresh: ->
    #$('#modal').modal('handleUpdate')
    $('#modal').addClass('fade')
    
class ItemView extends BaseItemView
  route_name: 'muppy'
  template: itemTemplate
  item_type: 'summary'

  ui: ->
    obj = super()
    obj.markItem = '.mark-item'
    return obj
    
  events: ->
    obj = super()
    obj['click @ui.markItem'] = 'markItemClicked'
    return obj

  markItemClicked: ->
    if markedModels.length <= 1
      markedModels.push @model
      @ui.markItem.removeClass('btn-info')
      @ui.markItem.addClass('btn-primary')
    else
      @ui.markItem.hide()
    if markedModels.length == 2
      $('.mark-item.btn-info').hide()
    console.log markedModels

class DiffModel extends AuthModel
  url: 'api/dev/memdiff'
  
  
    
class ListView extends BaseListView
  onDomRefresh: ->
    while markedModels.length
      markedModels.pop()
  template: tc.renderable () ->
    tc.button '.add-summary-button.btn.btn-primary', 'Add summary'
    tc.button '.diff-summaries-button.btn.btn-primary', 'Show diff'
    listTemplate()
  ui:
    addSummaryBtn: '.add-summary-button'
    showDiffBtn: '.diff-summaries-button'
  events:
    'click @ui.addSummaryBtn': 'addSummaryClicked'
    'click @ui.showDiffBtn': 'showDiffClicked'
  route_name: 'muppy'
  childView: ItemView
  template2: listTemplate
  childViewContainer: '#summary-container'
  item_type: 'summary'
  addSummaryClicked: ->
    history.navigate '#muppy', trigger:true
  showDiffClicked: ->
    console.log "MARKEDMODELS", markedModels
    m1 = markedModels[0]
    m2 = markedModels[1]
    diffm = new DiffModel
      sum1: m1.id
      sum2: m2.id
    response = diffm.save()
    response.done =>
      view = new ShowDiffModal
        model: diffm
      @_show_modal view, false
      MessageChannel.request 'info', 'diff should be performed'
      console.log diffm.attributes
      
    response.fail ->
      MessageChannel.request 'danger', 'something bad happened'
      
  _show_modal: (view, backdrop) ->
    app = MainChannel.request 'main:app:object'
    layout = app.getView()
    modal_region = layout.getRegion 'modal'
    modal_region.backdrop = backdrop
    modal_region.show view
  
export default ListView
