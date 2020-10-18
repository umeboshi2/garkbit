import { capitalize } from 'lodash'
import { View } from 'backbone.marionette'
import tc from 'teacup'
import { DateTime } from 'luxon'

###
import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import '@fullcalendar/list/main.css'
###

detailListComponent = tc.renderable (model, field) ->
  tc.dl '.row', ->
    if model[field]
      dt = new DateTime.fromISO model[field], zone: 'UTC'
      dt = dt.toLocal()
    tc.dt '.col-sm-3', capitalize field
    tc.dd '.col-sm-9', dt
  

class MainView extends View
  template: tc.renderable (model) ->
    console.log "model", model
    tc.div '.listview-header', "Work Session"
    for field in ['start', 'end']
      detailListComponent model, field
    tc.a href:"#company/worker", 'Calendar'
      
export default MainView
