import { Radio, history as bbhistory } from 'backbone'
import { View } from 'backbone.marionette'
import tc from 'teacup'
import FileSaver from 'file-saver'

import DropZoneView from './dropzone'
import makeBlob from '../make-blob'


MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'

AuthModel = MainChannel.request 'main:app:AuthModel'

exportUrl = '/api/dev/dbadmin/export-models'
deleteUrl = '/api/dev/dbadmin/delete-models'

class ExportModels extends AuthModel
  url: exportUrl

class DeleteAllModel extends AuthModel
  url: deleteUrl

class MainView extends View
  template: tc.renderable ->
    tc.div '.row.listview-header', ->
      tc.text 'Garkbit Dbadmin'
    tc.div '.row', ->
      tc.div '.col', ->
        tc.button '.delete-btn.btn.btn-danger', 'Delete'
        tc.button '.exportdb-btn.btn.btn-info', 'Export'
        tc.button '.list-btn.btn.btn-primary', 'List'
    tc.div '.row', ->
      tc.div '.col', ->
        tc.div '.listview-header', 'User Locations'
        tc.div '.list-container'
      tc.div '.col', ->
        tc.div '.row.status-message'
        tc.div '.row.dropfile-view'
  ui:
    exportBtn: '.exportdb-btn'
    deleteBtn: '.delete-btn'
    listBtn: '.list-btn'
    statusMsg: '.status-message'
    dropFile: '.dropfile-view'
    listContainer: '.list-container'
  regions:
    dropFile: '@ui.dropFile'
    listContainer: '@ui.listContainer'
  events:
    'click @ui.exportBtn': 'exportDatabase'
    'click @ui.deleteBtn': 'deleteBtnClicked'
    'click @ui.listBtn': 'listBtnClicked'
  onRender: ->
    view = new DropZoneView
    @showChildView 'dropFile', view
  deleteBtnClicked: ->
    console.log "deleteBtnClicked"
    model = new DeleteAllModel
    response = model.fetch()
    response.done ->
      MessageChannel.request 'success', model.get 'result'
  listBtnClicked: ->
    bbhistory.navigate '#dbadmin/models', trigger: true
  exportDatabase: ->
    @ui.statusMsg.text "Exporting database..."
    model = new ExportModels
    response = model.fetch()
    response.done =>
      options = makeBlob model
      FileSaver.saveAs(options.blob, options.filename)
      MessageChannel.request 'success', "Exported database...."
      @ui.statusMsg.text "sha256: #{model.get('sha256sum')}"
      
export default MainView
