import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'

# start with 100%
current_font_size = 100


class MainView extends MnView
  template: tc.renderable (model) ->
    tc.div '.row.listview-list-entry.text-center', ->
      tc.strong model.name
    tc.div '.zoom-out.btn.btn-primary.fa.fa-minus'
    tc.div '.zoom-in.btn.btn-primary.fa.fa-plus'
    tc.div '.row.listview-list-entry', ->
      tc.div '.wikipage', style:"font-size: #{current_font_size}%;", ->
        tc.raw model.content

  ui:
    wikipage: '.wikipage'
    zoomIn: '.zoom-in'
    zoomOut: '.zoom-out'
  events:
    'click @ui.zoomIn': 'zoomInPage'
    'click @ui.zoomOut': 'zoomOutPage'

  zoomInPage: ->
    if current_font_size <= 500
      current_font_size += 10
    @ui.wikipage.css
      'font-size': "#{current_font_size}%"
  zoomOutPage: ->
    if current_font_size >= 30
      current_font_size -= 10
    @ui.wikipage.css
      'font-size': "#{current_font_size}%"
    
export default MainView

