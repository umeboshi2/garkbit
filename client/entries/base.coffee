import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'
#Backbone.Relational = require 'backbone-relational'

require 'backbone.routefilter'
import { View } from 'backbone.marionette'
import lf from 'lovefield'

# setup backbone relational and jsonapi
#brjs = require 'backbone-relational-sync-jsonapi'
#brjs.default Backbone, _

#brj = require 'backbone-relational-jsonapi'
#brj.default Backbone, _


import "bootstrap"
import 'font-awesome/scss/font-awesome.scss'
# FIXME need better way to resolve tbirds sass
if not __useCssModules__
  require '../../node_modules/tbirds/sass/cornsilk-purple.scss'
else
  require '../../node_modules/tbirds/sass/initial.scss'
  
if __DEV__
  console.warn "__DEV__", __DEV__, "DEBUG", DEBUG
  Backbone.Radio.DEBUG = true

  
import 'tbirds/applet-router'
import IsEscapeModal from 'tbirds/behaviors/is-escape-modal'
import exportToFile from 'tbirds/util/export-to-file'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'

# set pagesize before requiring authmodels
if localStorage.getItem('page-size') is null
  localStorage.setItem 'page-size', 10

MainChannel.reply 'main:app:set-pagesize', (pagesize) ->
  localStorage.setItem 'page-size', pagesize

MainChannel.reply 'main:app:get-pagesize', ->
  localStorage.getItem 'page-size'

if __DEV__ and false
  require '../inspector'
#require '../authmodels'
require '../crud'
require '../static-documents'
#require '../site-schema'


MainChannel.reply 'main:app:switch-theme', (theme) ->
  href = "/assets/stylesheets/bootstrap-#{theme}.css"
  ss = $ 'head link[href^="/assets/stylesheets/bootstrap-"]'
  ss.attr 'href', href

MainChannel.reply 'main:app:set-theme', (theme) ->
  localStorage.setItem 'main-theme', theme

MainChannel.reply 'main:app:get-theme', ->
  localStorage.getItem 'main-theme'



MainChannel.reply 'export-to-file', (options) ->
  exportToFile options
  

class BaseModalView extends View
  behaviors: [IsEscapeModal]
  ui:
    close_btn: '#close-modal div'
    
MainChannel.reply 'main:app:BaseModalView', ->
  BaseModalView
  
show_modal = (view, backdrop=false) ->
  app = MainChannel.request 'main:app:object'
  modal_region = app.getView().getRegion 'modal'
  modal_region.backdrop = backdrop
  modal_region.show view

MainChannel.reply 'show-modal', (view, backdrop=false) ->
  console.warn 'show-modal', backdrop
  show_modal view, false
  


#module.exports = {}



