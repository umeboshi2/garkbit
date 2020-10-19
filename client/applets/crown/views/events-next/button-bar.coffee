import $ from 'jquery'
import { Collection, Radio } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import PointerOnHover from 'tbirds/behaviors/pointer-on-hover'
import CheckboxEntryView from 'tbirds/views/checkbox-entry'
import BaseModalTopicsView from 'common/base-select-topics-modal'
import indexModels from 'common/index-models'

MainChannel = Radio.channel 'global'
AppChannel = Radio.channel 'crown'

eventIndex = indexModels.eventIndex

eventManager = AppChannel.request 'get-event-manager', 'topics'

class ButtonBar extends MnView
  tagName: 'ul'
  className: 'nav nav-pills'
  template: tc.renderable ->
    tc.li '.show-available.nav-item', ->
      tc.a '.nav-link.fa.fa-circle-o', ->
        tc.text 'Show available'
    tc.li ".show-selected.nav-item", ->
      tc.a '.nav-link.fa.fa-check', ->
        tc.text 'Show selected'
    tc.li ".list-events.nav-item", ->
      tc.a '.nav-link.fa.fa-list', ->
        tc.text 'List Events'
    tc.li ".calendar.nav-item", ->
      tc.a '.nav-link.fa.fa-calendar', ->
        tc.text 'Calendar'
    tc.li ".timeline.nav-item", ->
      tc.a '.nav-link.fa.fa-road', ->
        tc.text 'Timeline'
    tc.li ".topic-colors.nav-item", ->
      tc.a '.nav-link.fa.fa-paint-brush', ->
        tc.text 'Topic Colors'
  ui:
    showSelected: '.show-selected'
    showAvail: '.show-available'
    listEvents: '.list-events'
    calendar: '.calendar'
    timeline: '.timeline'
    topicColors: '.topic-colors'
  triggers:
    'click @ui.showSelected': 'select:clicked'
    'click @ui.showCategories': 'categories:clicked'
    'click @ui.showAvail': 'available:clicked'
    'click @ui.listEvents': 'list:clicked'
    'click @ui.calendar': 'calendar:clicked'
    'click @ui.timeline': 'timeline: clicked'
    'click @ui.topicColors': 'topic:colors:clicked'
  onRender: ->
    @ui.timeline.hide()
  behaviors: [PointerOnHover]
    
export default ButtonBar

