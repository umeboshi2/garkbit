import { Radio } from 'backbone'
import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'

import FrontDoorMainView from '../frontdoor/views/docview'

MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'

class Controller extends MainController
  layoutClass: ToolbarAppletLayout

  viewPage: (name) ->
    console.log "name is", name
    @setupLayoutIfNeeded()
    model = MainChannel.request 'main:app:get-document', name
    response = model.fetch()
    response.done =>
      view = new FrontDoorMainView
        model: model
      @layout.showChildView 'content', view
    response.fail ->
      MessageChannel.request 'warning', "failed to get #{name}"

  viewIndex: ->
    @viewPage 'taxes/index'
      
export default Controller

