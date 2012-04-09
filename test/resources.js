var fs = require('fs');


var APP_JSON    = {'Content-Type' : 'application/json; charset=utf-8'};
var TEXT_PLAIN  = {'Content-Type' : 'text/plain; charset=utf-8'};
var HTML        = {'Content-Type' : 'text/html; charset=utf-8'};

/*
  Must provide testcases/files
  Must provide iframe
  Must provide long/slow connections

*/


var resources = [{
  path    : '/finn/webads',
  content : fs.readFileSync('src/iframe.html', 'utf8'),
  headers : HTML
},
{ path: "/Cases/", backend: "http://localhost:3000/" }

];

module.exports = resources;
