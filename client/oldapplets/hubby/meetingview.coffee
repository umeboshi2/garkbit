$ = require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'

tc = require 'teacup'

require 'jquery-ui/ui/widgets/draggable'

capitalize = require('tbirds/util/capitalize').default
IsEscapeModal = require('tbirds/behaviors/is-escape-modal').default

PDFMainView = require './pdfview'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'hubby'

clipboardIcon = require 'node-noto-emoji/dist/clipboard'
memoIcon = require 'node-noto-emoji/dist/memo'


class PDFModalView extends Marionette.View
  behaviors: [IsEscapeModal]
  template: tc.renderable (model) ->
    tc.div '.bg-body-d10.modal-content', ->
      tc.div '.modal-header', ->
        tc.h4 '.modal-title', 'pdf view'
        tc.button '.close', type:'button', data:{dismiss:'modal'}, ->
          tc.span "aria-hidden":"true", ->
            tc.raw '&times'
      tc.div '#mbody.modal-body', ->
        tc.canvas '.canvas'
      tc.div '.modal-footer', ->
        tc.button ".ok-button.btn.btn-primary",
        type:"button", data:{dismiss:'modal'}, ->
          tc.i '.fa.fa-check'
          tc.text ' OK'
  ui:
    canvas: '.canvas'
    body: '.modal-body'
    close_btn: '.ok-button'
  regions:
    canvas: '@ui.canvas'
    body: '@ui.body'
  onRender: ->
    view = new PDFMainView
      model: @model
    @showChildView 'body', view
    

loadPdf = (url) ->
  model = new Backbone.Model
    url: url
  app = MainChannel.request 'main:app:object'
  layout = app.getView()
  modalRegion = layout.getRegion 'modal'
  modalRegion.backdrop = true
  modalRegion.keyboard = true
  view = new PDFModalView
    model: model
  modalRegion.show view
    


make_agenda_link = (meeting, dtype='A') ->
  qry = "M=#{dtype}&ID=#{meeting.id}&GUID=#{meeting.guid}"
  prefix = "/api/dev/proxy/"
  url = "https://hattiesburg.legistar.com/View.ashx?#{qry}"
  encoded = btoa url
  #prefix = "https://cors-anywhere.herokuapp.com/"
  return "#{prefix}#{encoded}"
  
  

headerClasses = '.text-center.bg-body-d10.pl-1.pr-1.pt-1.pb-2'
headerClasses = "#{headerClasses}.border-light.rounded"
class HeaderView extends Marionette.View
  #className: 'row'
  template: tc.renderable (model) ->
    bcommon = ".col-md-2.btn.btn-sm.pr-4"
    tc.div headerClasses, style:'border:0.1rem solid', ->
      agendaStatus = model.agenda_status
      bcolor = 'warning'
      if agendaStatus == 'Final'
        bcolor = 'info'
      tc.button ".agenda-btn#{bcommon}.btn-#{bcolor}.pull-left", ->
        #tc.i '.fa.fa-newspaper-o'
        tc.img src:clipboardIcon, style:"width:1rem"
        tc.span '.text-light', href:make_agenda_link(model),
        "  Agenda: #{model.agenda_status}"
      tc.a '.col-md-8.ml-1.mr-1.text-dark', href:"#hubby", ->
        tc.h5 '.d-inline', "#{model.title}"
      minutesStatus = model.minutes_status
      bcolor = 'warning'
      tcolor = 'dark'
      if minutesStatus == 'Final'
        bcolor = 'info'
        tcolor = 'light'
      tc.button ".minutes-btn#{bcommon}.btn-#{bcolor}.pull-right", ->
        #tc.i '.fa.fa-commenting-o'
        tc.img src:memoIcon, style:"width:1rem"
        tc.span ".text-#{tcolor}", href:make_agenda_link(model, 'M'),
        "  Minutes: #{model.minutes_status}"
    tc.canvas '.canvas', style:"display:none"
    
  ui:
    agendaButton: '.agenda-btn'
    agendaLink: '.agenda-btn > span'
    minutesButton: '.minutes-btn'
    minutesLink: '.minutes-btn > span'
    canvas: '.canvas'
  events:
    'click @ui.agendaButton': 'agendaButtonClicked'
    'click @ui.agendaLink': 'agendaLinkClicked'
    'click @ui.minutesButton': 'minutesButtonClicked'
    'click @ui.minutesLink': 'minutesLinkClicked'
  onRender: ->
    agendaStatus = @model.get 'agenda_status'
    minutesStatus = @model.get 'minutes_status'
    if agendaStatus isnt 'Final'
      @ui.agendaButton.attr disabled:''
    if minutesStatus isnt 'Final'
      @ui.minutesButton.attr disabled:''

  agendaLinkClicked: (event) ->
    event.preventDefault()
  minutesLinkClicked: (event) ->
    event.preventDefault()
    
  _loadPdf: (url) ->
    console.warn "use loadPdf() instead"
    model = new Backbone.Model
      url: url
    app = MainChannel.request 'main:app:object'
    layout = app.getView()
    modalRegion = layout.getRegion 'modal'
    modalRegion.backdrop = true
    modalRegion.keyboard = true
    view = new PDFModalView
      model: model
    modalRegion.show view
    
  agendaButtonClicked: (event) ->
    event.preventDefault()
    url = @ui.agendaLink.attr('href')
    loadPdf url
  minutesButtonClicked: (event) ->
    event.preventDefault()
    url = @ui.minutesLink.attr('href')
    loadPdf url
  
class AttachmentEntry extends Marionette.View
  tagName: 'li'
  className: 'list-group-item'
  template: tc.renderable (model) ->
    url = "http://hattiesburg.legistar.com/#{model.link}"
    tc.a href:url, model.name
  events:
    'click': 'entryClicked'
    'click a': 'entryClicked'
  entryClicked: (event) ->
    event.preventDefault()
    link = @model.get 'link'
    target = btoa "https://hattiesburg.legistar.com/#{link}"
    url = "/api/dev/proxy/#{target}"
    loadPdf url
    
class AttachmentsView extends Marionette.View
  template: tc.renderable (model) ->
    count = model.attachments.length
    marker = "One Attachment"
    if count > 1
      marker = "#{count} Attachments"
    tc.span '.btn.btn-sm.btn-info', marker
    tc.div '.attachments-container', style:'display:none'
  ui:
    button: '.btn.btn-sm'
    container: '.attachments-container'
  regions:
    container: '@ui.container'
  events:
    'click @ui.button': 'buttonClicked'
  onRender: ->
    attachments = @model.get 'attachments'
    collection = new Backbone.Collection attachments
    view = new Marionette.CollectionView
      tagName: 'ul'
      className: 'list-group'
      collection: collection
      childView: AttachmentEntry
    @showChildView 'container', view
  buttonClicked: ->
    #console.log "collection view", view
    @ui.container.toggle()
    
class ActionsView extends Marionette.View
  template: tc.renderable (model) ->
    count = model.actions.length
    marker = "Action"
    if count > 1
      marker = "Actions"
    tc.span '.btn.btn-sm.btn-primary', marker
    tc.div '.actions-container', style:'display:none', ->
      tc.div '.hubby-meeting-item-actions', ->
        for action in model.actions
          nl = /\r?\n/
          lines = action.action_text.split nl
          tc.div '.hubby-action-text', width:80, ->
            # FIXME, this is used for spacing
            tc.hr()
            for line in lines
              tc.p line
  ui:
    button: '.btn.btn-sm'
    container: '.actions-container'
  events:
    'click @ui.button': 'buttonClicked'
  buttonClicked: ->
    #console.log "collection view", view
    @ui.container.toggle()
    
      
class AgendaItemView extends Marionette.View
  className: 'hubby-meeting-item'
  template: tc.renderable (model) ->
    tc.div '.header', ->
      tc.div '.hubby-meeting-item-info', ->
        agendaNum = model.mitem.agenda_num or '(--)'
        tc.div '.hubby-meeting-item-agenda-num', agendaNum
        tc.div '.hubby-meeting-item-fileid', model.file_id
        tc.div '.hubby-meeting-item-status', model.status
    tc.div '.content.hubby-meeting-item-content', ->
      tc.p '.hubby-meeting-item-text', model.title
      tc.div '.btn-group', ->
        tc.div '.agenda-item-attachments'
        tc.div '.agenda-item-actions'
  ui:
    header: '.header'
    content: '.content'
    attachments: '.agenda-item-attachments'
    actions: '.agenda-item-actions'
  regions:
    attachments: '@ui.attachments'
    actions: '@ui.actions'
  events:
    'click @ui.header': 'headerClicked'
  onRender: ->
    attachments = @model.get 'attachments'
    if attachments and attachments.length
      view = new AttachmentsView
        model: @model
      @showChildView 'attachments', view
    actions = @model.get 'actions'
    if actions and actions.length
      view = new ActionsView
        model: @model
      @showChildView 'actions', view
  headerClicked: (event) ->
    @ui.content.toggle()

class AgendaView extends Marionette.View
  template: tc.renderable (model) ->
    tc.h3 '.agenda-header.bg-body-d10', model.agendaTitle
    tc.div '.agenda-items'
  templateContext: ->
    agendaTitle: @getOption 'agendaTitle'
  ui:
    agendaItems: '.agenda-items'
  regions:
    agendaItems: '.agenda-items'
  onRender: ->
    view = new Marionette.CollectionView
      collection: @collection
      childView: AgendaItemView
    @showChildView 'agendaItems', view
    
  
##################################################################

class MeetingView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.header'
    tc.div '.public-agenda'
    tc.div '.policy-agenda'
    tc.div '.routine-agenda'
  ui:
    header: '.header'
    publicAgenda: '.public-agenda'
    policyAgenda: '.policy-agenda'
    routineAgenda: '.routine-agenda'
  regions:
    header: '@ui.header'
    publicAgenda: '@ui.publicAgenda'
    policyAgenda: '@ui.policyAgenda'
    routineAgenda: '@ui.routineAgenda'

  _showAgendaView: (region, items, title) ->
    if items.length
      view = new AgendaView
        collection: new Backbone.Collection items
        agendaTitle: title
      @showChildView region, view
      
  onRender: ->
    meeting = @model.toJSON()
    publicItems = []
    policyItems = []
    routineItems = []
    miscItems = []
    meeting.meeting_items.forEach (mitem) ->
      item = meeting.items[mitem.item_id]
      item.mitem = mitem
      if mitem.type == 'public'
        publicItems.push item
      else if mitem.type == 'policy'
        policyItems.push item
      else if mitem.type == 'routine'
        routineItems.push item
      else miscItems.push item
    hview = new HeaderView
      model: @model
    @showChildView 'header', hview
    @_showAgendaView 'publicAgenda', publicItems, 'Public Agenda'
    @_showAgendaView 'policyAgenda', policyItems, 'Policy Agenda'
    @_showAgendaView 'routineAgenda', routineItems, 'Routine Agenda'
    if miscItems.length
      mview = new AgendaView
        collection: new Backbone.Collection miscItems
        agendaTitle: 'Agenda Items'
        


   
module.exports = MeetingView
  
