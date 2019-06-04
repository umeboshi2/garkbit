import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import AppRouter from 'marionette.approuter'
import TkApplet from 'tbirds/tkapplet'
import capitalize from 'tbirds/util/capitalize'

import './dbchannel'
import Controller from './controller'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'sunny'


# Have a set of default routines
# make from cut, weed, edge, trim
# 1. cut, weed edge
# 2. cut, weed
# 3. cut only
# 4. weed only
# 5. cut weed edge trim
#
# YardRoutine
# - yard_id
# - description
# - frequency
# - leeway (days before or after to complete job for routine, default 3)
#   (a leeway of zero can be used for Friday jobs)
# - rate/price
# - routine_date (date upon when the routine jobs are setup)
# - active (boolean)
#
#
# YardRoutine is recurring job for a yard
#
#
# YardRoutineJob
# - yard_routine_id
# - due_date (the date when job is due to be done)
# - start
# - end
# - notes (misc notes)
# - extra (description of extra work)
# - extra_rate (cost of extra work)
# - status (complete/incomplete/cancelled)
#
# YardRoutineJob is the performance of a routine job.  When job is
# completed or cancelled, yard_routine is updated with due date to
# generate next routine job.
#
# SingleYardJob
# - yard_id
# - due_date
# - start
# - end
# - description
# - notes
# - rate
# - status (complete/incomplete/cancelled)
#
# SingleYardJob is a miscellaneous job for a predefined yard.
#
# SingleClientJob
# - client_id
# - (more yardjob columns....)
#
# SingleClientJob is a miscellaneous job for a client without specified yard.
# This is useful for odd jobs.  Create a client called "CASH" and stick jobs
# here.
#
#
#
# create pending jobs ->
#   get unfinished routine jobs
#   create routine jobs for routines not in unfinished list (unf) ->
#     for routine in all routines
#       if routine not in unfinished
#         create YardRoutineJob with duedate = routine.date + routine.frequency
#


appletMenu = [
  {
    label: 'List'
    url: '#sunny/clients'
    icon: '.fa.fa-list'
  },{
    label: 'New Client'
    url: '#sunny/clients/new'
    icon: '.fa.fa-list'
  },{
    label: 'Calendar'
    url: '#sunny/calendar'
    icon: '.fa.fa-calendar'
  }
  ]


class Router extends AppRouter
  appRoutes:
    'sunny': 'list_clients'
    'sunny/clients': 'list_clients'
    'sunny/clients/new': 'new_client'
    'sunny/clients/edit/:id': 'edit_client'
    'sunny/clients/view/:id': 'view_client'

    'sunny/yards/add/:client_id': 'add_yard'
    'sunny/yards/view/:id': 'view_yard'

    'sunny/yards/routines/:yard_id': 'yard_routines'
    

class Applet extends TkApplet
  Controller: Controller
  Router: Router
  appletEntries: [
    {
      label: "#{capitalize 'sunny'} Menu"
      menu: appletMenu
    }
  ]

export default Applet