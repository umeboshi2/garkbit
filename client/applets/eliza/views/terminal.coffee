import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'
#import { hterm, lib } from 'hterm-umdjs'
import ToolbarView from 'tbirds/views/button-toolbar'
import ElizaToolbar from './toolbar'

import { Terminal } from 'xterm'
import * as fit from 'xterm/lib/addons/fit/fit'
#import "xterm/dist/xterm.css"
import './xterm.scss'
Terminal.applyAddon fit

import Worker from 'worker-loader!../worker'

worker = new Worker()

{ navigate_to_url } = require 'tbirds/util/navigate-to-url'

MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'eliza'

class MyTerminal extends Terminal
  prompt: ->
    @.write '\r\n->'
    return

makeTerm = ->
  term = new MyTerminal()
  currentInput = ''
  term.on 'key', (key, ev) ->
    printable = !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey
    if ev.keyCode == 13
      term.write('\r\n')
      worker.postMessage
        content: currentInput
      currentInput = ''
    else if ev.keyCode == 8
      #console.log "backspace", term
      if currentInput.length
        term.write '\b \b'
        currentInput = currentInput.slice(0, -1)
    else if printable
      term.write key
      currentInput += key
  return term

class TerminalView extends Marionette.View
  template: false
  className: 'my-xterm'
  ui:
    terminal: '.my-xterm'
  startTerminal: ->
    #@terminal.dispose()
    @terminal = makeTerm()
    #@terminal = myXterm
    @terminal.open @el
    @terminal.setOption 'fontSize', 14
    @terminal.setOption 'fontFamily', 'Mono'
    @terminal.resize(80, 15)
    #@terminal.resize(NaN, NaN)
    @terminal.fit()
    console.log "@terminal", @terminal
    worker.onmessage = (event) =>
      @terminal.write event.data.content
      @terminal.prompt()
    worker.postMessage
      content: 'getInitial'
    
  onBeforeDestroy: ->
    if @terminal
      @terminal.dispose()
      console.log "Terminal disposed."

export default TerminalView
