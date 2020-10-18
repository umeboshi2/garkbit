import  { extend } from 'lodash'
import { Radio } from 'backbone'
import DbCollection from 'tbirds/dbcollection'

MainChannel = Radio.channel 'global'
AppChannel = Radio.channel 'useradmin'

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'


defaultOptions =
  channelName: 'useradmin'

#apiroot = "/api/admin/jsonapi"
apiroot = "/api/dev/bapi/useradmin"

usersUrl = "#{apiroot}/users"
class UserModel extends AuthModel
  urlRoot: usersUrl

class UserCollection extends AuthCollection
  url: usersUrl
  model: UserModel

export dbcfg = new DbCollection extend defaultOptions,
  modelName: 'user'
  modelClass: UserModel
  collectionClass: UserCollection



AppletLocals = {}
AppChannel.reply 'locals:get', (name) ->
  AppletLocals[name]
AppChannel.reply 'locals:set', (name, value) ->
  AppletLocals[name] = value
AppChannel.reply 'locals:delete', (name) ->
  delete AppletLocals[name]

