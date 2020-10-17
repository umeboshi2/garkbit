import { Radio } from 'backbone'
import { View } from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'
import ElizaToolbar from './toolbar'

import TerminalView from './terminal'
#import Worker from 'worker-loader!../worker'
import Intro from "raw-loader!../intro.md"

#worker = new Worker()


MessageChannel = Radio.channel 'messages'

class MainView extends View
  template: tc.renderable ->
    tc.div '.row.listview-header.justify-content-center', 'ELIZA Terminal'
    tc.div '.row.intro'
    tc.div '.row.justify-content-center', ->
      tc.div '.terminal-container.col-md-10'
    tc.div '.row.toolbar'
  templateContext:
    appName: 'eliza'
  ui:
    toolbar: '.toolbar'
    terminal: '.terminal-container'
    intro: '.intro'
  regions:
    toolbar: '@ui.toolbar'
    terminal: '@ui.terminal'
    intro: '@ui.intro'
  onRender: ->
    view = new ElizaToolbar
    @showChildView 'toolbar', view
    iview = new View
      template: tc.renderable ->
        tc.raw marked Intro
    @showChildView 'intro', iview
  childViewEvents:
    'toolbar:entry:clicked': 'toolbarClicked'
  toolbarClicked: (child) ->
    action = child.model.id
    if action == 'create'
      @createTerminal()
    else if action == 'destroy'
      @destroyTerminal()
    else
      MessageChannel.request 'warning', "Bad action #{action}"
  createTerminal: ->
    tview = new TerminalView
    @showChildView 'terminal', tview
    view = @getChildView 'terminal'
    view.startTerminal()
  destroyTerminal: ->
    view = @getChildView 'terminal'
    if view
      view.terminal.dispose()
      view.destroy()
    
export default MainView
