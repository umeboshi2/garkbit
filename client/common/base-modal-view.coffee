import { Radio } from 'backbone'
import { View as MnView } from 'backbone.marionette'

import IsEscapeModal from 'tbirds/behaviors/is-escape-modal'

MainChannel = Radio.channel 'global'

class BaseModalView extends MnView
  behaviors: [IsEscapeModal]
  emptyModal: ->
    app = MainChannel.request 'main:app:object'
    layout = app.getView()
    region = layout.getRegion 'modal'
    region.empty()

export default BaseModalView
