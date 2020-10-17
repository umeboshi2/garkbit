import * as Templates from 'tbirds/templates/basecrud'
import * as Views from 'tbirds/crud/basecrudviews'

ItemTemplate = Templates.base_item_template 'document', 'dbdocs'
ListTemplate = Templates.base_list_template 'document'

class ItemView extends Views.BaseItemView
  route_name: 'dbdocs'
  template: ItemTemplate
  item_type: 'document'
  
class ListView extends Views.BaseListView
  route_name: 'dbdocs'
  childView: ItemView
  template: ListTemplate
  childViewContainer: '#document-container'
  item_type: 'document'

export default ListView

