import { Model, Radio } from 'backbone'
import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'

import BaseModalView from 'common/base-modal-view'
import HasJsonView from 'common/has-jsonview'
import indexModels from 'common/index-models'

#import EventManager from 'common/event-manager'
#eventManager = new EventManager

AppChannel = Radio.channel 'pmc'


class SimpleInfoEntry extends MnView
  behaviors: [HasJsonView]
  template: tc.renderable ->
    tc.div '.jsonview'

class ModalTopicsView extends BaseModalView
  template: tc.renderable (model) ->
    console.log "model", model
    tc.div '.modal-dialog.modal-md', ->
      tc.div '.modal-content', ->
        tc.text "Topics Assigned to pmeid: #{model.id}"
        tc.div '.content'
        tc.div '.row', ->
          tc.button '.close-btn.btn.btn-warning.fa.fa-close.mr-auto',
          data:dismiss:'modal', "Close"
          tc.button '.ok-button.btn.btn-success.fa.fa-check.ml-auto', "Ok"
  ui:
    closeBtn: '.close-btn'
    okBtn: '.ok-button'
    content: '.content'
    topicsRegion: '.topics'
  regions:
    content: '@ui.content'
  events:
    'click @ui.okBtn': 'okBtnClicked'
    'click @ui.closeBtn': 'emptyModal'
  okBtnClicked: ->
    console.log "OK clicked"
  onRender: ->
    topics = AppChannel.request 'get-topic-collection'
    fmtopics = AppChannel.request 'get-fmtopic-collection'
    console.log "topics, fmtopics", topics, fmtopics
    thisView = @
    model = new Model
      topics: topics
      fmtopics: fmtopics
      eventIndex: indexModels.eventIndex
    topics.fetch().then ->
      fmtopics.fetch()
    .then ->
      console.log "all fetched", topics, fmtopics
      view = new SimpleInfoEntry
        model: model
      thisView.showChildView 'content', view

export default ModalTopicsView
