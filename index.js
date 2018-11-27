var showdown = require('showdown')
var loaderUtils = require('loader-utils')
module.exports = function(suorce) {
  var options = loaderUtils.getOptions(this)
  var htmlString = new showdown.Converter(options).makeHtml(suorce)
  var stringify = JSON.stringify(htmlString)
  return 'module.exports =' + stringify 
}