Backbone = require 'backbone'

{ make_dbchannel } = require 'tbirds/crud/basecrudchannel'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'dbadmin'

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'

wikiUrl = '/api/dev/dbadmin/wikipage'

class WikiPage extends AuthModel
  urlRoot: wikiUrl
  
class WikiCollection extends AuthCollection
  url: wikiUrl
  model: WikiPage


