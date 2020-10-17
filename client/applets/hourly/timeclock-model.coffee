import { Radio } from 'backbone'

MainChannel = Radio.channel 'global'
AuthModel = MainChannel.request 'main:app:AuthModel'
apiRoot = "/api/dev/hourly"

class TimeClock extends AuthModel
  urlRoot: "#{apiRoot}/time-clock"

export default TimeClock
