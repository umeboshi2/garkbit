_ = require 'underscore'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
JView = require 'json-view'
require 'json-view/devtools.css'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'ebcsv'

class ItemView extends Marionette.View
  tagName: 'div'
  className: 'col-md-3'
  template: tc.renderable (model) ->
    if model.bgc == "#FFF5EE"
      aClass = '.bg-body-d10.text-light'
    else if model.bgc == "#FFEFD5"
      aClass = '.bg-body-d5'
    else
      aClass = '.bg-warning'
    tc.a aClass, href:"#msleg/house/members/view/#{model.id}", ->
      tc.text model.name
  ui:
    link: 'a'
  events:
    'click @ui.link': 'linkClicked'
  linkClicked: (event) ->
    event.preventDefault()
    console.log "MODEL", @model.get 'link'
    
  
class ItemCollectionView extends Marionette.CollectionView
  childView: ItemView
  className: 'row'

class ListView extends Marionette.View
  template: tc.renderable ->
    tc.div '.members.col-md-10.offset-md-1'
  ui:
    members: '.members'
  regions:
    members: '@ui.members'
  onRender: ->
    view = new ItemCollectionView
      collection: @collection
    @showChildView 'members', view

module.exports = ListView
