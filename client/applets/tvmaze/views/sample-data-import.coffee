import { Radio, Collection, history } from 'backbone'
import { View as MnView, CollectionView, MnObject } from 'backbone.marionette'
import tc from 'teacup'

import myShows from '../assets/myshows.json'

import { ProgressModel, ProgressView } from 'tbirds/views/simple-progress'

console.log "ProgressModel", ProgressModel
console.log "ProgressView", ProgressView

MessageChannel = Radio.channel 'messages'
AppChannel = Radio.channel 'tvmaze'

shows = new Collection myShows

class ImportManager extends MnObject
  channelName: 'tvmaze'
  collection: shows
  initialize: (options) =>
    @progressModel = options.progressModel

if __DEV__ and DEBUG
  console.log "ImportManager", ImportManager
  
export saveRemoteShow = (id) ->
  show = AppChannel.request 'get-remote-show', id
  response = show.fetch()
  response.done ->
    p = AppChannel.request 'save-local-show', show.toJSON()
    return p
  return response

saveEpisodes = (collection, showID, navigate) ->
  promises = []
  collection.models.forEach (model) ->
    data =
      id: model.get 'id'
      show_id: showID
      content: model.toJSON()
    p = AppChannel.request 'save-local-episode', data
    promises.push p
  Promise.all(promises).then ->
    if promises.length and navigate
      history.navigate "#tvmaze/shows/view/#{showID}", trigger:true
    MessageChannel.request 'success', "Retrieved #{promises.length} episodes."
  

itemTemplate = tc.renderable (model) ->
  tc.li '.list-group-item', ->
    tc.span ->
      tc.a '.import-single-show', href:"#", model.name
    tc.span '.btn-group.pull-right', ->
      tc.button '.delete-item.btn.btn-sm.btn-danger.fa.fa-close', 'delete'
    

mainTemplate = tc.renderable ->
  tc.div '.body.col-md-6', ->
    tc.h1 'TV Maze Sample Data'
    tc.div '.form-inline', ->
      tc.div '.form-check', ->
        tc.input '#include-episodes.form-check-input', type:'checkbox'
        tc.label '.form-check-label', for:'include-episodes', 'Include episodes'
      tc.button '.import-button.btn.btn-primary.btn-sm', 'Import Data'
    tc.div '.status-div.alert.alert-info', style:'display:none'
    tc.div '.import-progress'
    tc.ul '.show-list.list-group'

class ShowView extends MnView
  channelName: 'tvmaze'
  template: itemTemplate
  ui:
    deleteButton: '.delete-item'
    importSingleAnchor: '.import-single-show'
  events:
    'click @ui.deleteButton': 'deleteItem'
    'click @ui.importSingleAnchor': 'importShow'
  triggers:
    'click @ui.deleteButton': 'item:deleted'
    'click @ui.importSingleAnchor': 'import:show'
  deleteItem: ->
    @trigger 'item:deleted', @model
    @triggerMethod 'item:deleted', @model
    @model.collection.remove @model
  importShow: (event) ->
    event.preventDefault()
    
class MainView extends MnView
  channelName: 'tvmaze'
  template: mainTemplate
  ui:
    showList: '.show-list'
    statusDiv: '.status-div'
    importProgress: '.import-progress'
    importButton: '.import-button'
    includeEpisodes: '#include-episodes'
  regions:
    showList: '@ui.showList'
    importProgress: '@ui.importProgress'
  events:
    'click @ui.importButton': 'importShows'
  onRender: ->
    local_shows = AppChannel.request 'get-all-local-tvshows'
    counter = 0
    removals = []
    while counter < shows.length
      model = shows.models[counter]
      lmodel = local_shows.get model.id
      if lmodel
        removals.push model
      counter += 1
    shows.remove removals
    
        
    @importProgressModel = new ProgressModel
    @importProgressModel.set 'valuemax', shows.length
    @importProgressModel.set 'valuenow', 0
    view = new CollectionView
      channelName: 'tvmaze'
      collection: shows
      childView: ShowView
      childViewTriggers:
        'item:deleted': 'child:item:deleted'
        'import:show': 'child:import:show'
      onChildItemDeleted: =>
        @importProgressModel.set 'valuemax', shows.length
      onChildImportShow: (view) =>
        console.log "onChildImportShow", view
        id = view.model.id
        includeEpisodes = @ui.includeEpisodes.prop 'checked'
        show = AppChannel.request 'get-remote-show', id
        response = show.fetch()
        response.done ->
          p = AppChannel.request 'save-local-show', show.toJSON()
          p.then ->
            if includeEpisodes
              console.log "get episodes too"
              console.log show
              MessageChannel.request "info", "Retrieving episodes...."
              ecoll = AppChannel.request 'get-remote-episodes', id
              response = ecoll.fetch()
              response.done ->
                saveEpisodes ecoll, id
        
    
    @showChildView 'showList', view
    view = new ProgressView
      model: @importProgressModel
    @showChildView 'importProgress', view
  importShows: ->
    @ui.importButton.hide()
    @ui.statusDiv.show()
    console.log "importShows"
    @importAnotherShow()
  importShow: (show) ->
    name = show.get 'name'
    id = show.id
    @ui.statusDiv.text "Importing #{name}, #{id}"
    rshow = AppChannel.request 'get-remote-show', id
    response = rshow.fetch()
    response.done =>
      p = AppChannel.request 'save-local-show', rshow.toJSON()
      p.then =>
        includeEpisodes = @ui.includeEpisodes.prop 'checked'
        if includeEpisodes
          console.log "get episodes too"
          console.log rshow
          MessageChannel.request "info", "Retrieving episodes...."
          ecoll = AppChannel.request 'get-remote-episodes', id
          response = ecoll.fetch()
          response.done =>
            saveEpisodes ecoll, id, false
            shows.remove show
            @importProgressModel.set 'valuenow', shows.length
            if shows.length
              setTimeout =>
                @importAnotherShow()
              , 500
        else
          shows.remove show
          @importProgressModel.set 'valuenow', shows.length
          if shows.length
            setTimeout =>
              @importAnotherShow()
            , 500
  importAnotherShow: ->
    show = shows.models[0]
    @importShow show
    
export default MainView

