import { Model, Radio } from 'backbone'
import { decode } from 'url-safe-base64'

import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'

import indexModels from 'common/index-models'
import EventManager from 'common/event-manager'
import './dbchannel'

MainChannel = Radio.channel 'global'
AppChannel = Radio.channel 'crown'

eventIndex = indexModels.eventIndex
cvlinks = indexModels.cvlinks

eventManagers =
  events: new EventManager
  topics: new EventManager

AppChannel.reply 'get-event-manager', (name) ->
  return eventManagers[name]
  
  
class Controller extends MainController
  channelName: 'crown'
  layoutClass: ToolbarAppletLayout
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/index-view').default
      view = new View
        model: cvlinks
      @layout.showChildView 'content', view
    # name the chunk
    , 'crown-view-index'
  viewRSS: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/rss-view').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'crown-view-rss'
  viewCoHCalendar: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      model = MainChannel.request 'main:app:get-events', 'coh-orders'
      View = require('./views/coh-calendar').default
      response = model.fetch()
      response.done =>
        view = new View
          model: model
        @layout.showChildView 'content', view
    # name the chunk
    , 'crown-view-coh-calendar'

  viewNewsCalendar: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/news-calendar').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'crown-view-news-calendar'

  viewEvents: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/events-next').default
      view = new View
        model: eventIndex
      @layout.showChildView 'content', view
    # name the chunk
    , 'crown-view-events'

  viewTopics: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/events-next').default
      view = new View
        model: eventIndex
      @layout.showChildView 'content', view
    # name the chunk
    , 'crown-view-select-subtopics'
    
export default Controller

