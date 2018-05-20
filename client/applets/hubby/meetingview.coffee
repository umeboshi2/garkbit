$ = require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'

tc = require 'teacup'

require 'jquery-ui/ui/widgets/draggable'

capitalize = require('tbirds/util/capitalize').default
IsEscapeModal = require('tbirds/behaviors/is-escape-modal').default

PDFMainView = require './pdfview'
PDFObject = require 'pdfobject'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'hubby'

#################################
# templates
#################################

compare_property_function = (property) ->
  (a,b) ->
    if a[property] < b[property]
      return -1
    if a[property] > b[property]
      return 1
    return 0

compare_meeting_item = compare_property_function 'item_order'

make_meeting_items = (meeting) ->
  meeting_items = []
  items = meeting.items
  for item in meeting.meeting_items
    mitem = items[item.item_id]
    meeting_items.push mitem
  meeting_items.sort compare_meeting_item
  meeting_items

make_item_object = (meeting) ->
  Items = {}
  for item in meeting.items
    Items[item.id] = item
  Items

make_agenda_link = (meeting, dtype='A') ->
  qry = "M=#{dtype}&ID=#{meeting.id}&GUID=#{meeting.guid}"
  return "/api/dev/proxy/http://hattiesburg.legistar.com/View.ashx?#{qry}"


make_attachments_section = tc.renderable (item) ->
  if item.attachments != undefined and item.attachments.length
    marker = "One Attachment"
    if item.attachments.length > 1
      marker = "#{item.attachments.length} Attachments"
    tc.span '.btn.btn-sm.hubby-meeting-item-attachment-marker', marker
    tc.div '.hubby-meeting-item-attachments', ->
      tc.div '.hubby-meeting-item-attachments-header', 'Attachments'
      for att in item.attachments
        tc.div ->
          url = "http://hattiesburg.legistar.com/#{att.link}"
          tc.a href:url, att.name
  
make_actions_section = tc.renderable (item) ->
  if item.actions? and item.actions.length
    marker = 'Action'
    if item.actions.length > 1
      marker = 'Actions'
    tc.span '.btn.btn-sm.hubby-meeting-item-action-marker', marker
    tc.div '.hubby-meeting-item-actions', ->
      for action in item.actions
        nl = /\r?\n/
        lines = action.action_text.split nl
        tc.div '.hubby-action-text', width:80, ->
          # FIXME, this is used for spacing
          tc.hr()
          for line in lines
            tc.p line
  
make_meeting_item_list = tc.renderable (meeting) ->
  tc.div '.hubby-meeting-item-list', ->
    agenda_section = 'start'
    for mitem in meeting.meetingItems
      item = mitem
      if mitem.type != agenda_section and mitem.type
        agenda_section = mitem.type
        section_header = capitalize agenda_section + ' Agenda'
        tc.h3 '.hubby-meeting-agenda-header', section_header
      tc.div '.hubby-meeting-item', ->
        tc.div '.hubby-meeting-item-info', ->
          agenda_num = mitem.agenda_num
          if not agenda_num
            agenda_num = "(--)"
          tc.div '.hubby-meeting-item-agenda-num', agenda_num
          tc.div '.hubby-meeting-item-fileid', item.file_id
          tc.div '.hubby-meeting-item-status', item.status
        tc.div '.hubby-meeting-item-content', ->
          tc.p '.hubby-meeting-item-text', item.title
          tc.div ->
            make_attachments_section item
            make_actions_section item

          
show_meeting_template = tc.renderable (meeting) ->
  meeting.meetingItems = make_meeting_items meeting
  meeting.Items = make_item_object meeting
  window.meeting = meeting
  #tc.div '.hubby-meeting-header', ->
  make_meeting_header meeting
  make_meeting_item_list meeting


class ShowMeetingView extends Backbone.Marionette.View
  template: show_meeting_template
  
  onDomRefresh: () ->
    attachments = $ '.hubby-meeting-item-attachments'
    attachments.hide()
    actions = $ '.hubby-meeting-item-actions'
    actions.hide()
    attachments.draggable()
    $('.hubby-meeting-item-info').click ->
      $(this).next().toggle()
    $('.hubby-meeting-item-attachment-marker').click ->
      $(this).next().toggle()
    $('.hubby-meeting-item-action-marker').click ->
      $(this).next().toggle()


#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

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
  onDomRefresh2: ->
    url = @model.get 'url'
    PDFObject.embed url, @ui.canvas.get()
    

make_agenda_link = (meeting, dtype='A') ->
  qry = "M=#{dtype}&ID=#{meeting.id}&GUID=#{meeting.guid}"
  return "/api/dev/proxy/http://hattiesburg.legistar.com/View.ashx?#{qry}"


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
        tc.i '.fa.fa-newspaper-o'
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
        tc.i '.fa.fa-commenting-o'
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
    @_loadPdf url
  minutesButtonClicked: (event) ->
    event.preventDefault()
    url = @ui.minutesLink.attr('href')
    @_loadPdf url
  
  
class AgendaItemView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.header', ->
      tc.text model.name
    tc.div '.content.listview-list-entry', ->
      tc.text model.title
      
  ui:
    header: '.header'
    content: '.content'

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
  
