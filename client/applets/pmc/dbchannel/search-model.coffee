import _ from 'underscore'
import { Model, Radio } from 'backbone'
import qs from 'qs'
import X2JS from 'x2js'

AppChannel = Radio.channel 'pmc'

class SearchModel extends Model
  url: ->
    data =
      db: 'pmc'
      term: @get 'term'
      tool: 'jquery'
      email: 'joseph.rawson.works@gmail.com'
    base = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi'
    query = qs.stringify data
    url = "#{base}?#{query}"
    return url
  parse: (data) ->
    x2js = new X2JS()
    parsed = x2js.xml2js data
    return parsed
  fetch: (options) ->
    options = _.extend options || {},
      dataType: 'text'
    super options

AppChannel.reply 'make-search-model', (term) ->
  return new SearchModel
    term: term

