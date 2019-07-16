import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'

import navigate_to_url from 'tbirds/util/navigate-to-url'

import AddBossModal from './modals/add-boss-modal'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'company'


viewTemplate = tc.renderable (model) ->
  tc.div '.row.listview-list-entry', ->
    tc.raw marked "# #{model.appName} started."
    
class MainView extends Marionette.View
  template: viewTemplate
  templateContext:
    appName: 'company'
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
            
          
    else
      msg = "#{user.name} is not in the \"boss\" group."
      MessageChannel.request 'warning', msg
     
export default MainView
