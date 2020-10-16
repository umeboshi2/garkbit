import { View } from 'backbone.marionette'
import tc from 'teacup'
import BaseListView from 'tbirds/views/list-view'

export class ItemView extends View
  template: tc.renderable (model) ->
    tc.div model.status
  tagName: 'li'
  className: ->
    return 'list-group-item yarsession-item row'

class ListView extends BaseListView
  template: tc.renderable ->
    tc.div '.yardsession-container.list-group'
  ui: ->
    itemList: '.yardsession-container'
    
export default ListView
