import _ from 'lodash'
import { Radio } from 'backbone'

import DbCollection from 'tbirds/dbcollection'

MainChannel = Radio.channel 'global'

AuthModel = MainChannel.request 'main:app:AuthModel'
AuthCollection = MainChannel.request 'main:app:AuthCollection'

apiRoot = "/api/dev/useradmin"
crudRoot = "#{apiRoot}/crud"

defaultOptions =
  channelName: 'useradmin'

dbcfg = {}

usersUrl = "#{crudRoot}/users"
class User extends AuthModel
  urlRoot: usersUrl
  validation:
    username:
      required: true
    fullname:
      required: true
    email:
      required: true
  itemLabel: ->
    fullname = @get 'fullname'
    username = @get 'username'
    return "#{fullname} (#{username})"
  itemViewUrl: ->
    id = @get 'id'
    return "#useradmin/user/view/#{id}"
  itemEditUrl: ->
    id = @get 'id'
    return "#useradmin/user/edit/#{id}"
    
class UserCollection extends AuthCollection
  url: usersUrl
  model: User
dbcfg.user = new DbCollection _.extend defaultOptions,
  modelName: 'user'
  modelClass: User
  collectionClass: UserCollection


groupsUrl = "#{crudRoot}/groups"
class Group extends AuthModel
  urlRoot: groupsUrl
  itemLabel: ->
    return @get 'name'
  itemViewUrl: ->
    id = @get 'id'
    return "#useradmin/group/view/#{id}"
  itemEditUrl: ->
    id = @get 'id'
    return "#useradmin/group/edit/#{id}"
class GroupCollection extends AuthCollection
  url: groupsUrl
  model: Group
dbcfg.group = new DbCollection _.extend defaultOptions,
  modelName: 'group'
  modelClass: Group
  collectionClass: GroupCollection

userGroupUrl = "#{apiRoot}/usergroup"
class UserGroup extends AuthModel
  urlRoot: userGroupUrl
  idAttribute: 'group_id'
  url: ->
    userId = @get 'user_id'
    groupId = @get 'group_id'
    url = "#{userGroupUrl}/#{groupId}/#{userId}"
    return url
  itemLabel: ->
    userId = @get 'user_id'
    groupId = @get 'group_id'
    return "#{groupId}, #{userId}"
class UserGroupCollection extends AuthCollection
  url: userGroupUrl
  model: UserGroup
dbcfg.usergroup = new DbCollection _.extend defaultOptions,
  modelName: 'usergroup'
  modelClass: UserGroup
  collectionClass: UserGroupCollection


export default dbcfg


