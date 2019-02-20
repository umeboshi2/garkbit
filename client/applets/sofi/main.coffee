import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import AppRouter from 'marionette.approuter'
import TkApplet from 'tbirds/tkapplet'

import './dbchannel'
import './ebutils'

import toolbarEntries from './applet-entries'

import Controller from './controller'

MainChannel = Backbone.Radio.channel 'global'
ResourceChannel = Backbone.Radio.channel 'resources'

class Router extends AppRouter
  appRoutes:
    'sofi': 'main_view'

    'sofi/comics': 'dbcomics_main'
    'sofi/comics/local': 'view_local_comics'

    'sofi/comics/photos/:comic_id': 'manageComicPhotos'

    'sofi/comics/workspace': 'showWorkspaceMainView'
    'sofi/comics/workspace/view/:name': 'showWorkspaceView'
    'sofi/comics/workspace/create/:name': 'createWorkspaceView'
    'sofi/comics/workspace/add/:name': 'createWorkspaceView'

    'sofi/xml/upload': 'upload_xml'
    'sofi/csv/create': 'create_csv'
    'sofi/csv/preview': 'preview_csv'

    'sofi/clzpage' : 'view_cached_comics'
    'sofi/comics/set-photo-names': 'setPhotoNames'
    

class Applet extends TkApplet
  appletName: 'sofi'
  channelName: 'sofi'
  Controller: Controller
  Router: Router
  extraRouters:
    cfg: require './routers/cfg'
    dsc: require './routers/dsc'
  appletEntries: toolbarEntries
export default Applet
