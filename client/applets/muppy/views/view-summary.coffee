import { View } from 'backbone.marionette'
import tc from  'teacup'

########################################
class ItemView extends View
  template: tc.renderable (model) ->
    tc.div "MODEL"
    tc.div model.name
    tc.div model.content.length

export default ItemView
