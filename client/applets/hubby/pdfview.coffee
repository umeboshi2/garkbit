$ = require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'

# try webpack auto config
pdfjs = require 'pdfjs-dist/webpack'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'hubby'

class PDFCanvasView extends Marionette.View
  tagName: 'canvas'
  className: 'canvas'
  template: ->
  onRender: ->
    scale = 1.5
    
    page = @getOption 'page'
    canvas = @el
    viewport = page.getViewport(scale)
    canvas.height = viewport.height
    canvas.width = viewport.width
    context = canvas.getContext('2d')
    page.render
      canvasContext: context
      viewport: viewport

class ToolbarView extends Marionette.View
  tagName: 'ul'
  className: 'pagination'
  templateContext: ->
    pdf: @getOption 'pdf'
    barLength: 10
    barStopAt: 4
  template: tc.renderable (model) ->
    numPages = model.pdf.numPages
    firstPage = 1
    lastPage = numPages
    if lastPage > model.barLength
      ellipsis = true
      stopAt = model.barStopAt
      resumeAt = lastPage - model.barStopAt
    tc.li '.page-item', ->
      tc.a '.prev.page-link.bg-body-d5', ->
        tc.i '.fa.fa-arrow-left'
    ellipsisDrawn = false
    for p in [firstPage..lastPage]
      if ellipsis
        if p >= stopAt and p <= resumeAt
          if not ellipsisDrawn
            ellipsisDrawn = true
            tc.li '.page-item', ->
              tc.a '.ellipsis-page.page-link.bg-body-d5.text-dark',
              '...'
          continue
      tc.li '.page-item', ->
        tc.a '.numbered-page.page-link.bg-body-d5.text-dark',
        data: pagenumber: p, p
    tc.li ->
      tc.a '.next.page-link.bg-body-d5', ->
        tc.i '.fa.fa-arrow-right'
  ui:
    numberedPage: '.numbered-page'
    prevButton: '.prev'
    nextButton: '.next'
  events:
    'click @ui.numberedPage': 'turnPage'
    'click @ui.prevButton': 'getPreviousPage'
    'click @ui.nextButton': 'getNextPage'
  onDomRefresh: ->
    @updateNavButtons()
    
  getNextPage: (event)->
    return @getAnotherPage event, 'next'
  getPreviousPage: (event) ->
    return @getAnotherPage event, 'prev'
    
  updateNavButtons: ->
    page = @getOption 'page'
    pdf = @getOption 'pdf'
    pIndex = page.pageIndex
    currentPage = page.pageIndex + 1
    firstPage = 1
    lastPage = pdf.numPages
    prevItem = @ui.prevButton.parent()
    if currentPage == firstPage
      unless prevItem.hasClass 'disabled'
        prevItem.addClass 'disabled'
    else
      if prevItem.hasClass 'disabled'
        prevItem.removeClass 'disabled'
    nextItem = @ui.nextButton.parent()
    if currentPage == lastPage
      unless nextItem.hasClass 'disabled'
        nextItem.addClass 'disabled'
    else
      if nextItem.addClass 'disabled'
        nextItem.removeClass 'disabled'
    @ui.numberedPage.parent().removeClass 'active'
    @ui.numberedPage.removeClass 'text-white'
    @ui.numberedPage.addClass 'text-dark'
    selector = "[data-pagenumber=\"#{currentPage}\"]"
    cp = $(selector)
    cpp = cp.parent()
    cpp.addClass 'active'
    cp.removeClass 'text-dark'
    cp.addClass 'text-white'

  getAnotherPage: (event, direction) ->
    event.preventDefault()
    currentPage = @page
    @trigger 'another:page', direction
  turnPage: (event) ->
    event.preventDefault()
    el = $(event.target)
    pageNum = el.attr 'data-pagenumber'
    @trigger 'turn:page', pageNum
    
        
  
class PDFMainView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.toolbar'
    tc.div '.content'
    tc.div '.status'
  ui:
    toolbar: '.toolbar'
    content: '.content'
    status: '.status'
  regions:
    toolbar: '@ui.toolbar'
    content: '@ui.content'
    status: '@ui.status'
  showPage: (page) =>
    @page = page
    @options.page = page
    view = new PDFCanvasView
      pdf: @pdf
      page: page
    @showChildView 'content', view
    tb = new ToolbarView
      pdf: @pdf
      page: page
    @showChildView 'toolbar', tb
    
  onRender: ->
    #view = new PDFCanvasView
    #  model: @model
    #@showChildView 'content', view
    status = new Marionette.View
      template: tc.renderable ->
        tc.text 'status'
    @showChildView 'status', status
    url = @model.get 'url'
    pdfjs.getDocument(url).then (pdf) =>
      @pdf = pdf
      if __DEV__
        window.pdf = pdf
      pdf.getPage(1).then (page) =>
        @showPage page
  onChildviewTurnPage: (number) ->
    number = parseInt number
    console.log "onChildviewTurnPage", number
    pdf = @getOption 'pdf'
    console.log "number is", number
    page = @getOption 'page'
    index = page.pageIndex + 1
    number = number || 0
    console.log "number", number
    if number > index
      console.log "another page", index
    if number != index
      index = number
    #pdf.getPage(number).then (page) =>
    #  console.log "PAFE IS", page
    #  @showPage page
    pdf.getPage(index).then (page) =>
      @showPage page
  onChildviewAnotherPage: (direction) ->
    pdf = @getOption 'pdf'
    page = @getOption 'page'
    index = page.pageIndex + 1
    if direction == 'next' and index < pdf.numPages
      index += 1
    else if direction == 'prev'
      index -= 1
    pdf.getPage(index).then (page) =>
      @showPage page

    
#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



   
module.exports = PDFMainView
  
