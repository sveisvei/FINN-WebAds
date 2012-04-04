var fs = require('fs');


var APP_JSON    = {'Content-Type' : 'application/json; charset=utf-8'};
var TEXT_PLAIN  = {'Content-Type' : 'text/plain; charset=utf-8'};
var HTML        = {'Content-Type' : 'text/html; charset=utf-8'};

var resources = [{
  path    : '/finn/webads',
  content : fs.readFileSync('src/iframe.html', 'utf8'),
  headers : HTML
}];

module.exports = resources;
