import { Collection } from 'backbone'
import { CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import BaseModalView from './base-modal-view'
import LinkEntryView from './link-entry-view'

class ModalEventsView extends BaseModalView
  template: tc.renderable ->
    tc.div '.modal-dialog.modal-md', ->
      tc.div '.modal-content', ->
        tc.div '.events'
        tc.div '.modal-footer', ->
          tc.button '.close-btn.btn.btn-warning.fa.fa-close.ml-auto',
          data:dismiss:'modal', "Close"
  ui:
    closeBtn: '.close-btn'
    eventsRegion: '.events'
  regions:
    eventsRegion: '@ui.eventsRegion'
  events:
    'click @ui.closeBtn': 'emptyModal'
  onRender: ->
    view = new CollectionView
      collection: new Collection @model.get 'events'
      viewComparator: 'start'
      childView: LinkEntryView
    @showChildView 'eventsRegion', view
    
export default ModalEventsView

