import { Radio } from 'backbone'
import { CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import CheckboxEntryView from 'tbirds/views/checkbox-entry'
import BaseModalView from 'common/base-modal-view'

class BaseModalTopicsView extends BaseModalView
  template: tc.renderable ->
    tc.div '.modal-dialog.modal-md', ->
      tc.div '.modal-content', ->
        tc.h3 '.header'
        tc.div '.content'
        tc.div '.row', ->
          tc.button '.close-btn.btn.btn-warning.fa.fa-close.mr-auto',
          data:dismiss:'modal', "Close"
          tc.button '.ok-button.btn.btn-success.fa.fa-check.ml-auto', "Ok"
  ui:
    closeBtn: '.close-btn'
    okBtn: '.ok-button'
    header: '.header'
    content: '.content'
  regions:
    content: '@ui.content'
  events:
    'click @ui.okBtn': 'okBtnClicked'
    'click @ui.closeBtn': 'emptyModal'

export default BaseModalTopicsView
