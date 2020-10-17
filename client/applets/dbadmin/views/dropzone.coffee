import { Radio } from 'backbone'
import BaseDropzoneView from 'tbirds/views/simple-file-input'

MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'

AuthModel = MainChannel.request 'main:app:AuthModel'
importUrl = '/api/dev/dbadmin/import-models'
class ImportModels extends AuthModel
  url: importUrl

class DropZoneView extends BaseDropzoneView
  parseMsg: 'Parse the file'
  headerMsg: 'drop a dump of the database to upload'
  inputId: 'dbdump-input'
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
      #data = model.get 'data'
      #output = model.get 'output'
      MessageChannel.request 'success', "Finished import"
      @ui.statusMsg.text "Finished import"
      
export default DropZoneView

