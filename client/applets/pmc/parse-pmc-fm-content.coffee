import _ from 'underscore'
import { JSONPath } from 'jsonpath-plus'

parseRecord = (record) ->
  pmh = JSONPath('*..OAI-PMH', record)[0]
  if pmh?.error
    return {}
  journal = JSONPath('*..journal-title', pmh)[0]
  tnode = JSONPath('*..article-title', pmh)[0]
  title = if tnode?.__text then tnode.__text else tnode
  articleIds = JSONPath('*..article-id[?(@["_pub-id-type"]=="doi")]', pmh)[0]
  doi = articleIds?.__text
  return
    journal: journal
    title: title
    doi: doi

export default parseRecord
