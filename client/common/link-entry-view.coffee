import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'
import moment from 'moment'

class LinkEntryView extends MnView
  tagName: 'p'
  template: tc.renderable (event) ->
    tc.text moment.utc(event.start).format("MMMM D, YYYY")
    tc.text ", "
    if event?.pretext
      tc.small ->
        tc.text event.pretext
        tc.text " "
    if event?.journal
      tc.text event.journal
      tc.text ", "
    if event?.authors
      tc.text event.authors
      tc.text ", "
    tc.a href:event.link, event.title
    if event?.extra?.length
      for item in event.extra
        tc.text ", "
        tc.a href: item.link, item.name
      

export default LinkEntryView

