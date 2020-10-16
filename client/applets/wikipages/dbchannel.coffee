import _ from 'underscore'
import { Radio } from 'backbone'
import DbCollection from 'tbirds/dbcollection'

MainChannel = Radio.channel 'global'

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
export dbcfg = new DbCollection _.extend defaultOptions,
  modelName: 'wikipage'
  modelClass: WikiPage
  collectionClass: WikiPageCollection

