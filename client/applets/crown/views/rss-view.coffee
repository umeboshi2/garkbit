import { Model } from 'backbone'
import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'
import X2JS from 'x2js'
import moment from "moment"

import 'common/json-view.css'

#class QRSSModel extends Model
  #url: 'https://www.qmap.pub/api/rss?lang=en'

class RSSModel extends Model
  initialize: (attributes, options) ->
    @url = options.url
  parse: (data) ->
    x2js = new X2JS()
    return x2js.xml2js data

class HeaderView extends MnView
  template: tc.renderable (model) ->
    tc.h1 model.rss.channel.description
    

class IndexView extends MnView
  template: tc.renderable (model) ->
    channel = model.rss.channel
    for i in channel.item
      tc.div '.list-group-item.card', ->
        tc.div '.card-title', ->
          tc.small moment.utc(i.pubDate).format("MMMM D, YYYY")
          tc.text ' | '
          tc.a href:i.link,  i.title
          tc.div '.card-body', ->
            tc.raw i.description

class MainView extends MnView
  template: tc.renderable ->
    tc.div '.row.listview-header'
    tc.div '.index-view'
  ui:
    header: '.listview-header'
    indexView: '.index-view'
    refreshBtn: '.refresh-btn'
  regions:
    header: '@ui.header'
    indexView: '@ui.indexView'
  events:
    'click @ui.refreshBtn': 'refreshBtnClicked'
  model: new RSSModel {}, url: "https://cors-anywhere.herokuapp.com/https://msdh.ms.gov/msdhsite/rssFeed.xml"  # noqa
  showIndexView: ->
    region = @getRegion 'indexView'
    region.empty()
    view = new IndexView
      model: @model
    @showChildView 'indexView', view
  showHeader: ->
    region = @getRegion 'header'
    region.empty()
    view = new HeaderView
      model: @model
    @showChildView 'header', view
  onRender: ->
    response = @model.fetch
      dataType: 'text'
    response.done =>
      @showIndexView()
      @showHeader()
      
export default MainView
