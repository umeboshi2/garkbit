import $ from 'jquery'
import { Radio, Model, Collection } from 'backbone'

import './local-tvshow'
import './local-tvshow-episode'

AppChannel = Radio.channel 'tvmaze'

baseURL = "//api.tvmaze.com"

class SingleShow extends Model
  url: ->
    name = @searchName
    "#{baseURL}/singlesearch/shows?q=#{name}"
  
AppChannel.reply 'single-show-search', (name) ->
  model = new SingleShow
  model.searchName = name
  return model

class ShowSearch extends Collection
  url: -> "#{baseURL}/search/shows"

AppChannel.reply 'new-tv-show-search', (options) ->
  options = options or {}
  return new ShowSearch options

AppChannel.reply 'tv-show-search-collection', ->
  return ShowSearch
  
AppChannel.reply 'search-tv-shows', ->
  collection = new ShowSearch
  return collection

  
class RemoteShow extends Model
  urlRoot: ->
    "#{baseURL}/shows"

AppChannel.reply 'get-remote-show', (id) ->
  return new RemoteShow id: id

class RemoteEpisode extends Model
  url: ->
    return @get('_links').self.href

class RemoteEpisodes extends Collection
  model: RemoteEpisode
  url: ->
    "#{baseURL}/shows/#{@showId}/episodes"

AppChannel.reply 'get-remote-episodes', (id) ->
  collection = new RemoteEpisodes
  collection.showId = id
  return collection





