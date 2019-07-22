import _ from 'underscore'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import DbCollection from 'tbirds/dbcollection'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'wikipages'

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'


apiroot = "/api/dev/bsapi/main"
url = "#{apiroot}/wikipages"

defaultOptions =
  channelName: 'wikipages'

class WikiPage extends AuthModel
  urlRoot: url

class WikiPageCollection extends AuthCollection
  url: url
  model: WikiPage
dbcfg = new DbCollection _.extend defaultOptions,
  modelName: 'wikipage'
  modelClass: WikiPage
  collectionClass: WikiPageCollection

