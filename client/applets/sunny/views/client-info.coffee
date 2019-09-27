import Backbone from 'backbone'
import { View, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import navigate_to_url from 'tbirds/util/navigate-to-url'

clientInfoTable = tc.renderable (model) ->
  tc.table '.table', ->
    tc.thead '.table-info', ->
      tc.tr ->
        tc.th scope:'col', "Option"
        tc.th scope:'col', "Value"
    tc.tr ->
      tc.td "Name:"
      tc.td "#{model.name}"
    tc.tr ->
      tc.td "Full Name:"
      tc.td "#{model.fullname}"
    tc.tr ->
      tc.td "Email:"
      tc.td "#{model.email}"
    tc.tr ->
      tc.td "Description"
      tc.td model.description
  

class ClientInfoView extends View
  template: clientInfoTable

export default ClientInfoView
