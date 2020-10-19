import _ from 'lodash'
import { Model, Collection, Radio } from 'backbone'
import { LoveStore } from 'backbone.lovefield'
import indexModels from 'common/index-models'

MainChannel = Radio.channel 'global'

dbConn = MainChannel.request 'main:app:dbConn', 'common'

cfgObjectStore = new LoveStore dbConn, 'ConfigObject'
eventIndex = indexModels.eventIndex

cfgFields = ['id', 'name', 'content']

export class ConfigObjectModel extends Model
  loveStore: cfgObjectStore
  toJSON: ->
    data = {}
    cfgFields.forEach (field) =>
      data[field] = @get field
    return data

export class ConfigObjectCollection extends Collection
  loveStore: cfgObjectStore
  model: ConfigObjectModel


export initTopicColors = ->
  model = new ConfigObjectModel
    #id: 'topic-colors'
    name: 'topic-colors'
    content: {}
  indexTopics = eventIndex.get 'topics'
  topics = model.get 'content'
  for key of indexTopics
    item =
      id: key
      name: key
      value: 'SkyBlue'
    topics[key] = item
  model.set 'content', topics
  return model.save()

export updateTopicColors = ->
  indexTopics = eventIndex.get 'topics'
  collection = new ConfigObjectCollection
  collection.fetch()
  .then ->
    console.log "collection", collection
    if not collection.length
      initTopicColors()
    
    model = collection.findWhere name:'topic-colors'
    console.log "MODEL", model
    topics = model.get('content')
    console.log "TOPICS", topics
    localTopicKeys = _.keys topics
    for key of indexTopics
      if not _.includes localTopicKeys, key
        item =
          id: key
          name: key
          value: 'SkyBlue'
        topics[key] = item
    model.set 'content', topics
    return model.save()
    
    

