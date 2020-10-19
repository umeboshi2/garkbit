import { Radio, Collection } from 'backbone'
import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'
import PageableCollection from 'backbone.paginator'

import EventManager from 'common/event-manager'
import { eventIndex } from 'common/index-models'
import { FrontMatterModel } from './dbchannel/front-matter'
import './dbchannel'

AppChannel = Radio.channel 'pmc'

eventManager = new EventManager
AppChannel.reply 'get-event-manager', ->
  return eventManager

class Controller extends MainController
  channelName: 'pmc'
  layoutClass: ToolbarAppletLayout
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/index-view').default
      collection = AppChannel.request 'get-fm-collection'
      response = collection.fetch()
      response.done =>
        view = new View
          model: eventIndex
        @layout.showChildView 'content', view
    # name the chunk
    , 'pmc-view-index'

  viewByTopic: (name) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/bytopic-view').default
      articles = AppChannel.request 'get-fm-collection'
      topics = AppChannel.request 'get-topic-collection'
      fmtopics = AppChannel.request 'get-fmtopic-collection'
      promises = [articles.fetch(), topics.fetch(), fmtopics.fetch()]
      Promise.all(promises).then =>
        topic = topics.findWhere name: name
        pmtopics = fmtopics.filter topic_id: topic.id
        view = new View
          name: name
          collection: new Collection pmtopics
        @layout.showChildView 'content', view
    # name the chunk
    , 'pmc-view-bytopic'

  manageTopics: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/manage-topics').default
      view = new View
        model: eventIndex
      @layout.showChildView 'content', view
    # name the chunk
    , 'pmc-view-manage-topics'
      
  viewSiteTopics: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/sitetopics').default
      view = new View
        model: eventIndex
      @layout.showChildView 'content', view
    # name the chunk
    , 'pmc-view-sitetopics'
      
  viewSearchPMC: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/search-view').default
      collection = AppChannel.request 'get-fm-collection'
      response = collection.fetch()
      response.done =>
        view = new View
          model: eventIndex
        @layout.showChildView 'content', view
    # name the chunk
    , 'pmc-view-search-pmc'

      
  viewPMCArticle: (pmcid) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/article').default
      model = new FrontMatterModel id:pmcid
      response = model.fetch()
      response.done =>
        view = new View
          model: model
        @layout.showChildView 'content', view
    # name the chunk
    , 'pmc-view-pmc-article'

      
  importSite: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/import-pmc-data').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'pmc-view-import-pmc-data'

      
export default Controller

