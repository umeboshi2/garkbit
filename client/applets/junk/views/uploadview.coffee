import { Radio } from 'backbone'
import { View } from 'backbone.marionette'
import tc from 'teacup'

import 'bootstrap-fileinput'
import 'bootstrap-fileinput/css/fileinput.css'


MainChannel = Radio.channel 'global'
  
apiroot = '/api/dev/misc'


class UploadMainView extends View
  template: tc.renderable ->
    tc.article '.document-view.content', ->
      tc.div '.body', ->
        "Hello there"
    tc.div '.file-div', ->
      tc.input '.fileinput', name:'zathras', type:'file'
  ui:
    fileinput: '.fileinput'
  onDomRefresh: ->
    @ui.fileinput.fileinput
      uploadUrl: "#{apiroot}/upload"
      ajaxSettings:
        beforeSend: MainChannel.request 'main:app:authBeforeSend'

export default UploadMainView
