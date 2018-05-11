$ = require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
ms = require 'ms'

xml = require 'xml2js-parseonly/src/xml2js'

scroll_top_fast = require('tbirds/util/scroll-top-fast').default
{ MainController } = require 'tbirds/controllers'
{ BaseAppletLayout } = require 'tbirds/views/layout'
SlideDownRegion = require('tbirds/regions/slidedown').default


#Collections = require './collections'
{ get_xml } = require './getxml'

cfg_env = 'production'
if __DEV__
  cfg_env = 'development'
config = require('./config')[cfg_env]

AppChannel = Backbone.Radio.channel 'msleg'

cl = require './collections'
window.tm = new cl.TestRssModel

parse_hr_membs = require './housemembers'

class HeaderView extends Backbone.Marionette.View
  template: tc.renderable (model) ->
    tc.div '.listview-header', model.title
    
make_header_view = (title) ->
  model = new Backbone.Model
    title: title
  view = new HeaderView
    model: model
  view
  

class ToolbarAppletLayout extends BaseAppletLayout
  #el: '#applet-content'
  template: tc.renderable () ->
    tc.div '#header'
    tc.div  '#main-toolbar'
    tc.div '#main-content', ->
      tc.h1 ->
        tc.text 'Loading ...'
        tc.i '.fa.fa-spinner.fa-spin'
  regions: ->
    region = new SlideDownRegion
      el: '#main-content'
    region.slide_speed = ms '.01s'
    content: region
    toolbar: '#main-toolbar'
    header: '#header'

class Controller extends MainController
  layoutClass: ToolbarAppletLayout
  house_members: undefined
  

  set_header: (title) ->
    view = make_header_view title
    @layout.showChildView 'header', view

  start: ->
    @setup_layout_if_needed()
    if not @house_members?
      # grab xml if collection undefined
      # DEBUG - go straight to description
      if __DEV__ and false
        get_xml config.hr_membs @view_something, "id"
      else
        get_xml config.hr_membs, @list_members
    else
      # data exists, go ahead and make list
      @list_members()
      
  list_measures: (json) =>
    @setup_layout_if_needed()
    @set_header 'House Members'
    if not @house_members?
      members = parse_hr_membs json
      @house_members = new Backbone.Collection members
      window.hrmember = @house_members
    else
      console.log "members loaded."
    scroll_top_fast()
    
  list_members: (json) =>
    @setup_layout_if_needed()
    @set_header 'House Members'
    if not @house_members?
      members = parse_hr_membs json
      @house_members = new Backbone.Collection members
      window.hrmember = @house_members
    else
      console.log "members loaded."
    View = require './views/housemembers'
    view = new View
      collection: @house_members
    console.log "VIEW", view
    @layout.showChildView 'content', view
    scroll_top_fast()
    
  view_something: (m_id) =>
    if __DEV__
      console.log "m_id", m_id
    @setup_layout_if_needed()
    @set_header 'Some View'
    #@layout.showChildView 'content', view
    scroll_top_fast()
    
module.exports = Controller

