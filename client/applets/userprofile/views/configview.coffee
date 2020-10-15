import { Radio } from 'backbone'
import tc from 'teacup'

import BootstrapFormView from 'tbirds/views/bsformview'
import navigate_to_url from  'tbirds/util/navigate-to-url'
import { form_group_input_div } from 'tbirds/templates/forms'

MainChannel = Radio.channel 'global'

# FIXME, make a css manifest
themes = [
  'vanilla'
  'cornsilk'
  'BlanchedAlmond'
  'DarkSeaGreen'
  'LavenderBlush'
  ]

config_template = tc.renderable ->
  current_theme = MainChannel.request 'main:app:get-theme'
  tc.div '.form-group', ->
    tc.label '.control-label',
      for: 'select_theme'
      "Theme"
    tc.select '.form-control', name:'select_theme', ->
      for opt in themes
        if opt is current_theme
          tc.option selected:null, value:opt, opt
        else
          tc.option value:opt, opt
  form_group_input_div
    input_id: 'input_pagesize'
    label: 'Page Size'
    input_attributes:
      name: 'pagesize'
      value: MainChannel.request 'main:app:get-pagesize'
  tc.input '.btn.btn-primary', type:'submit', value:"Submit"
  tc.div '.spinner.fa.fa-spinner.fa-spin'

class UserConfigView extends BootstrapFormView
  template: config_template
  ui:
    theme: 'select[name="select_theme"]'
    pagesize: 'input[name="pagesize"]'
  createModel: ->
    @model
    
  updateModel: ->
    selected_theme = @ui.theme.val()
    MainChannel.request 'main:app:set-theme', selected_theme
    oldsize = MainChannel.request 'main:app:get-pagesize'
    pagesize = @ui.pagesize.val()
    MainChannel.request 'main:app:set-pagesize', pagesize
    if oldsize != pagesize
      navigate_to_url '/'
    
  saveModel: ->
    theme = MainChannel.request 'main:app:get-theme'
    MainChannel.request 'main:app:switch-theme', theme
    @trigger 'save:form:success', @model
    
    
  onSuccess: ->
    navigate_to_url '#profile'
    

export default UserConfigView

