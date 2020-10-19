import { Radio } from 'backbone'
import { CollectionView } from 'backbone.marionette'

import CheckboxEntryView from 'tbirds/views/checkbox-entry'
import BaseModalTopicsView from 'common/base-select-topics-modal'


AppChannel = Radio.channel 'crown'

eventManager = AppChannel.request 'get-event-manager', 'events'


class ModalCategoriesView extends BaseModalTopicsView
  onRender: ->
    collection = eventManager.collections.categories
    if not collection.length
      eventManager.initCategories()
    view = new CollectionView
      collection: collection
      viewComparator: 'name'
      childView: CheckboxEntryView
    @showChildView 'content', view
    @ui.header.text "Select Categories"
  okBtnClicked: ->
    promises = eventManager.fetchEventModels()
    Promise.all(promises).then =>
      console.log "promises complete"
      @triggerMethod 'topics:fetched'
  onTopicsFetched: ->
    @emptyModal()

export default ModalCategoriesView
