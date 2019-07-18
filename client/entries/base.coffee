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

require '../../sass/cornsilk-purple.scss'
import './themes'

import "bootstrap"
import 'font-awesome/scss/font-awesome.scss'


if __DEV__
  console.warn "__DEV__", __DEV__, "DEBUG", DEBUG
  Backbone.Radio.DEBUG = true

  
import 'tbirds/applet-router'
import exportToFile from 'tbirds/util/export-to-file'
import LoginModal from './loginview'

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


MainChannel.reply 'main:app:set-theme', (theme) ->
  localStorage.setItem 'main-theme', theme

MainChannel.reply 'main:app:get-theme', ->
  localStorage.getItem 'main-theme'



MainChannel.reply 'export-to-file', (options) ->
  exportToFile options
  

MainChannel.reply 'main:app:show-login', ->
  view = new LoginModal
  MainChannel.request 'main:app:show-modal', view
  
MainChannel.reply 'main:app:getCurrentPosition', (options) ->
  timeout = options?.timeout or 5000
  navigator.geolocation.getCurrentPosition options.success, options.error,
  timeout: timeout
