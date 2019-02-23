#config = require './base-config'
import config from './base-config'

dev_menu =
  id: 'dev-menu'
  label: 'Development Applets'
  menu: [
    {
      label: 'ELIZA Terminal'
      url: '#eliza'
      icon: '.fa.fa-terminal.text-light.bg-dark'
    },{
      label: 'Court Listener'
      url: '#freelaw'
    },{
      label: 'Internet Archive'
      url: '#netark'
    },{
      label: 'Muppy'
      url: '#muppy'
    },{
      label: 'MS leg'
      url: '#msleg'
    },{
      label: 'Ebcsv'
      url: '#ebcsv'
    },{
      label: 'Admin Panel'
      url: '#adminpanel'
      needUser: true
    }
  ]

demo_menu =
  id: 'demo-menu'
  label: 'Demos'
  menu: [
    {
      label: 'ELIZA Terminal'
      url: '#eliza'
      icon: '.fa.fa-terminal.text-light.bg-dark'
    },{
      label: 'Movie DB API Demo'
      url: '#moviedb'
    },{
      label: "TVMaze API/IndexedDb Demo"
      url: '#tvmaze'
    }
  ]

misc_menu =
  id: 'misc-menu'
  label: 'Misc Applets'
  menu: [
    {
      label: 'Old Time Radio'
      url: '#netark/otrr/list'
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
  demo_menu
  misc_menu
  ]

if __DEV__
  config.navbarEntries.push dev_menu
  

#module.exports = config
export default config
