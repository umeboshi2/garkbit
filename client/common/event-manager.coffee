import { Collection, Radio } from 'backbone'
import { MnObject } from 'backbone.marionette'

import indexModels from './index-models'

MainChannel = Radio.channel 'global'

eventIndex = indexModels.eventIndex

eventDataModels = new Collection []

class EventManager extends MnObject
  initialize: ->
    @collections =
      categories: new Collection []
      topics: new Collection []
    @currentEvents = []
    @currentTopicEvents = {}
    return
  setCollection: (name, collection) ->
    @collections[name].set collection
    return
  initCategories: ->
    for name of eventIndex.get('categories')
      @collections.categories.add
        name: name
        selected: false
    return
  initTopics: ->
    stMap = eventIndex.get('topics')
    for st of stMap
      @collections.topics.add
        name: st
        selected: false
        topics: stMap[st]
    return
  initAll: ->
    if not @collections.categories.length
      @initCategories()
      if __DEV__
        console.log "initCategories"
    if not @collections.topics.length
      @initTopics()
      if __DEV__
        console.log "initTopics"
    return
  fetchEventModels: ->
    selected = @collections.categories.filter selected:true
    topicMap = eventIndex.get('categories')
    promises = []
    selected.forEach (model) ->
      category = model.get('name')
      model = eventDataModels.get category
      if not model?
        resourceName = topicMap[category].filename
        resource = MainChannel.request 'main:app:get-events', resourceName
        promises.push resource.fetch()
        eventDataModels.add
          id: category
          name: category
          content: resource
    return promises
  getSubtopicEvents: (model) ->
    name = model.get 'name'
    topics = model.get 'topics'
    topicEvents = {}
    topics.forEach (topic) ->
      model = eventDataModels.get topic
      eventsModel = model.get 'content'
      topicEvents[topic] = eventsModel.getSubtopicEvents name
    return topicEvents

  getTopicEvents: (topic) ->
    categories = eventIndex.get('topics')[topic]
    collection = new Collection
    categories.forEach (category) ->
      model = eventDataModels.get category
      eventModel = eventDataModels.get(category).get('content')
      events = eventModel.getSubtopicEvents topic
      collection.add events
    return collection
  getManyTopicEvents: (topics) ->
    topicEvents = {}
    topics.forEach (topic) ->
      topicEvents[topic] = new Collection
      categories = eventIndex.get('topics')[topic]
      categories.forEach (category) ->
        model = eventDataModels.get category
        eventModel = eventDataModels.get(category).get('content')
        console.log "eventModel", eventModel
        events = eventModel.getSubtopicEvents topic
        topicEvents[topic].add events
    return topicEvents

  setCurrentTopicEvents: ->
    self_events = @currentEvents
    self_events.length = 0
    selected = @getSelectedTopics()
    @currentTopicEvents = {}
    topicEvents = {}
    topics = selected.pluck 'name'
    topics.forEach (topic) =>
      collection = @getTopicEvents topic
      @currentTopicEvents[topic] = collection
      topicEvents[topic] = collection
      collection.each (item) ->
        self_events.push item.toJSON()
    return topicEvents
    
  determineCategories: ->
    allTopics = new Collection []
    subtopics = @collections.topics.filter selected:true
    subtopics.forEach (item) ->
      topics = item.get 'topics'
      topics.forEach (topic) ->
        allTopics.add
          id: topic
          name: topic
    if not @collections.categories.length
      @initCategories eventIndex
    topicArray = allTopics.pluck 'name'
    categories = @collections.categories
    topicArray.forEach (name) ->
      model = categories.findWhere name:name
      model.set 'selected', true
    promises = @fetchEventModels()
    return
      promises: promises
      allTopics: allTopics
      categories: allTopics
  setCurrentEvents: ->
    self_events = @currentEvents
    self_events.length = 0
    categories = @collections.categories
    selected = categories.filter selected:true
    selected.forEach (item) =>
      eventModel = @getEventData item.get('name')
      events = eventModel.get 'events'
      events.forEach (event) ->
        self_events.push event
    return
  clearCurrentEvents: ->
    @currentEvents.length = 0
    return
  getEventData: (name) ->
    m = eventDataModels.get name
    return m.get 'content'
  getSelectedCategories: ->
    return new Collection @collections.categories.filter selected:true
  getSelectedTopics: ->
    return new Collection @collections.topics.filter selected:true
    
export default EventManager
