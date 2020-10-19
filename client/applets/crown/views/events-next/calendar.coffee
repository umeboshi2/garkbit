import $ from 'jquery'
import { Model, Radio } from 'backbone'
import { View } from 'backbone.marionette'
import tc from 'teacup'
import moment from 'moment'
import tinycolor from 'tinycolor2'

import Calendar from 'js-year-calendar'
import 'js-year-calendar/dist/js-year-calendar.css'

import ModalEventsView from 'common/modal-events-view'

MainChannel = Radio.channel 'global'
AppChannel = Radio.channel 'crown'

eventManager = AppChannel.request 'get-event-manager', 'topics'

topicColors = MainChannel.request 'get-topic-colors'
console.log "topicColors", topicColors

convertDate = (date) ->
  # A workaround for this issue
  # https://github.com/year-calendar/js-year-calendar/issues/15
  return new Date moment(date).utc().format('YYYY-MM-DDTHH:mm:ss')

convertEvent = (event) ->
  color = tinycolor topicColors.get('content')[event.maintopic].value
  event.startDate = convertDate event.start
  event.endDate = event.startDate
  if event?.end
    event.endDate = convertDate event.end
  event.color = "##{color.toHex()}"
  event.name = event.title
  return event
  
class BaseCalendarView extends View
  template: ->
  onClickDay: (event) ->
    if event?.events.length
      view = new ModalEventsView
        model: new Model event
      MainChannel.request 'main:app:show-modal', view, true
  onRender: ->
    @calendar = new Calendar @$el.get(0),
      clickDay: @onClickDay
    @resetTopics()
  resetTopics: ->
    eventManager.setCurrentTopicEvents()
    allEvents = []
    topicEvents = eventManager.setCurrentTopicEvents()
    for key of topicEvents
      topicEvents[key].each (item) ->
        item = item.toJSON()
        item.maintopic = key
        e = convertEvent item
        allEvents.push e
    @calendar.setDataSource allEvents

export default BaseCalendarView
