import Backbone from 'backbone'
import xml from 'xml2js-parseonly/src/xml2js'
import ms from 'ms'
import dateFormat from 'dateformat'
import handlebars from 'handlebars'
import marked from 'marked'

import capitalize from 'tbirds/util/capitalize'

MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'sofi'

# Most of these are not required fields!
EbayFields = [
  'Title'
  'PicURL'
  'Description'
  'Product:EAN'
  'Product:UPC'
  'Product:ISBN',
  '*Category'
  ]
  
ReqFieldNames = [
  'format'
  'location'
  'returnsacceptedoption'
  'duration'
  'quantity'
  'startprice'
  'dispatchtimemax'
  'conditionid'
  ]

AppChannel.reply 'csv-req-fieldnames', ->
  ReqFieldNames

OptFieldNames = [
  'postalcode'
  'paymentprofilename'
  'returnprofilename'
  'shippingprofilename'
  'scheduletime'
  ]
  
AppChannel.reply 'csv-opt-fieldnames', ->
  OptFieldNames
  

create_csv_header = ->
  header = {action: "*Action"}
  for field in ReqFieldNames
    header[field] = "*#{capitalize field}"
  for field in OptFieldNames
    header[field] = field
  for field in EbayFields
    header[field] = field
  return header

AppChannel.reply 'create-csv-header', ->
  create-csv-header()
  
CSV_HEADER = create_csv_header()
AppChannel.reply 'get-csv-header', ->
  CSV_HEADER
  

AppChannel.reply 'grouped-csv-fields', ->
  ReqFieldNames: ReqFieldNames
  OptFieldNames: OptFieldNames
  EbayFields: EbayFields
  
