$= require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
marked = require 'marked'
FileSaver = require 'file-saver'
b64toBlob = require 'b64-to-blob'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'

class TestModel extends AuthModel
  url: '/rest/v0/main/hubby/dbadmin/testme'

class DeleteAllModel extends AuthModel
  url: '/rest/v0/main/hubby/dbadmin/delete-all'

class DbExportModel extends AuthModel
  url: '/rest/v0/main/hubby/dbadmin/testme'
  
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
    tc.button '.export-btn.btn.btn-info', 'Export'
    dropzone_template model
    
  ui:
    header: '.listview-header'
    deleteBtn: '.delete-btn'
    fileInput: '.file-input'
    parseBtn: '.parse-btn'
    chosenBtn: '.parse-chosen-btn'
    exportBtn: '.export-btn'
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
    'click @ui.deleteBtn': 'deleteBtnClicked'
    'click @ui.exportBtn': 'exportBtnClicked'
    
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
    filename = event.target.fileObject.name
    @ui.statusMsg.text "Retrieved file content of #{filename}"
    model = new TestModel
      content: btoa content
    response = model.save()
    @ui.statusMsg.text "Uploaded #{filename}."
    response.fail ->
      MessageChannel.request 'warning', 'failed to save model'
    response.done =>
      console.log "MODEL", model
      data = model.get 'data'
      output = model.get 'output'
      MessageChannel.request 'success', "Finished import year #{data.year}"
      @ui.statusMsg.text "Finished import year #{data.year}"
      
      
  readFile: (file) ->
    reader = new FileReader()
    reader.onload = @fileReaderOnLoad
    reader.fileObject = file
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

  exportBtnClicked: ->
    @ui.statusMsg.text "Exporting database..."
    model = new DbExportModel
    response = model.fetch()
    response.done ->
      options =
        filename: 'dbdump.json.xz'
        type: 'application/octet-stream'
        data: model.get 'content'
      console.log "content", options.data
      blob = b64toBlob options.data, options.type
      console.log "BLOB", blob
      FileSaver.saveAs(blob, options.filename)
      MessageChannel.request 'primary', "Exported database...."
      console.log "exported", model
      
    
module.exports = HubbyView

