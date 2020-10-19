import { Radio } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import { FrontMatterCollection } from '../dbchannel/front-matter'
import ButtonInput from 'common/button-input'

AppChannel = Radio.channel 'pmc'

class SimpleEntry extends MnView
  tagName: 'li'
  className: 'list-group-item'
  template: tc.renderable (model) ->
    tc.div '.row', ->
      tc.span '.mr-auto', model.name
      tc.button '.ml-auto.del-btn.btn.btn-sm.btn-outline-danger', ->
        tc.text 'Delete'
  ui:
    delBtn: '.del-btn'
  events:
    'click @ui.delBtn': 'delBtnClicked'
  delBtnClicked: ->
    console.log "delBtnClicked"
    

class TopicCollectionView extends CollectionView
  tagName: 'ul'
  className: 'list-group'
  childView: SimpleEntry
  viewComparator: 'name'
  
    
class MainView extends MnView
  template: tc.renderable (model) ->
    tc.h3 "Manage Topics"
    tc.button '.update-btn.btn.btn-outline-warning', 'Update static topics'
    tc.div '.add-topic-input'
    tc.div '.paginate-bar'
    tc.div '.content'
  ui:
    addTopic: '.add-topic-input'
    content: '.content'
    paginateBar: '.paginate-bar'
    updateBtn: '.update-btn'
  regions:
    addTopic: '@ui.addTopic'
    content: '@ui.content'
    paginateBar: '@ui.paginateBar'
  events:
    'click @ui.updateBtn': 'updateBtnClicked'
  childViewEvents:
    'input:submit': 'topicSubmitted'
  onRender: ->
    collection = AppChannel.request 'get-topic-collection'
    response = collection.fetch()
    response.done =>
      view = new ButtonInput
        buttonText: 'Add'
        placeholder: "Add a topic...."
      @showChildView 'addTopic', view
  showTopicsView: ->
    collection = AppChannel.request 'get-topic-collection'
    view = new TopicCollectionView
      collection: collection
    @showChildView 'content', view
    
  topicSubmitted: (options) ->
    collection = AppChannel.request 'get-topic-collection'
    @ui.addTopic.hide()
    data = name:options.value
    model = collection.add data
    response = model.save()
    response.done =>
      @ui.addTopic.show()
  updateBtnClicked: ->
    console.log "update clicked"
    topics = AppChannel.request 'get-topic-collection'
    fmtopics = AppChannel.request 'get-fmtopic-collection'
    papers = new FrontMatterCollection
    topics.fetch()
    .then ->
      fmtopics.fetch()
    .then ->
      papers.fetch()
    .then ->
      papers.each (paper) ->
        pmcid = paper.id
        pmtopics = fmtopics.where pmcid:pmcid
        
export default MainView
