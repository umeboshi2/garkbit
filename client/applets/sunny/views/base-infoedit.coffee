import Backbone from 'backbone'
import { View, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import navigate_to_url from 'tbirds/util/navigate-to-url'

class BaseInfoEditView extends View
  state: 'info'
  template: tc.renderable (model) ->
    tc.div '.badge.badge-primary.edit-btn', 'edit'
    tc.div '.info-container'
  ui:
    editBtn: '.edit-btn'
    infoContainer: '.info-container'
  regions:
    infoContainer: '@ui.infoContainer'
  events:
    'click @ui.editBtn': 'editBtnClicked'
  onRender: ->
    @showInfo()
  showInfo: ->
    region = @getRegion 'infoContainer'
    region.empty()
    ViewClass = @getOption 'infoView'
    view = new ViewClass
      model: @model
    @showChildView 'infoContainer', view
    @ui.editBtn.show()
  showEditor: ->
    region = @getRegion 'infoContainer'
    region.empty()
    ViewClass = @getOption 'editView'
    view = new ViewClass
      model: @model
    @showChildView 'infoContainer', view
    @ui.editBtn.hide()
  editBtnClicked: ->
    @showEditor()
  childViewEvents:
    'save:form:success': 'editSuccess'
  editSuccess: ->
    @showInfo()
    
    
export default BaseInfoEditView
