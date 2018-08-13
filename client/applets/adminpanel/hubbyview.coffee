$= require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
marked = require 'marked'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'

class TestModel extends AuthModel
  url: '/rest/v0/main/hubby/dbadmin/testme'

class DeleteAllModel extends AuthModel
  url: '/rest/v0/main/hubby/dbadmin/delete-all'
  
dropzone_template = tc.renderable (model) ->
  tc.div '.dropzone.card', ->
    tc.div '.card-header', ->
      tc.text 'drop a dump of meetings to upload'
    tc.div '.card-body', ->
      tc.div '.parse-btn.btn.btn-primary', style:'display:none', ->
        tc.text 'upload dropped meetings'
      tc.input '.file-input.input', type:'file'
      tc.span '.parse-chosen-btn.btn.btn-primary',
      style:'display:none', ->
        tc.text 'Parse dropped meetings'
        
  
class HubbyView extends Backbone.Marionette.View
  template: tc.renderable (model) ->
    tc.div '.listview-header', 'Hubby Dbadmin'
    tc.button '.delete-btn.btn.btn-danger', 'Delete'
    tc.button '.import-btn.btn.btn-info', 'Import'
    dropzone_template model
    
  ui:
    header: '.listview-header'
    deleteBtn: '.delete-btn'
    importBtn: '.import-btn'
    fileInput: '.file-input'
    parseBtn: '.parse-btn'
    chosenBtn: '.parse-chosen-btn'
    dropzone: '.dropzone'
    statusMsg: '.card-header'
  events:
    'dragover @ui.dropzone': 'handleDragOver'
    'dragenter @ui.dropzone': 'handleDragEnter'
    'drop @ui.dropzone': 'handleDrop'
    'click @ui.fileInput': 'fileInputClicked'
    'change @ui.fileInput': 'fileInputChanged'
    'click @ui.parseBtn': 'handleDroppedFile'
    'click @ui.chosenBtn': 'handleChosenFile'
    'click @ui.importBtn': 'importBtnClicked'
    'click @ui.deleteBtn': 'deleteBtnClicked'
    
  importBtnClicked: ->
    console.log "Importbtnclicked"
    model = new TestModel
    response = model.fetch()
    response.done ->
      console.log "MODEL", model
      MessageChannel.request "success", model.get 'result'

  deleteBtnClicked: ->
    console.log "deleteBtnClicked"
    model = new DeleteAllModel
    response = model.fetch()
    response.done ->
      MessageChannel.request 'success', model.get 'result'
      
  # https://stackoverflow.com/a/12102992
  fileInputClicked: (event) ->
    console.log "file_input_clicked", event
    @ui.fileInput.val null
    @ui.chosenBtn.hide()

  fileInputChanged: (event) ->
    console.log "file_input_changed", event
    @ui.chosenBtn.show()
    
  handleDrop: (event) ->
    event.preventDefault()
    @ui.dropzone.css 'border', '0px'
    dt = event.originalEvent.dataTransfer
    file = dt.files[0]
    #console.log 'file is', file
    @ui.statusMsg.text "File: #{file.name}"
    @droppedFile = file
    @ui.parseBtn.show()
    
  handleDragOver: (event) ->
    event.preventDefault()
    event.stopPropagation()
    
  handleDragEnter: (event) ->
    event.stopPropagation()
    event.preventDefault()
    @ui.dropzone.css 'border', '2px dotted'

  successfulParse: =>
    @ui.statusMsg.text "Parse Successful"
    #navigate_to_url "#ebcsv"
    MessageChannel.request 'success', 'successfulParse'


  fileReaderOnLoad: (event) =>
    content = event.target.result
    @ui.statusMsg.text "Retrieved file content"
    #AppChannel.request 'parse-comics-xml', content, @successfulParse
    #console.log "CONTENT", btoa content
    #window.content = content
    model = new TestModel
      content: btoa content
    response = model.save()
    response.fail ->
      MessageChannel.request 'warning', 'failed to save model'
    response.done ->
      console.log "MODEL", model
      data = model.get 'data'
      output = model.get 'output'
      MessageChannel.request 'success', "Finished import year #{data.year}"
      
      
  readFile: (file) ->
    reader = new FileReader()
    reader.onload = @fileReaderOnLoad
    #reader.readAsText file
    reader.readAsBinaryString file
    
    
  handleChosenFile: ->
    filename = @ui.fileInput.val()
    @ui.statusMsg.text "Reading chosen file...(#{filename})"
    file = @ui.fileInput[0].files[0]
    @ui.parseBtn.hide()
    @readFile file
    
  handleDroppedFile: ->
    @ui.statusMsg.text "Reading dropped file... (#{@droppedFile.name})"
    @ui.parseBtn.hide()
    @readFile @droppedFile

module.exports = HubbyView

