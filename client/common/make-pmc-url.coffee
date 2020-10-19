PMC_URL_PREFIX = "https://www.ncbi.nlm.nih.gov/pmc/articles/"

export default (id) ->
  return "#{PMC_URL_PREFIX}PMC#{id}/"
