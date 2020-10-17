import _ from 'underscore'
import { Radio } from 'backbone'
import DbCollection from 'tbirds/dbcollection'

MainChannel = Radio.channel 'global'

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

export default dbcfg
