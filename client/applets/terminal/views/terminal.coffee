import { View } from 'backbone.marionette'

import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'

import 'common/xterm.scss'
import Worker from 'worker-loader!../worker'

worker = new Worker()

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

class TerminalView extends View
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
