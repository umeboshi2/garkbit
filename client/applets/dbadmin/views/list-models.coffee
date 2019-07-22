import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

import navigate_to_url from 'tbirds/util/navigate-to-url'
import BaseListView from 'tbirds/views/list-view'

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
      tc.button '.list-btn.btn.btn-sm.btn-warning', 'Model Type List'
      tc.button '.export-btn.btn.btn-sm.btn-info', 'Export'
      tc.button '.import-btn.btn.btn-sm.btn-primary', 'Import'
  tagName: 'li'
  className: ->
    "list-group-item worker-item row"
  ui:
    exportBtn: '.export-btn'
    importBtn: '.import-btn'
    listBtn: '.list-btn'
  events:
    'click @ui.exportBtn': 'exportBtnClicked'
    'click @ui.listBtn': 'listBtnClicked'
  exportBtnClicked: ->
    console.log 'exportBtnClicked'
  listBtnClicked: ->
    navigate_to_url "#dbadmin/models"
    
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

