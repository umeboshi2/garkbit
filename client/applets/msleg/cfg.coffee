billstatus = 'http://billstatus.ls.state.ms.us'
cors = "//cors-anywhere.herokuapp.com"
module.exports =
  production:
    allmsrs: "#{cors}/#{billstatus}/2017/pdf/all_measures/allmsrs.xml"
    hr_membs: "#{cors}/#{billstatus}/members/hr_membs.xml"
  developmentNew:
    allmsrs: "#{cors}/#{billstatus}/2017/pdf/all_measures/allmsrs.xml"
    hr_membs: "#{cors}/#{billstatus}/members/hr_membs.xml"
  development:
    allmsrs: '/assets/allmsrs.xml'
    hr_membs: '/assets/hr_membs.xml'
