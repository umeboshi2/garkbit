import _ from 'underscore'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'

import DbCollection from 'tbirds/dbcollection'


MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'dbadmin'

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'


dbcfg = {}
defaultOptions =
  channelName: 'dbadmin'
  
wikiUrl = '/api/dev/dbadmin/wikipage'
class WikiPage extends AuthModel
  urlRoot: wikiUrl
  
class WikiCollection extends AuthCollection
  url: wikiUrl
  model: WikiPage

dbcfg.wikipage = new DbCollection _.extend, defaultOptions,
  modelName: 'wikipage'
  modelClass: WikiPage
  collectionClass: WikiCollection
  
