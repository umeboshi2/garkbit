import Backbone from 'backbone'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'hourly'

apiRoot = "/api/dev/hourly"

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'



class TimeClock extends AuthModel
  urlRoot: "#{apiRoot}/time-clock"
  
export default TimeClock
