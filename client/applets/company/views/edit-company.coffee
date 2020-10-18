import BaseEditor from './base-edit-company'

class EditView extends BaseEditor
  # the model should be assigned in the controller
  createModel: ->
    @model
    
export default EditView

