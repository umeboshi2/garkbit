#config = require './base-config'
import config from './base-config'

dev_menu =
  id: 'dev-menu'
  label: 'Development Applets'
  menu: [
    {
      label: 'Internet Archive'
      url: '#netark'
    }
    {
      label: 'MS leg'
      url: '#msleg'
    }
    {
      label: 'Ebcsv'
      url: '#ebcsv'
    }
    {
      label: 'Themes'
      url: '#frontdoor/themes'
      needUser: true
    }
  ]

misc_menu =
  id: 'misc-menu'
  label: 'Misc Applets'
  menu: [
    {
      label: 'Movie DB API Demo'
      url: '#moviedb'
    }
    {
      label: 'Old Time Radio'
      url: '#netark/otrr/list'
    }
    {
      label: "TVMaze API/IndexedDb Demo"
      url: '#tvmaze'
    }
    {
      label: 'Bumblr'
      url: '#bumblr'
    }
    {
      label: 'Todos'
      url: '#todos'
      needUser: true
    }
    {
      label: 'TestUpload'
      url: '#frontdoor/upload'
      needUser: true
    }
    {
      label: 'hubby'
      url: '#hubby'
      needUser: true
    }
    {
      label: 'sofi'
      url: '#sofi'
      needUser: true
    }
    {
      label: 'wikipages'
      url: '#wikipages'
      needUser: true
    }
  ]

config.navbarEntries = [
  misc_menu
  ]

if __DEV__
  config.navbarEntries.push dev_menu
  

#module.exports = config
export default config
