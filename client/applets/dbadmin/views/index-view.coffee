Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
marked = require 'marked'
JView = require 'json-view'
require 'json-view/devtools.css'
FileSaver = require 'file-saver'
b64toBlob = require 'b64-to-blob'

{ navigate_to_url } = require 'tbirds/util/navigate-to-url'

view_template = tc.renderable (model) ->
  tc.div '.row.listview-list-entry', ->
    tc.raw marked "# #{model.appName} started."
  tc.div '.row.listview-list-entry', ->
    tc.button ".btn.btn-info.btn-export-wikipages", "export wikipages"
  tc.div '.row.listview-list-entry', ->
    tc.div '.row.jsonview'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'dbadmin'

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'

wikiUrl = '/api/dev/dbadmin/wikipage'

class WikiPage extends AuthModel
  urlRoot: wikiUrl
  
class WikiCollection extends AuthCollection
  url: wikiUrl
  model: WikiPage
  

class MainView extends Marionette.View
  template: view_template
  templateContext:
    appName: 'dbadmin'
  ui:
    exportWiki: '.btn-export-wikipages'
    jsonView: '.jsonview'
  regions:
    jsonView: '@ui.jsonView'
  events:
    'click @ui.exportWiki': 'exportWiki'

  exportWiki: ->
    console.log "export wikipages"
    collection = new WikiCollection
    response = collection.fetch()
    response.done =>
      console.log "retrieved pages", response
      console.log 'collection', collection
      @jsonView = new JView collection.toJSON()
      @ui.jsonView.prepend @jsonView.dom
      
  IgnoreonDomRefresh: ->
    @jsonView = new JView @model.toJSON()
    @ui.jsonView.prepend @jsonView.dom
    
module.exports = MainView

