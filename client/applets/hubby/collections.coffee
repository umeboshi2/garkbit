Backbone = require 'backbone'
qs = require 'qs'

AppChannel = Backbone.Radio.channel 'hubby'

#apiroot = 'https://infidel-frobozz.rhcloud.com/api/dev/lgr'
apiroot = "/rest/v0/main"

class BaseModel extends Backbone.Model
  
class BaseCollection extends Backbone.Collection
  parse: (response) ->
    super response.data
  
meetingRoot = "#{apiroot}/meeting"
class SimpleMeetingModel extends Backbone.Model
  urlRoot: meetingRoot

class MainMeetingModel extends Backbone.Model
  urlRoot: meetingRoot
  parse: (resp) ->
    return resp.data
    
class MeetingCollection extends BaseCollection
  model: SimpleMeetingModel
  url: meetingRoot
    

itemRoot = "#{apiroot}/item"
class SimpleItemModel extends Backbone.Model
  urlRoot: itemRoot
    
  

class ItemCollection extends BaseCollection
  model: SimpleItemModel
  url: () ->
    "#{apiroot}/item/search?#{qs.stringify @searchParams}"


personRoot = "#{apiroot}/person"
class PersonModel extends Backbone.Model
  urlRoot: personRoot

class PersonCollection extends BaseCollection
  model: PersonModel
  url: personRoot

main_person_list = new PersonCollection
AppChannel.reply 'personlist', ->
  main_person_list
  
  
main_meeting_list = new MeetingCollection
AppChannel.reply 'meetinglist', ->
  main_meeting_list

module.exports =
  apiroot: apiroot
  MeetingCollection: MeetingCollection
  MainMeetingModel: MainMeetingModel
  ItemCollection: ItemCollection
  
