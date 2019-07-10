Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
marked = require 'marked'
JView = require 'json-view'
require 'json-view/devtools.css'
FileSaver = require 'file-saver'
b64toBlob = require 'b64-to-blob'

{ navigate_to_url } = require 'tbirds/util/navigate-to-url'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'dbadmin'

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'

exportUrl = '/api/dev/dbadmin/export-models'
importUrl = '/api/dev/dbadmin/import-models'
deleteUrl = '/api/dev/dbadmin/delete-models'

class ExportModels extends AuthModel
  url: exportUrl

class ImportModels extends AuthModel
  url: importUrl

class DeleteAllModel extends AuthModel
  url: deleteUrl
  
dropzoneTemplate = tc.renderable (model) ->
  tc.div '.dropzone.card', ->
    tc.div '.card-header', ->
      tc.text 'drop a dump of the database to upload'
    tc.div '.card-body', ->
      tc.div '.parse-btn.btn.btn-primary', style:'display:none', ->
        tc.text 'upload dropped data dump'
      tc.input '.file-input.input', type:'file'
      tc.span '.parse-chosen-btn.btn.btn-primary',
      style:'display:none', ->
        tc.text 'Parse dropped meetings'
        
  
class DropZoneView extends Marionette.View
  template: dropzoneTemplate
  ui:
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
    MessageChannel.request 'success', 'successfulParse'

  fileReaderOnLoad: (event) =>
    content = event.target.result
    filename = event.target.fileObject.name
    @ui.statusMsg.text "Retrieved file content of #{filename}"
    model = new ImportModels
      content: btoa content
    response = model.save()
    @ui.statusMsg.text "Uploaded #{filename}."
    response.fail ->
      MessageChannel.request 'warning', 'failed to save model'
    response.done =>
      console.log "MODEL", model
      data = model.get 'data'
      output = model.get 'output'
      MessageChannel.request 'success', "Finished import"
      @ui.statusMsg.text "Finished import"
      
      
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

viewTemplate = tc.renderable (model) ->
  tc.div '.row.listview-header', 'Garkbit Dbadmin'
  tc.button '.delete-btn.btn.btn-danger', 'Delete'
  tc.button '.export-btn.btn.btn-info', 'Export'
  tc.div '.row.status-message'
  tc.div '.row.dropfile-view'
  
class MainView extends Marionette.View
  template: viewTemplate
  templateContext:
    appName: 'dbadmin'
  ui:
    exportBtn: '.export-btn'
    deleteBtn: '.delete-btn'
    statusMsg: '.status-message'
    dropFile: '.dropfile-view'
  regions:
    dropFile: '@ui.dropFile'
  events:
    'click @ui.exportBtn': 'exportDatabase'
    'click @ui.deleteBtn': 'deleteBtnClicked'
    
  onRender: ->
    view = new DropZoneView
    @showChildView 'dropFile', view
    
  deleteBtnClicked: ->
    console.log "deleteBtnClicked"
    model = new DeleteAllModel
    response = model.fetch()
    response.done ->
      MessageChannel.request 'success', model.get 'result'
      
  exportDatabase: ->
    @ui.statusMsg.text "Exporting database..."
    model = new ExportModels
    response = model.fetch()
    response.done =>
      cksum = model.get 'sha256sum'
      env = 'production'
      if __DEV__
        env = 'development'
      options =
        filename: "dbdump-#{env}-#{cksum.slice(0, 5)}.json.xz"
        type: 'application/octet-stream'
        data: model.get 'content'
      blob = b64toBlob options.data, options.type
      console.log "BLOB", blob
      FileSaver.saveAs(blob, options.filename)
      MessageChannel.request 'success', "Exported database...."
      @ui.statusMsg.text ''
  IgnoreonDomRefresh: ->
    @jsonView = new JView @model.toJSON()
    @ui.jsonView.prepend @jsonView.dom
    
module.exports = MainView

