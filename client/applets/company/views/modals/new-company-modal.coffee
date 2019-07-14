import $ from 'jquery'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import { modal_close_button } from 'tbirds/templates/buttons'
import BootstrapFormView from 'tbirds/views/bsformview'


import make_field_input_ui from 'tbirds/util/make-field-input-ui'
import navigate_to_url from 'tbirds/util/navigate-to-url'

{ form_group_input_div } = require 'tbirds/templates/forms'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
SiteNavChannel = Backbone.Radio.channel 'site-nav'

companyTemplate = tc.renderable (model) ->
  tc.div '.modal-dialog.modal-md', ->
    tc.div '.modal-content', ->
      tc.h3 "Please create a Company"
      tc.div '.modal-body', ->
        form_group_input_div
          input_id: 'input_name'
          label: 'Name'
          input_attributes:
            name: 'name'
            value: 'Please insert a name'
        form_group_input_div
          input_id: 'input_description'
          label: 'Description'
          input_attributes:
            name: 'description'
            value: 'Please provide a brief description.'
        tc.div '.spinner.fa.fa-spinner.fa-spin'
      tc.div '.modal-footer', ->
        tc.button '.btn.btn-warning.fa.fa-close.mr-auto',
        data:dismiss:'modal', "Cancel"
        
        #tc.input '.btn.btn-primary.login-btn', type:'submit',
        #data:dismiss:'modal', value:'login'
        tc.input '.btn.btn-primary.ml-auto.login-btn',
        type:'submit', value:'Submit'
        
class BaseView extends BootstrapFormView
  ui: ->
    uiobject = make_field_input_ui @getOption 'fieldList'
    return uiobject
  createModel: ->
    return @model
  emptyModal: ->
    app = MainChannel.request 'main:app:object'
    layout = app.getView()
    region = layout.getRegion 'modal'
    region.empty()
    

class MainModal extends BaseView
  template: bossTemplate
  templateContext: ->
    namePlaceholder: MainChannel.request('main:app:decode-auth-token').name
  fieldList: ['name']
  updateModel: ->
    @model.set 'name', @ui.name.val()
    console.log "model updated", @model
  saveModel: ->
    # https://stackoverflow.com/a/24915961/1869821
    syncOpts =
      success: => @trigger 'save:form:success', @model
      error: => @trigger 'save:form:failure', @model
      type: 'POST'
      url: @model.urlRoot
    @model.save null, syncOpts
  onSuccess: ->
    @emptyModal()
    console.log "onSuccess"
    applet = MainChannel.request 'main:applet:get-applet', 'company'
    console.log 'applet', applet
    controller = applet.getController()
    controller.addBoss()
    


export default MainModal
