var punycode = require("punycode")
var _ = require("lodash")

var ZERO_WIDTH_CHARS = [
  0x200b,
  0x200c,
  0x200d,
  0x200e,
  0x200f,
  0x202a,
  0x202b,
  0x202c,
  0x202d,
  0x202e,
  0x2060,
  0x2061,
  0x2062,
  0x2063,
  0x2064,
  0x2066,
  0x2067,
  0x2068,
  0x2069,
  0x206a,
  0x206b,
  0x206c,
  0x206d,
  0x206e,
  0x206f
]

var pad = (str, size) => {
  var ret = ""
  var origSize = str.length
  for(var i = 0; i < (size - origSize); i++) {
    ret = ret + punycode.ucs2.encode([_.sample(ZERO_WIDTH_CHARS)])
  }
  ret = ret + str
  return ret
}

module.exports = {pad: pad}
