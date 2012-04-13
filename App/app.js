
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
var collectTestCases  = require('./lib/collectTestCases.js');
var cases             = fs.realpathSync(__dirname + '/../test/Cases');

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
app.get('/companion', function(req, res){ res.render('companion', { title: 'Webads', layout: false }); });

require('./lib/forceDelay')(app);
require('./lib/plugins')(app);

// helios.server
app.get('/heliosAds', function(req, res){
  collectTestCases(cases + "/render", function(result){ res.send(result); });
});

app.listen(3000);
console.log("FINN webAds-test server listening on port %d in %s mode", app.address().port, app.settings.env);
