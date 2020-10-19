import ElizaBot from 'elizabot'
#import repl from 'coffeescript/lib/coffeescript/repl'
#repl = require 'coffeescript/lib/coffeescript/repl'
#console.log "repl", repl
eliza = new ElizaBot()

self.onmessage = (event) ->
  if event.data.content == 'getInitial'
    self.postMessage
      content: location.href
  else
    if __DEV__
      console.log "WORKER EVENT", event
    self.postMessage
      #content: eliza.transform event.data.content
      content: event.data.content
  return

