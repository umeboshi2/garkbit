import $ from 'jquery'
import { Radio } from 'backbone'
import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'

import ModalCategoriesView from './select-categories-modal'

MainChannel = Radio.channel 'global'

class MainView extends MnView
  template: tc.renderable ->
    tc.div '.btn-group', role:'group', ->
      tc.button '.cat-button.btn.btn-outline-warning', 'Select Categories'
      tc.button '.list-events-button.btn.btn-outline-warning', 'List Events'
      tc.button '.timeline-btn.btn.btn-outline-warning', 'Timeline'
      tc.button '.calendar-btn.btn.btn-outline-warning', 'Calendar'
    tc.div '.content.col-sm-10.offset-sm-1'
  ui:
    catBtn: '.cat-button'
    listEventsBtn: '.list-events-button'
    timelineBtn: '.timeline-btn'
    calendarBtn: '.calendar-btn'
    content: '.content'
  regions:
    content: '@ui.content'
  events:
    'click @ui.catBtn': 'catBtnClicked'
    'click @ui.timelineBtn': 'showTimeline'
    'click @ui.calendarBtn': 'showCalendar'
    'click @ui.listEventsBtn': 'showEventList'
  catBtnClicked: ->
    contentView = @getChildView 'content'
    view = new ModalCategoriesView
      model: @model
    MainChannel.request 'show-modal', view
    view.on 'topics:fetched', =>
      @ui.timelineBtn.show()
      @ui.calendarBtn.show()
      contentView.resetTopics()
  onRender: ->
    @showEventList()
  showTimeline: ->
    require.ensure [], () =>
      View = require('./timeline').default
      view = new View
        model: @model
      @showChildView 'content', view
    # name the chunk
    , 'crown-child-view-timeline'

  showCalendar: ->
    require.ensure [], () =>
      View = require('./year-calendar').default
      view = new View
        model: @model
      @showChildView 'content', view
    # name the chunk
    , 'crown-child-view-calendar'

  showEventList: ->
    require.ensure [], () =>
      View = require('./full-list').default
      view = new View
        model: @model
      @showChildView 'content', view
    # name the chunk
    , 'crown-child-view-full-list'

export default MainView
