$ = require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
ms = require 'ms'

{ MainController } = require 'tbirds/controllers'
# FIXME
ToolbarView = require('tbirds/views/button-toolbar').default
ShowInitialEmptyContent = require 'tbirds/behaviors/show-initial-empty'
SlideDownRegion = require 'tbirds/regions/slidedown'

navigate_to_url = require 'tbirds/util/navigate-to-url'
scroll_top_fast = require 'tbirds/util/scroll-top-fast'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
ResourceChannel = Backbone.Radio.channel 'resources'
AppChannel = Backbone.Radio.channel 'sofi'

toolbarEntries = [
  {
    id: 'main'
    label: 'Main View'
    url: '#sofi'
    icon: '.fa.fa-eye'
  }
  {
    id: 'dbcomics'
    label: 'DbComics'
    url: '#sofi/comics'
    icon: '.fa.fa-list'
  }
  {
    id: 'workspace'
    label: 'Workspace'
    url: '#sofi/comics/workspace'
    icon: '.fa.fa-dashboard'
  }
  {
    id: 'cfglist'
    label: 'Configs'
    url: '#sofi/cfg/list'
    icon: '.fa.fa-list'
  }
  {
    id: 'dsclist'
    label: 'Descriptions'
    url: '#sofi/dsc/list'
    icon: '.fa.fa-list'
  }
  {
    id: 'uploadxml'
    label: 'Upload CLZ/XML'
    url: '#sofi/xml/upload'
    icon: '.fa.fa-upload'
  }
  {
    id: 'mkcsv'
    label: 'Create CSV'
    url: '#sofi/csv/create'
    icon: '.fa.fa-cubes'
  }
  {
    id: 'cached'
    label: 'Cached Images'
    url: '#sofi/clzpage'
    icon: '.fa.fa-image'
  }
  {
    id: 'setPhotoNames'
    label: 'Set Photo Names'
    url: '#sofi/comics/set-photo-names'
    icon: '.fa.fa-photo'
  }
  ]

appletEntries = [
  {
    label: 'Sofi Menu'
    menu: toolbarEntries
  }
]

module.exports = appletEntries

