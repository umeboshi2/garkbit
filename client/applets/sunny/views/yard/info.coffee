import Backbone from 'backbone'
import { View, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import navigate_to_url from 'tbirds/util/navigate-to-url'

infoTable = tc.renderable (model) ->
  tc.table '.table', ->
    tc.thead '.table-info', ->
      tc.tr ->
        tc.th scope:'col', "Option"
        tc.th scope:'col', "Value"
    tc.tr ->
      tc.td "Name:"
      tc.td "#{model.name}"
    tc.tr ->
      tc.td "Description"
      tc.td model.description
    tc.tr ->
      tc.td "Job Details"
      tc.td model.jobdetails


class InfoView extends View
  template: infoTable

export default InfoView
