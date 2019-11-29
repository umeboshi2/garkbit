import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'
import ToolbarView from 'tbirds/views/button-toolbar'
import ElizaToolbar from './toolbar'

import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'

import './xterm.scss'
import Worker from 'worker-loader!../worker'

worker = new Worker()

{ navigate_to_url } = require 'tbirds/util/navigate-to-url'

MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'eliza'

class MyTerminal extends Terminal
  prompt: ->
    @write '\r\n->'
    return

makeTerm = ->
  term = new MyTerminal()
  currentInput = ''
  term.onKey (options) ->
    ev = options.domEvent
    key = options.key
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
    @fitAddon = new FitAddon()
    @terminal.loadAddon @fitAddon
    #@terminal = myXterm
    @terminal.open @el
    @terminal.setOption 'fontSize', 14
    @terminal.setOption 'fontFamily', 'Mono'
    @terminal.resize(80, 15)
    #@terminal.resize(NaN, NaN)
    # @terminal.fit()
    @fitAddon.fit()
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
