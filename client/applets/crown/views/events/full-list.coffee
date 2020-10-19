import $ from 'jquery'
import { Collection, Radio } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import LinkEntryView from 'common/link-entry-view'

AppChannel = Radio.channel 'crown'

eventManager = AppChannel.request 'get-event-manager', 'events'

class LinkItemView extends LinkEntryView
  className: 'list-group-item'

class ListGroupView extends CollectionView
  className: 'list-group'
  
class TopicView extends MnView
  className: 'list-group-item'
  template: tc.renderable (model) ->
    tc.h4 model.name
    tc.div '.events-container'
  ui:
    eventsList: '.events-container'
  regions:
    eventsList: '@ui.eventsList'
  onRender: ->
    name = @model.get 'name'
    events = eventManager.getEventData(name).get('events')
    view = new ListGroupView
      childView: LinkItemView
      collection: new Collection events
      viewComparator:  'start'
    @showChildView 'eventsList', view
    
class MainView extends MnView
  template: tc.renderable ->
    tc.div '.events-container'
  ui:
    clearBtn: '.btn-clear'
    eventsList: '.events-container'
    calendar: '.maincalendar'
  regions:
    eventsList: '@ui.eventsList'
  events:
    'click @ui.clearBtn': 'clearCalendar'
  clearCalendar: ->
    eventManager.currentEvents.length = 0
  onRender: ->
    selectedCategories = eventManager.getSelectedCategories()
    view = new ListGroupView
      collection: selectedCategories
      childView: TopicView
      viewComparator: 'topic'
    @showChildView 'eventsList', view
  resetTopics: ->
    console.log "reset topics"
    @render()
  
export default MainView
