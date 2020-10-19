import $ from 'jquery'
import { Radio, Router } from 'backbone'
import "bootstrap"
import "popper.js"
import 'backbone.routefilter'
import 'font-awesome/scss/font-awesome.scss'

import 'tbirds/applet-router'
import exportToFile from 'tbirds/util/export-to-file'
import LoginModal from './loginview'

import '../../sass/dev-dark.scss'

if __DEV__
  console.warn "__DEV__", __DEV__, "DEBUG", DEBUG
  Radio.DEBUG = true

  

MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'

$(document).ajaxError (event, xhr) ->
  if __DEV__
    console.warn "ajaxError event", event
    console.warn "ajaxError xhr" , xhr
  MessageChannel.request 'xhr-error', xhr
  

# set pagesize before requiring authmodels
if localStorage.getItem('page-size') is null
  localStorage.setItem 'page-size', 10
MainChannel.reply 'main:app:set-pagesize', (pagesize) ->
  localStorage.setItem 'page-size', pagesize
MainChannel.reply 'main:app:get-pagesize', ->
  localStorage.getItem 'page-size'

import '../crud'
import '../static-documents'

MainChannel.reply 'export-to-file', (options) ->
  exportToFile options
  

MainChannel.reply 'main:app:show-login', ->
  view = new LoginModal
  MainChannel.request 'main:app:show-modal', view
  
MainChannel.reply 'main:app:getCurrentPosition', (options) ->
  timeout = options?.timeout or 5000
  navigator.geolocation.getCurrentPosition options.success, options.error,
  timeout: timeout


MainChannel.reply 'main:app:setLocationUrl', (url) ->
  r = new Router
  r.navigate url, trigger:false
