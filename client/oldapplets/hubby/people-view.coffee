Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'

HubChannel = Backbone.Radio.channel 'hubby'

#################################
# templates
#################################


class SimpleMeetingView extends Marionette.View
  template: tc.renderable (model) ->
    name = "meeting"
    item_btn = ".btn.btn-default.btn-xs"
    tc.li ".list-group-item.#{name}-item", ->
      tc.span ->
        tc.a href:"#hubby/viewperson/#{model.id}", model.title
      #tc.div '.btn-group.pull-right', ->
      #  tc.button ".edit-item.#{item_btn}.btn-info.fa.fa-edit", 'edit'
      #  tc.button ".delete-item.#{item_btn}.btn-danger.fa.fa-close", 'delete'


class PersonEntry extends Marionette.View
  template: tc.renderable (model) ->
    btn = ".btn.btn-default.btn-sm"
    console.log "MODEL", model
    tc.div '.listview-list-entry', ->
      tc.span "#{model.firstname} #{model.lastname}"
      if model.photo_link
        #tc.img src:"https://hattiesburg.legistar.com/#{model.photo_link}"
        tc.span ".badge.badge-info", "Has Photo"

class ListView extends Marionette.View
  template: tc.renderable () ->
    tc.div '.listview-header', ->
      tc.text "People"
    tc.hr()
    tc.ul ".list-group"
  ui:
    listEl: '.list-group'
  regions:
    list: '@ui.listEl'
  onRender: ->
    view = new Marionette.CollectionView
      childView: PersonEntry
      collection: @getOption 'collection'
    @showChildView 'list', view
    

module.exports = ListView
  
