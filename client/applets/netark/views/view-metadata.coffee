import { Model, Collection, Radio } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import HasJsonView from 'common/has-jsonview'

AppChannel = Radio.channel 'netark'
    
class MediaView extends MnView
  template: tc.renderable (model) ->
    tc[model.mediaType] controls:'', autoplay:'', src:model.url
  templateContext: ->
    mediaType: @getOption 'mediaType'
    
class Entry extends MnView
  template: tc.renderable (model) ->
    name = model?.title or model.name
    tc.div '.listview-list-entry', ->
      tc.a "#{name} (#{model.format})"
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
    view = new MediaView
      model: new Model url:url
      mediaType: @getOption 'mediaType'
    @showChildView 'mediaView', view
    
    
    

class EntryCollectionView extends CollectionView
  childView: Entry
  childViewOptions: ->
    mainModel: @model
    mediaType: @getOption 'mediaType'
    

class MetadataView extends MnView
  template: tc.renderable (model) ->
    tc.div '.listview-header', model.metadata.title
    files = model.files
    thumbnail = false
    files.forEach (file) ->
      if not thumbnail
        if file.format == 'JPEG Thumb'
          thumbnail = file
        else if file.format == 'Thumbnail'
          thumbnail = file
    if thumbnail
      src = AppChannel.request 'get-image-url', thumbnail.name, model
      tc.img src:src
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
  filesButtonClicked: ->
    files = @model.get 'files'
    mp3s = []
    orig = []
    ogvPresent = false
    files.forEach (f) ->
      if f.name.endsWith '.mp3'
        mp3s.push f
      if f.source == 'original'
        unless f.format == 'Metadata'
          orig.push f
      if f.format == 'Ogg Video'
        orig.push f
        ogvPresent = true
    cfiles = mp3s
    mediaType = 'audio'
    if ogvPresent
      cfiles = orig
      console.log "CFILES", cfiles
      mediaType = 'video'
    collection = new Collection cfiles
    view = new EntryCollectionView
      collection: collection
      model: @model
      mediaType: mediaType
    @showChildView 'files', view
    @ui.filesButton.hide()
    
  notesButtonClicked: ->
    @ui.notes.toggle()
    
    
class JsonView extends MnView
  template: tc.renderable ->
    tc.div '.jsonview.listview-list-entry', style:'overflow:auto'
  behaviors:
    HasJsonView:
      behaviorClass: HasJsonView
    
class MainView extends MnView
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
    console.log "MODEL IN MAINVIEW", @model
    jview = new JsonView
      model: @model
    @showChildView 'objectView', jview
    mview = new MetadataView
      model: @model
    @showChildView 'metadataView', mview
    
export default MainView

