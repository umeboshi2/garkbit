import _ from 'lodash'
import { Model, Collection, Radio } from 'backbone'
import { LoveStore } from 'backbone.lovefield'
import PageableCollection from 'backbone.paginator'

import indexModels from 'common/index-models'

eventIndex = indexModels.eventIndex

MainChannel = Radio.channel 'global'
AppChannel = Radio.channel 'pmc'

dbConn = MainChannel.request 'main:app:dbConn', 'common'

TopicsStore = new LoveStore dbConn, 'Topics'
FMTopicsStore = new LoveStore dbConn, 'PMCTopics'

TopicFields = ['id', 'name']
class TopicModel extends Model
  loveStore: TopicsStore
  toJSON: ->
    data = {}
    TopicFields.forEach (field) =>
      data[field] = @get field
    return data

class TopicCollection extends Collection
  loveStore: TopicsStore
  model: TopicModel

class TopicPageable extends PageableCollection
  loveStore: TopicsStore
  model: TopicModel
  mode: 'client'

topicCollection = new TopicCollection
AppChannel.reply 'get-topic-collection', ->
  return topicCollection
AppChannel.reply 'make-topic-pageable', ->
  return new TopicPageable

topicResponse = topicCollection.fetch()
topicResponse.done ->
  topics = eventIndex.get 'topics'
  tlist = _.keys topics
  tlist.forEach (topic) ->
    tmodel = topicCollection.find name:topic
    if not tmodel?
      console.log "get model for", topic
      model = topicCollection.add name:topic
      model.save()


FMTopicFields = ['pmcid', 'topic_id']
export class FMTopicModel extends Model
  loveStore: FMTopicsStore
  toJSON: ->
    data = {}
    FMTopicFields.forEach (field) =>
      data[field] = @get field
    return data

class FMTopicCollection extends Collection
  loveStore: FMTopicsStore
  model: FMTopicModel

class FMTopicPageable extends PageableCollection
  loveStore: FMTopicsStore
  model: FMTopicModel
  mode: 'client'
  
fmtopicCollection = new FMTopicCollection
AppChannel.reply 'get-fmtopic-collection', ->
  return fmtopicCollection
AppChannel.reply 'make-fmtopic-pageable', ->
  return new FMTopicPageable
