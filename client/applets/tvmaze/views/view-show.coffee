import $ from 'jquery'
import { Radio } from 'backbone'
import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'
import JView from 'json-view'
import 'json-view/devtools.css'

import noImage from 'tbirds/templates/no-image-span'


import EpisodeListView from './show-episodes'

MessageChannel = Radio.channel 'messages'
AppChannel = Radio.channel 'tvmaze'

class ShowView extends MnView
  template: tc.renderable (model) ->
    D = model.content
    #tc.div '.card.bg-secondary.text-white', ->
    tc.div '.card.bg-body-d5', ->
      tc.div '.row', ->
        tc.div '.col-md-2', ->
          if D.image?.medium
            tc.img '.card-img-bottom', src:model.content.image.medium
          else
            noImage '5x'
        tc.div '.col-md-9', ->
          tc.div '.card-block', ->
            tc.h3 '.card-title', model.content.name
            tc.raw model.content.summary
      tc.div '.row', ->
        tc.div '.col-md-8', ->
          tc.div '.episode-list-region'
        tc.div '.col-md-4', ->
          tc.div '.listview-header', "ShowObject"
          tc.div '.jsonview.listview-list-entry', style:'overflow:auto'
  ui:
    body: '.jsonview'
    episodesButton: '.episodes-button'
    saveEpisodesButton: '.save-episodes'
    episodesList: '.episode-list-region'
  regions:
    episodes: '@ui.episodesList'
  onDomRefresh: ->
    @jsonView = new JView @model.toJSON().content
    @ui.body.prepend @jsonView.dom
    EpisodeCollection = AppChannel.request 'get-local-episode-collection'
    @localEpisodes = new EpisodeCollection
    @showLocalEpisodes()

  showLocalEpisodes: ->
    response = @localEpisodes.fetch data: show_id: @model.get 'id'
    response.done =>
      if @localEpisodes.isEmpty()
        MessageChannel.request "info", "Retrieving episodes..."
        ecoll = AppChannel.request 'get-remote-episodes', @model.id
        response = ecoll.fetch()
        response.done =>
          @saveEpisodes ecoll
      else
        view = new EpisodeListView
          collection: @localEpisodes
        @showChildView 'episodes', view


  saveEpisodes: (collection) ->
    showID = @model.get 'id'
    promises = []
    collection.models.forEach (model) ->
      data =
        id: model.get 'id'
        show_id: showID
        content: model.toJSON()
      p = AppChannel.request 'save-local-episode', data
      promises.push p
    Promise.all(promises).then =>
      if promises.length
        @showLocalEpisodes()
      MessageChannel.request 'success', "Retrieved #{promises.length} episodes."
export default ShowView

