Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'

navigate_to_url = require 'tbirds/util/navigate-to-url'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'muppy'

########################################
class ItemView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div "MODEL"
    tc.div model.name
    tc.div model.content.length    
    
module.exports = ItemView


