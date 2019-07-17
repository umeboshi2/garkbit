import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'

import navigate_to_url from 'tbirds/util/navigate-to-url'

import AddBossModal from './modals/add-boss-modal'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'company'


class MainView extends Marionette.View
  template: tc.renderable (model) ->
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
    bossCollection = AppChannel.request 'db:boss:collection'
    boss = AppChannel.request 'db:boss:new', id: user.uid
    response = boss.fetch()
    response.fail (error) ->
      if error.status == 404
        model = AppChannel.request 'db:boss:new', id: user.uid
        view = new AddBossModal
          model: model
        MainChannel.request 'main:app:show-modal', view
      else
        msg = error.responseJSON.message
        MessageChannel.request 'xhr-error', error
    return
      response: response
      model: boss
      
  getCompanyObject: (user) ->
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
        boss_id = options.id
        companyResponse = @getCompanyObject user
        companyResponse.response.done ->
          collection = companyResponse.collection
          console.log "collection", collection
          if not collection.length
            navigate_to_url '#company/company/add'
          else if collection.length == 1
            companyID = collection.at(0).get('id')
            navigate_to_url "#company/company/view/#{companyID}"
          else
            navigate_to_url '#company/company/list'
            
    else if 'worker' in user.groups
      msg = "#{user.name} is in the \"worker\" group."
      MessageChannel.request 'success', msg
      heading = "Worker Page for #{user.name}"
      @ui.topView.text heading
      @ui.topView.show()
      require.ensure [], () =>
        token = MainChannel.request 'main:app:decode-auth-token'
        worker = AppChannel.request 'db:worker:get', token.uid
        View = require('./worker-view').default
        view = new View
          model: worker
        @showChildView 'childView', view
      # name the chunk
      , 'company-worker-main-child-view'
    else
      msg = "You must be a boss or worker for access."
      MessageChannel.request 'warning', msg
      
     
export default MainView
