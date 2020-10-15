import { Radio, history } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import noImage from 'tbirds/templates/no-image-span'
#PointerOnHover = require('tbirds/behaviors/pointer-on-hover').default
import HasHeader from 'tbirds/behaviors/has-header'

MessageChannel = Radio.channel 'messages'
AppChannel = Radio.channel 'tvmaze'

showTemplate = tc.renderable (model) ->
  show = model.show
  tc.div '.card.bg-body-d5', ->
    tc.div '.row', ->
      tc.div '.col-md-2', ->
        if show.image?.medium
          tc.img '.main-image.card-img-bottom', src:show.image.medium
        else
          noImage '5x'
      tc.div '.col-md-9', ->
        tc.div '.card-block.bg-body-d10', ->
          tc.h3 '.card-title', show.name
          tc.h4 "Premiered: #{new Date(show.premiered).toDateString()}"
          tc.raw show.summary
        tc.button '.select-show.btn.btn-primary',
        style:'display:none', "Select this show"

class ShowResultView extends MnView
  template: showTemplate
  ui:
    selectShow: '.select-show'
    mainImage: '.main-image'
  events:
    'click @ui.selectShow': 'selectShow'
    'mouseenter @ui.mainImage': 'handleImageHover'
    'click @ui.mainImage': 'viewShow'
  inLocalCollection: ->
    id = @model.toJSON().show.id
    collection = @getOption 'localCollection'
    return collection.get id
  onRender: ->
    if not @inLocalCollection()
      @ui.selectShow.show()
  handleImageHover: ->
    if @inLocalCollection()
      @ui.mainImage.css
        cursor: 'pointer'
  viewShow: ->
    id = @model.toJSON().show.id
    history.navigate "#tvmaze/shows/view/#{id}", trigger:true
  selectShow: ->
    id = @model.toJSON().show.id
    show = AppChannel.request 'get-remote-show', id
    response = show.fetch()
    response.done ->
      p = AppChannel.request 'save-local-show', show.toJSON()
      p.then ->
        history.navigate "#tvmaze/shows/view/#{id}", trigger:true
    response.fail ->
      MessageChannel.request 'danger', "Bad move"
      
  

class SearchResultsView extends MnView
  template: tc.renderable ->
    tc.div '.listview-header', ->
      tc.text "Matched TV Shows"
    tc.div '.show-list'
  ui:
    header: '.listview-header'
    itemList: '.show-list'
  regions:
    itemList: '@ui.itemList'
  behaviors:
    HasHeader:
      behaviorClass: HasHeader
  onRender: ->
    @ui.header.hide()
    view = new CollectionView
      collection: @collection
      childView: ShowResultView
      childViewOptions:
        localCollection: AppChannel.request 'get-local-tvshows'
    @showChildView 'itemList', view
  
        

export default SearchResultsView


