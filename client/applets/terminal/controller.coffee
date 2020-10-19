import { Radio } from 'backbone'
import tc from 'teacup'
import ms from 'ms'

import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'

MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'
AppChannel = Radio.channel 'terminal'

class Controller extends MainController
  channelName: 'terminal'
  layoutClass: ToolbarAppletLayout
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/index-view').default
      view = new View
        channelName: 'terminal'
      @layout.showChildView 'content', view
    # name the chunk
    , 'terminal-view-index'
      
export default Controller

