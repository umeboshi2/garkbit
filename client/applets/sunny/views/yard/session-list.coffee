import _ from 'underscore'
import Backbone from 'backbone'
import { View } from 'backbone.marionette'
import tc from 'teacup'

import BaseListView from 'tbirds/views/list-view'


MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'sunny'

class ItemView extends View
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
