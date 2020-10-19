import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import _ from 'underscore'

import HasJsonView from 'common/has-jsonview'

AppChannel = Backbone.Radio.channel 'pmc'

PMC_URL_PREFIX = "https://www.ncbi.nlm.nih.gov/pmc/articles/"

makePMCurl = (id) ->
  return "#{PMC_URL_PREFIX}PMC#{id}/"

makeDOIurl = (doi) ->
  prefix = "https://dx.doi.org/"
  return prefix + doi
  
  
parseRecord = (record) ->
  record = record.content['OAI-PMH'].GetRecord.record.metadata.article.front
  content = {}
  jmeta = record['journal-meta']
  tprop = 'journal-title'
  gprop = 'journal-title-group'
  journal = "Not Found"
  if gprop of jmeta
    journal = jmeta[gprop][tprop]
  else if tprop of jmeta
    journal = jmeta[tprop]
  content.journal = journal
  meta = record['article-meta']
  tnode = meta['title-group']['article-title']
  title = "Not Found"
  if tnode?.__text
    title = tnode.__text
  else
    title = tnode
  content.title = title
  articleIds = meta['article-id']
  articleIds.forEach (obj) ->
    if obj?['_pub-id-type'] == 'doi'
      doi = obj.__text
      content.doi = doi
  content.abstract = meta.abstract?.p
  return content

class PMCFrontMatter extends Marionette.View
  behaviors: [HasJsonView]
  template: tc.renderable (model) ->
    content = parseRecord model
    href = makePMCurl(model.id)
    tc.div '.card', ->
      tc.div '.card-body', ->
        tc.div '.card-title',  content.title
        tc.div '.small', content.journal
        tc.a '.pmc-anchor.small', href:href, '(PMC)'
        if content?.doi
          tc.a '.small', href:makeDOIurl(content.doi), target:'_blank', ->
            tc.text " (doi:#{content.doi})"
        tc.button '.destroy-btn.btn.btn-outline-danger.btn-sm', 'Delete'
        if content?.abstract
          tc.p '.card-text.small', content.abstract
      tc.div '.jsonview'
  ui:
    pmcAnchor: '.pmc-anchor'
    deleteBtn: '.destroy-btn'
    jsonView: '.jsonview'
  events:
    'click @ui.pmcAnchor': 'pmcAnchorClicked'
    'click @ui.deleteBtn': 'deleteBtnClicked'
  onRender: ->
    if not __DEV__
      @ui.jsonView.hide()
  pmcAnchorClicked: (event) ->
    event.preventDefault()
  deleteBtnClicked: ->
    fmCollection = AppChannel.request 'get-fm-collection'
    model = fmCollection.get @model.id
    response = model.destroy()
    response.done =>
      @trigger 'model:destroyed'

class PMCEntry extends Marionette.View
  templateContext: ->
    #local: @model.isLocal()
    local: @model.hasOAIcontent()
  template: tc.renderable (model) ->
    tc.text "PMCID: PMC#{model.id} "
    if not model.local
      btnClass = '.btn.btn-outline-warning.btn-sm'
      tc.button ".show-info-btn#{btnClass}.fa.fa-download", ->
        ' Download Front Matter'
    tc.div '.content'
  ui:
    showInfoBtn: '.show-info-btn'
    content: '.content'
  regions:
    content: '@ui.content'
  childViewEvents:
    'model:destroyed': 'onModelDestroyed'
  onRender: ->
    content = @model.get 'content'
    key = "OAI-PMH"
    if content?
      if key in _.keys content
        view = new PMCFrontMatter
          model: @model
        @showChildView 'content', view
  events:
    'click @ui.showInfoBtn': 'showInfoBtnClicked'
  onModelDestroyed: ->
    @getRegion('content').empty()
    
  showInfoBtnClicked: ->
    if not @getRegion('content').hasView()
      @model = AppChannel.request 'make-remote-model', Number @model.get('id')
      response = @model.fetch()
      thisView = @
      thisModel = @model
      response.done ->
        id = thisModel.get('id')
        content = thisModel.get('content')
        lpromise = AppChannel.request 'save-fm-content', id, content
        #console.log "lpromise", lpromise
        lpromise.then ->
          collection = AppChannel.request 'get-fm-collection'
          cresponse = collection.fetch()
          cresponse.done ->
            lmodel = collection.get id
            view = new PMCFrontMatter
              model: lmodel
            thisView.showChildView 'content', view
            thisView.ui.showInfoBtn.hide()
            
export default PMCEntry
