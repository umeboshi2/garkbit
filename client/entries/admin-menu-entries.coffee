misc_menu =
  label: 'Misc Applets'
  menu: [
    {
      label: 'Bumblr'
      url: '#bumblr'
    }
    {
      label: 'Todos'
      url: '#todos'
      needUser: true
    }
  ]

UserAdmin =
  label: "User Admin"
  url: "#admin/useradmin"
  needUser: true
  
SiteDocs =
  label: "Site Docs"
  url: "#dbdocs"
  needUser: true
  
adminEntries = [
  SiteDocs
  UserAdmin
  misc_menu
  ]

export default adminEntries
