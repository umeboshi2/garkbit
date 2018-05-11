import Backbone from 'backbone'

import lf from 'lovefield'

# Use yaml to build schema
# https://groups.google.com/forum/#!topic/lovefield-users/jxIlb7jtiak

MainChannel = Backbone.Radio.channel 'global'

schemaBuilder = lf.schema.create('msleg-database', 2)

schemaBuilder.createTable('XMLObject')
.addColumn('id', lf.Type.STRING)
.addColumn('url', lf.Type.STRING)
.addColumn('content', lf.Type.OBJECT)
.addPrimaryKey(['id'])


export default schemaBuilder

