import ElizaBot from 'elizabot'

eliza = new ElizaBot()


self.onmessage = (event) ->
  if event.data.content == 'getInitial'
    self.postMessage
      content: eliza.getInitial()
  else
    if __DEV__
      console.log "WORKER EVENT", event
    self.postMessage
      content: eliza.transform event.data.content
  return

