import * as Templates from 'tbirds/templates/basecrud'
import { BaseItemView, BaseListView } from 'tbirds/crud/basecrudviews'


ClientItemTemplate = Templates.base_item_template 'client', 'sunny'
ClientListTemplate = Templates.base_list_template 'client'

class ClientItemView extends BaseItemView
  route_name: 'sunny'
  template: ClientItemTemplate
  item_type: 'client'

class ClientListView extends BaseListView
  route_name: 'sunny'
  childView: ClientItemView
  template: ClientListTemplate
  childViewContainer: '#client-container'
  item_type: 'client'
    
export default ClientListView

