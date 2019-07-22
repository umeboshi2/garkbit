import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import FileSaver from 'file-saver'

import navigate_to_url from 'tbirds/util/navigate-to-url'
import BaseListView from 'tbirds/views/list-view'

import createModelCollection from '../dbchannel'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'dbadmin'

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'

class ItemView extends Marionette.View
  template: tc.renderable (model) ->
    tc.span '.mr-auto', ->
      model.name
    tc.span '.ml-auto.btn-group.pull-right', ->
      tc.button '.list-btn.btn.btn-sm.btn-info', 'List'
      tc.button '.export-btn.btn.btn-sm.btn-info', 'Export'
  tagName: 'li'
  className: ->
    "list-group-item worker-item row"
  ui:
    exportBtn: '.export-btn'
    listBtn: '.list-btn'
  events:
    'click @ui.exportBtn': 'exportBtnClicked'
    'click @ui.listBtn': 'listBtnClicked'
  exportBtnClicked: ->
    modelType = @model.get 'name'
    cfg = createModelCollection modelType
    console.log 'exportBtnClicked'
    model = new cfg.modelClass
      id: 'export'
    response = model.fetch()
    response.fail ->
      MessageChannel.request 'xhr-error', response
    response.done ->
      console.log "model fetched", model
      data = model.toJSON()
      env = 'production'
      if __DEV__
        env = 'development'
      fileName = "exported-#{data.name}-#{env}.json"
      blob = new Blob [JSON.stringify data], type:'application/json'
      FileSaver.saveAs(blob, fileName)
      
  listBtnClicked: ->
    modelType = @model.get 'name'
    navigate_to_url "#dbadmin/models/#{modelType}"

# FIXME this collection isn't paginated
class ListView extends BaseListView
  ItemView: ItemView
  template: tc.renderable ->
    tc.div '.listview-header', ->
      tc.text 'Models'
    tc.div '.paginate-bar'
    tc.div '.models-container'
  ui:
    itemList: '.models-container'
    paginateBar: '.paginate-bar'

export default ListView

