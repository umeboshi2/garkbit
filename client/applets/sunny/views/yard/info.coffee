import { View } from 'backbone.marionette'
import tc from 'teacup'

class InfoView extends View
  template: tc.renderable (model) ->
    tc.table '.table', ->
      tc.thead '.table-dark', ->
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

export default InfoView
