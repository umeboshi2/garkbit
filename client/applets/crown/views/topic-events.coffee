import { Collection, Radio } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import LinkEntryView from 'common/link-entry-view'

AppChannel = Radio.channel 'crown'

eventManager = AppChannel.request 'get-event-manager', 'topics'


class LinkItemView extends LinkEntryView
  tagName: 'li'
  className: 'list-group-item'

class LinkCollectionView extends CollectionView
  tagName: 'ul'
  className: 'list-group'
  childView: LinkItemView
  
class TopicEntry extends MnView
  template: tc.renderable (model) ->
    tc.text model.name
    tc.div '.events-container'
  ui:
    eventsContainer: '.events-container'
  regions:
    eventsContainer: '@ui.eventsContainer'
  onRender: ->
    topicEvents = eventManager.getSubtopicEvents(@model)
    allEvents = new Collection []
    for t of topicEvents
      for e in topicEvents[t]
        allEvents.add e
    view = new LinkCollectionView
      collection: allEvents
      viewComparator: 'start'
    @showChildView 'eventsContainer', view
    
class MainView extends MnView
  initialize: ->
    topics = eventManager.collections.topics
    if not topics.length
      eventManager.initTopics()
    
  template: tc.renderable ->
    tc.div '.card', ->
      tc.span '.card-title', ->
        tc.text "Subtopic Events"
      tc.div '.card-body'
  ui:
    cardBody: '.card-body'
  regions:
    cardBody: '@ui.cardBody'
  onRender: ->
    topics = eventManager.collections.topics
    selected = new Collection topics.filter selected:true
    view = new CollectionView
      collection: selected
      childView: TopicEntry
      viewComparator: 'name'
    @showChildView 'cardBody', view
export default MainView
