import { Radio, history as bbhistory } from 'backbone'
import { View } from 'backbone.marionette'
import tc from 'teacup'

import navigate_to_url from 'tbirds/util/navigate-to-url'

import AddBossModal from './modals/add-boss-modal'

MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'
AppChannel = Radio.channel 'company'

class MainView extends View
  template: tc.renderable ->
    tc.div '.row.listview-list-entry.top-view'
    tc.div '.row.child-view'
  templateContext:
    appName: 'company'
  ui:
    topView: '.top-view'
    childView: '.child-view'
  regions:
    childView: '@ui.childView'
  getBossObject: (user) ->
    boss = AppChannel.request 'db:boss:new', id: user.uid
    response = boss.fetch()
    response.fail (error) ->
      if error.status == 404
        model = AppChannel.request 'db:boss:new', id: user.uid
        view = new AddBossModal
          model: model
        MainChannel.request 'main:app:show-modal', view
      else
        MessageChannel.request 'xhr-error', error
    return
      response: response
      model: boss
  getCompanyObject: ->
    collection = AppChannel.request 'db:company:collection'
    response = collection.fetch()
    response.fail (error) ->
      MessageChannel.request 'xhr-error', error
    return
      response: response
      collection: collection
  onRender: ->
    @ui.topView.hide()
    user = MainChannel.request 'main:app:decode-auth-token'
    if 'boss' in user.groups
      bossResponse = @getBossObject user
      response = bossResponse.response
      response.done (options) =>
        console.log "get boss", options
        companyResponse = @getCompanyObject user
        companyResponse.response.done ->
          collection = companyResponse.collection
          console.log "collection", collection
          if not collection.length
            bbhistory.navigate '#company/company/add', trigger:true
          else if collection.length == 1
            companyID = collection.at(0).get('id')
            url = "#company/company/view/#{companyID}"
            bbhistory.navigate url, trigger:true
          else
            bbhistory.navigate '#company/company/list', trigger:true
    else if 'worker' in user.groups
      heading = "Worker Page for #{user.fullname}"
      @ui.topView.text heading
      @ui.topView.show()
      navigate_to_url '#company/worker'
    else
      msg = "You must be a boss or worker for access."
      MessageChannel.request 'warning', msg
     
export default MainView
