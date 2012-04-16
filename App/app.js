
/**
 * Module dependencies.
 */

var express           = require('express');
var fs                = require('fs');
var path              = require('path');
//var http              = require('http');

var app = module.exports = express.createServer();

/*var bCaptureServer  = require("buster-capture-server")
var server          = bCaptureServer.create()
server.attach(http.createServer().listen(1111));*/

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(express.static(__dirname + '/../src'), { maxAge: 0 });
  app.use(express.static(cases, { maxAge: 0 }));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));  
});

app.get('/', function(req, res){ res.render('index', { title: 'Webads', layout: false }); });

require('./lib/setups')(app)
require('./lib/forceDelay')(app);
require('./lib/plugins')(app);


app.listen(3000);
console.log("FINN webAds-test server listening on port %d in %s mode", app.address().port, app.settings.env);
