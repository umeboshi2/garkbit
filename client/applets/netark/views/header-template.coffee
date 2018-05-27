tc = require 'teacup'

module.exports = tc.renderable (options) ->
  tc.div '.listview-header', ->
    tc.img '.mr-3.mb-1', src:options.leftIcon, style:"height:2rem;width:2rem"
    tc.text options.text
    tc.img '.ml-3.mb-1', src:options.rightIcon, style:"height:2rem;width:2rem"
