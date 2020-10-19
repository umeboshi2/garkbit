import lf from 'lovefield'

# Use yaml to build schema
# https://groups.google.com/forum/#!topic/lovefield-users/jxIlb7jtiak

schemaBuilder = lf.schema.create('main-database', 3)

schemaBuilder.createTable('ConfigObject')
.addColumn('id', lf.Type.STRING)
.addColumn('name', lf.Type.STRING)
.addColumn('content', lf.Type.OBJECT)
.addPrimaryKey(['id'])

schemaBuilder.createTable('SimpleObject')
.addColumn('id', lf.Type.STRING)
.addColumn('name', lf.Type.STRING)
.addColumn('content', lf.Type.OBJECT)
.addPrimaryKey(['id'])

schemaBuilder.createTable('PMCFrontMatter')
.addColumn('id', lf.Type.INTEGER)
.addColumn('content', lf.Type.OBJECT)
.addPrimaryKey(['id'])

schemaBuilder.createTable('PMCFullArticle')
.addColumn('id', lf.Type.INTEGER)
.addColumn('pmcid', lf.Type.INTEGER)
.addColumn('fulltext', lf.Type.STRING)
.addColumn('content', lf.Type.OBJECT)
.addPrimaryKey(['id'])
.addForeignKey('fk_pmc_id',
  local: 'pmcid'
  ref: 'PMCFrontMatter.id'
  action: lf.ConstraintAction.RESTRICT
  timing: lf.ConstraintTiming.IMMEDIATE
)

schemaBuilder.createTable('Topics')
.addColumn('id', lf.Type.STRING)
.addColumn('name', lf.Type.STRING)
.addPrimaryKey(['id'])

schemaBuilder.createTable('PMCTopics')
.addColumn('pmcid', lf.Type.INTEGER)
.addColumn('topic_id', lf.Type.STRING)
#.addPrimaryKey(['pmcid', 'topic_id'])
.addForeignKey('fk_pmc_id',
  local: 'pmcid'
  ref: 'PMCFrontMatter.id'
  action: lf.ConstraintAction.RESTRICT
  timing: lf.ConstraintTiming.IMMEDIATE
)
.addForeignKey('fk_topic_id',
  local: 'topic_id'
  ref: 'Topics.id'
  action: lf.ConstraintAction.RESTRICT
  timing: lf.ConstraintTiming.IMMEDIATE
)
  
schemaBuilder.createTable('Events')
.addColumn('id', lf.Type.STRING)
.addColumn('title', lf.Type.STRING)
.addColumn('link', lf.Type.STRING)
.addColumn('content', lf.Type.STRING)
.addPrimaryKey(['id'])





export default schemaBuilder

