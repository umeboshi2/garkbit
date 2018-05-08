#config = require './base-config'
import config from './base-config'

misc_menu =
  id: 'misc-menu'
  label: 'Misc Applets'
  menu: [
    {
      label: 'Movie DB API Demo'
      url: '#moviedb'
    }
    {
      label: 'Themes'
      url: '#frontdoor/themes'
      needUser: true
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


#module.exports = config
export default config
