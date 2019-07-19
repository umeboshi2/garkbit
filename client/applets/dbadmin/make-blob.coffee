import b64toBlob from 'b64-to-blob'
import sjcl from 'sjcl'

export default (model) ->
  cksum = model.get 'sha256sum'
  content = model.get 'content'
  env = 'production'
  if __DEV__
    env = 'development'
  options =
    filename: "dbdump-#{env}-#{cksum.slice(0, 5)}.json.xz"
    type: 'application/octet-stream'
    data: content
  blob = b64toBlob options.data, options.type
  ## FIXME: the checksum is valid but
  # need to be able to check in browser
  byteChars = atob content
  console.log "BLOB", blob
  console.log "size", blob.size, byteChars.length, content.length
  hasher = sjcl.hash.sha256.hash
  digester = sjcl.codec.hex.fromBits
  result = digester hasher byteChars
  console.log 'Result', result
  console.log "cksum", cksum
  options.blob = blob
  return options
