import $ from 'jquery'
import { Radio, history } from 'backbone'
import tc from 'teacup'

import BootstrapFormView from 'tbirds/views/bsformview'

{ form_group_input_div } = require 'tbirds/templates/forms'


MessageChannel = Radio.channel 'messages'
AppChannel = Radio.channel 'tvmaze'

searchForm = tc.renderable ->
  form_group_input_div
    input_id: 'input_show'
    label: 'TV Show'
    input_attributes:
      name: 'tv_show'
      placeholder: 'tiny toons'
  tc.input '.btn.btn-primary.btn-sm', type:'submit', value:'Search'
  tc.div '.spinner.fa.fa-spinner.fa-spin'

class SearchFormView extends BootstrapFormView
  template: searchForm
  ui:
    tvShow: '[name="tv_show"]'
  createModel: ->
    MClass = AppChannel.request 'get-local-tvshow-model'
    return new MClass
  updateModel: ->
    @tvshow = @ui.tvShow.val()
    
  saveModel: ->
    rmodel = AppChannel.request 'single-show-search', @tvshow
    response = rmodel.fetch()
    response.done ->
      p = AppChannel.request 'save-local-show', rmodel.toJSON()
      p.then ->
        history.navigate "#tvmaze/shows/view/#{rmodel.id}", trigger:true
    response.fail =>
      MessageChannel.request 'warning', "#{@tvshow} not found."
      @trigger 'save:form:failure', @model
          
export default SearchFormView

