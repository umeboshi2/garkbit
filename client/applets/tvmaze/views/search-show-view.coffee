import { Radio, Model } from 'backbone'
import tc from 'teacup'

import BootstrapFormView from 'tbirds/views/bsformview'
import  { form_group_input_div } from 'tbirds/templates/forms'

MessageChannel = Radio.channel 'messages'

searchForm = tc.renderable ->
  form_group_input_div
    input_id: 'input_show'
    label: 'TV Show'
    input_attributes:
      name: 'tv_show'
      placeholder: 'tiny toons'
      
  tc.input '.btn.btn-primary.btn-sm', type:'submit', value:'Search'
  tc.div '.spinner.fa.fa-spinner.fa-spin.text-primary'

class SearchFormView extends BootstrapFormView
  template: searchForm
  ui:
    tvShow: '[name="tv_show"]'
  createModel: ->
    return new Model
  updateModel: ->
    @tvshow = @ui.tvShow.val()
    @model.set 'tvshow', @tvshow
  saveModel: ->
    response = @collection.fetch
      data:
        q: @tvshow
    response.done =>
      @trigger 'save:form:success', @model
    response.fail =>
      MessageChannel.request 'warning', "#{@tvshow} not found."
      @trigger 'save:form:failure', @model
          
    
export default SearchFormView

