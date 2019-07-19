import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import JView from 'json-view'
import 'json-view/devtools.css'

import FileSaver from 'file-saver'
import b64toBlob from 'b64-to-blob'
import sjcl from 'sjcl'

import navigate_to_url from 'tbirds/util/navigate-to-url'

import DropZoneView from './dropzone'
import makeBlob from './../make-blob'


MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'dbadmin'

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'

exportUrl = '/api/dev/dbadmin/export-models'
deleteUrl = '/api/dev/dbadmin/delete-models'
listUrl = '/api/dev/dbadmin/list-models'

class ExportModels extends AuthModel
  url: exportUrl

class DeleteAllModel extends AuthModel
  url: deleteUrl

class ModelCollection extends AuthCollection
  url: listUrl
  
  
class MainView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.row.listview-header', ->
      tc.text 'Garkbit Dbadmin'
    tc.div '.row', ->
      tc.div '.col', ->
        tc.button '.delete-btn.btn.btn-danger', 'Delete'
        tc.button '.export-btn.btn.btn-info', 'Export'
        tc.button '.list-btn.btn.btn-primary', 'List'
    tc.div '.row', ->
      tc.div '.col', ->
        tc.div '.list-container'
      tc.div '.col', ->
        tc.div '.row.status-message'
        tc.div '.row.dropfile-view'
  templateContext:
    appName: 'dbadmin'
  ui:
    exportBtn: '.export-btn'
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
    navigate_to_url '#dbadmin/models'
    
  exportDatabase: ->
    @ui.statusMsg.text "Exporting database..."
    model = new ExportModels
    response = model.fetch()
    response.done =>
      options = makeBlob model
      FileSaver.saveAs(options.blob, options.filename)
      MessageChannel.request 'success', "Exported database...."
      @ui.statusMsg.text "sha256: #{cksum}"
  IgnoreonDomRefresh: ->
    @jsonView = new JView @model.toJSON()
    @ui.jsonView.prepend @jsonView.dom

export default MainView

