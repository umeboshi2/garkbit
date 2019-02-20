Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
xml = require 'xml2js-parseonly/src/xml2js'

navigate_to_url = require('tbirds/util/navigate-to-url').default
HouseMembersView = require './housemembers'
{ get_xml } = require '../getxml'
parse_hr_membs = require '../parsers/housemembers'
XMLParseModel = require '../dbchannel/xmlparse-model'


MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'msleg'

class MembersModel extends XMLParseModel
  url: ->
    config = AppChannel.request 'get-msleg-config'
    return config.hr_membs

class MainView extends Marionette.View
  template: tc.renderable (model) ->
    tc.h1 "MS Legislature Demo"
    tc.div '.house-members'
  ui:
    houseMembers: '.house-members'
  regions:
    houseMembers: '@ui.houseMembers'

  onRender: ->
    members = new MembersModel
    url = members.url()
    LocalObject = AppChannel.request 'get-local-xmlobject-model'
    console.log "LocalObject", LocalObject, url
    localobject = new LocalObject
      url: url
    Collection = AppChannel.request 'get-local-xmlobject-collection'
    collection = new Collection
    response = collection.fetch
      data:
        url: url
    console.log "localObject", localobject
    console.log "response", response, localobject
    response.fail =>
      response = members.fetch
        dataType: 'text'
      console.log "RESPONSE", response
      response.done =>
        console.log "members", members
        console.log "object", members.toJSON()
        data =
          url: url
          content: members.toJSON()
        p = AppChannel.request 'save-local-xmlObject', data
        p.done =>
          members = parse_hr_membs members.toJSON()
          collection = new Backbone.Collection members
          view = new HouseMembersView
            collection: collection
          @showChildView 'houseMembers', view
      response.fail ->
        console.warn "members", members
  templateContext:
    appName: 'msleg'
    
module.exports = MainView

