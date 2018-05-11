Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
PageableCollection = require 'backbone.paginator'

{ parse_xhr_xml } = require '../getxml'
xml = require 'xml2js-parseonly/src/xml2js'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'msleg'

class XMLParseModel extends Backbone.Model
  parse: (response) ->
    Parser = new xml.Parser
      explicitArray: false
      normalizeTags: true
      async: false
    Parser.parseString response, (err, json) =>
      @unset 'content'
      @set json
    return content: response
    
      
module.exports = XMLParseModel
