import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'dbadmin'

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'

importUrl = '/api/dev/dbadmin/import-models'

class ImportModels extends AuthModel
  url: importUrl

  
  
dropzoneTemplate = tc.renderable (model) ->
  tc.div '.dropzone.card', ->
    tc.div '.card-header', ->
      tc.text 'drop a dump of the database to upload'
    tc.div '.card-body', ->
      tc.div '.parse-btn.btn.btn-primary', style:'display:none', ->
        tc.text 'upload dropped data dump'
      tc.input '.file-input.input.btn.btn-success', type:'file'
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

  
export default DropZoneView

