import _ from 'underscore'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import DbCollection from 'tbirds/dbcollection'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'places'

apiRoot = "/api/dev/places"

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'

dbcfg = {}
defaultOptions =
  channelName: 'places'

userLocationUrl = "#{apiRoot}/user"
class UserLocation extends AuthModel
  urlRoot: userLocationUrl

class UserLocationCollection extends AuthCollection
  model: UserLocation
  url: userLocationUrl
dbcfg.userlocation = new DbCollection _.extend defaultOptions,
  modelName: 'userlocation'
  modelClass: UserLocation
  collectionClass: UserLocationCollection
