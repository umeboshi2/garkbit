Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
marked = require 'marked'

{ navigate_to_url } = require 'tbirds/util/navigate-to-url'
HasJsonView = require('../../../has-jsonview').default
PaginateBar = require('tbirds/views/paginate-bar').default

    
view_template = tc.renderable (model) ->
  tc.div '.row.listview-list-entry', ->
    tc.raw marked "# #{model.appName} started."

class MediaView extends Marionette.View
  #tagName: 'media'
  template: tc.renderable (model) ->
    tc.audio controls:'', autoplay:'', src:model.url
    
class Entry extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.listview-list-entry', ->
      tc.a href:"#", model.title
      tc.div '.media-view'
  ui:
    link: 'a'
    mediaView: '.media-view'
  regions:
    mediaView: '@ui.mediaView'
  events:
    'click @ui.link': 'linkClicked'
  getAudioUrl: ->
    mainModel = @getOption 'mainModel'
    return mainModel.fileUrl @model.get 'name'
  linkClicked: (event) ->
    event.preventDefault()
    #@playAudio()
    url = @getAudioUrl()
    console.log "linkClicked", url
    view = new MediaView
      model: new Backbone.Model url:url
    @showChildView 'mediaView', view
    console.log "VIEW", view
    
    
    

class EntryCollectionView extends Marionette.CollectionView
  childView: Entry
  childViewOptions: ->
    mainModel: @model
    

class MetadataView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.listview-header', model.metadata.title
    tc.raw model.metadata.description
    style = ''
    if not model.metadata?.notes
      style = "display:none"
    tc.button '.notes-button.btn.btn-info', style:style, 'Notes'
    tc.div '.notes.listview-list-entry', style:'display:none', ->
      tc.raw model.metadata.notes
    tc.button '.files-button.btn.btn-primary', 'Files'
    tc.div '.files'
  ui:
    notes: '.notes'
    notesButton: '.notes-button'
    filesButton: '.files-button'
    files: '.files'
  regions:
    files: '@ui.files'
  events:
    'click @ui.notesButton': 'notesButtonClicked'
    'click @ui.filesButton': 'filesButtonClicked'
  filesButtonClicked: (event) ->
    files = @model.get 'files'
    mp3s = []
    files.forEach (f) =>
      if f.name.endsWith '.mp3'
        mp3s.push f
        console.log @model.fileUrl f.name
        
    #console.log "Show files", files, mp3s
    
    collection = new Backbone.Collection mp3s
    view = new EntryCollectionView
      collection: collection
      model: @model
    @showChildView 'files', view
    @ui.filesButton.hide()
    
  notesButtonClicked: (event) ->
    @ui.notes.toggle()
    
    
class JsonView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.jsonview.listview-list-entry', style:'overflow:auto'
  behaviors:
    HasJsonView:
      behaviorClass: HasJsonView
    
class MainView extends Marionette.View
  template: tc.renderable ->
    tc.div '.metadata-view'
    tc.div '.object-view'
  ui:
    metadataView: '.metadata-view'
    objectView: '.object-view'

  regions:
    metadataView: '@ui.metadataView'
    objectView: '@ui.objectView'
  onRender: ->
    jview = new JsonView
      model: @model
    @showChildView 'objectView', jview
    mview = new MetadataView
      model: @model
    @showChildView 'metadataView', mview
  templateContext:
    appName: 'otrr'
    
module.exports = MainView

