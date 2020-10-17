import path from 'path'
import { View } from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'

class Renderer extends marked.Renderer
  link: (href, title, text) ->
    if href.startsWith '#'
      return super href, title, text
    dirname = path.dirname location.hash
    if dirname is '.'
      dirname = '#frontdoor/view'
    unless href.startsWith 'http'
      href = path.join dirname, href
    return super href, title, text

renderer = new Renderer

class MainView extends View
  template: tc.renderable (model) ->
    tc.article '.document-view.content', ->
      tc.div '.body', ->
        tc.raw marked model.content, renderer:renderer

export default MainView


