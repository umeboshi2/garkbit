import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'
import { modal_close_button } from 'tbirds/templates/buttons'

confirmDeleteTemplate = tc.renderable (model) ->
  tc.div '.modal-dialog', ->
    tc.div '.modal-content', ->
      tc.h3 "Delete #{model.itemLabel}"
      tc.div '.modal-body', ->
        tc.div '.selected-children'
      tc.div '.modal-footer', ->
        tc.ul '.list-inline', ->
          tc.li ".confirm-delete-button", ->
            modal_close_button "OK", "check"
          tc.li ".cancel-delete-button", ->
            modal_close_button "Cancel"
            

class ConfirmDeleteModal extends MnView
  template: confirmDeleteTemplate
  ui:
    confirmBtn: '.confirm-delete-button'
    cancelBtn: '.cancel-delete-button'
    
  events: ->
    'click @ui.confirmBtn': 'confirmDelete'

  confirmDelete: ->
    name = @model.get('name') or "some model"
    response = @model.destroy()
    response.done ->
      MessageChannel.request 'success', "#{name} deleted.",
    response.fail ->
      MessageChannel.request 'danger', "#{name} NOT deleted."
      
export default ConfirmDeleteModal
