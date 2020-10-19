import { Model, Collection, Radio } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'
import { promisify } from 'es6-promisify'
import { includes } from 'lodash'

import removeTrailingSlashes from 'tbirds/util/remove-trailing-slashes'
import PaginateBar from 'tbirds/views/paginate-bar'
import HasJsonView from 'common/has-jsonview'
import { eventIndex } from 'common/index-models'
import PMCFrontMatter from './pmc-front-matter'

import { ProgressModel, ProgressView } from 'tbirds/views/simple-progress'

import { FMTopicModel } from '../dbchannel/fmtopics'


AppChannel = Radio.channel 'pmc'

eventManager = AppChannel.request 'get-event-manager'
eventManager.initAll()

pmcPrefix = 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC'

getPMCId = (link) ->
  id = link.split(pmcPrefix)[1]
  return Number removeTrailingSlashes id
  

isPMCLink = (link) ->
  if link.startsWith pmcPrefix
    return true
  return false

pmcIndexIdCollection = ->
  categories = eventIndex.get 'categories'
  pmcCategories = new Collection
  for key of categories
    item = categories[key]
    if item.pmc_ids.length
      item.id = item.name
      pmcCategories.add item

  allPmcIds = new Collection []
  pmcCategories.each (model) ->
    model.get('pmc_ids').forEach (id) ->
      allPmcIds.add
        id: id
        name: id
  return allPmcIds

allPmcIds = pmcIndexIdCollection()

class ObjView extends MnView
  template: tc.renderable (model) ->
    tc.h5 '.text-center', "Model Data"
    tc.div '.jsonview'
  behaviors: [HasJsonView]
  
class MainView extends MnView
  template: tc.renderable (model) ->
    tc.h3 '.text-center', "Import PMC Data"
    tc.div '.paginate-bar'
    tc.div '.import-progress'
    tc.div '.import-btn.btn.btn-outline-warning', 'Import Models'
    tc.div '.update-btn.btn.btn-outline-warning', 'Update Local Models'
    tc.div '.content'
  ui:
    content: '.content'
    paginateBar: '.paginate-bar'
    importProgress: '.import-progress'
    importBtn: '.import-btn'
    updateBtn: '.update-btn'
    header: 'h3'
  regions:
    content: '@ui.content'
    paginateBar: '@ui.paginateBar'
    importProgress: '@ui.importProgress'
    importBtn: '@ui.importBtn'
  events:
    'click @ui.importBtn': 'importBtnClicked'
    'click @ui.updateBtn': 'updateBtnClicked'
    'model:imported': 'onModelImported'
  collection: allPmcIds
  onRender: ->
    fmCollection = AppChannel.request 'get-fm-collection'
    fmCollection.fetch()
    .then =>
      indexCollection = pmcIndexIdCollection()
      indexCollection.each (model) ->
        loc = fmCollection.get model.id
        if loc
          allPmcIds.remove model
      if @collection.length
        view = new ObjView
          model: @collection
        @showChildView 'content', view
        model = new ProgressModel
        model.set('valuemax', @collection.length)
        model.set('valuenow', 0)
        view = new ProgressView
          model: model
        @showChildView 'importProgress', view
        @progressModel = model
        @progressView = view
        msg = "#{@collection.length} models to import."
        @ui.header.text msg
      else
        @ui.importBtn.hide()
        @ui.header.text "No models to import."
  importModel: (model, index) ->
    remote = AppChannel.request 'make-remote-model', model.id
    response = remote.fetch()
    response.done =>
      id = Number remote.get('id')
      content = remote.get('content')
      lpromise = AppChannel.request 'save-fm-content', id, content
      lpromise.then =>
        index += 1
        @progressModel.set('valuenow', index)
        @progressView.render()
        @triggerMethod 'model:imported'

  onModelImported: ->
    if @collection.length
      valueNow = @progressModel.get('valuenow')
      model = @collection.pop()
      @importModel model, valueNow
    
  importBtnClicked: ->
    @onModelImported()

  updateBtnClicked: ->
    categories = eventIndex.get 'categories'
    pmcCategories = new Collection
    for key of categories
      item = categories[key]
      if item.pmc_ids.length
        col = eventManager.collections.categories
        model = col.findWhere name: item.name
        model.set 'selected', true
    promises = eventManager.fetchEventModels()
    topicCollection = AppChannel.request 'get-topic-collection'
    topicCollection = new Collection await topicCollection.fetch()
    fmTopicCollection = AppChannel.request 'get-fmtopic-collection'
    await fmTopicCollection.fetch()
    Promise.all(promises).then ->
      selected = eventManager.getSelectedCategories()
      names = selected.pluck 'name'
      names.forEach (name) ->
        events = eventManager.getEventData(name).get('events')
        events.forEach (e) ->
          if isPMCLink e.link
            pmcid = getPMCId e.link
            topics = e.topics
            e.topics.forEach (tname) ->
              dbTopic = topicCollection.findWhere name: tname
              topicId = dbTopic.id
              item =
                pmcid: pmcid
                topic_id: topicId
              fmtopic = fmTopicCollection.findWhere item
              if not fmtopic?
                model = new FMTopicModel item
                fmTopicCollection.add model
                await model.save()
export default MainView
