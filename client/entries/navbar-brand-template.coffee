import tc from 'teacup'
import emoji from 'node-emoji'


navbarBrandTemplate = tc.renderable (model) ->
  padding = '.pt-2.pl-2.pr-2'
  padding = "#{padding}.mb-0.rounded.border.border-secondary"
  src = "/assets/Cartoon-Concierge.svg"
  tc.a ".navbar-brand.bg-body-d5#{padding}", href:model.url, ->
    tc.img '.mb-2', src:src, style:'width:1.5rem;height:1.5rem'
    tm = emoji.get 'tm'
    tc.span '.mt-2.text-primary', "#{model.label}#{tm}"
  tc.span '.toggle-container'

export default navbarBrandTemplate

