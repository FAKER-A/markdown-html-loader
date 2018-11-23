var showdown = require('showdown')
module.exports = function(suorce) {
  var htmlString = new showdown.Converter().makeHtml(suorce)
  var stringify = JSON.stringify(htmlString)
  return 'module.exports =' + stringify 
}