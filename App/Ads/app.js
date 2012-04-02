
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(express.static(__dirname + '/../../src'));
  app.use(express.static(__dirname + '/../Tests'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);


var fs = require('fs');
app.get('/finn/webads', function(req, res){
  fs.readFile(__dirname + '/public/iframe.html', 'utf8', function(err, data){
    if (err) throw err;
    res.send(data);
  });
});

app.listen(3000);
console.log("FINN webAds-test server listening on port %d in %s mode", app.address().port, app.settings.env);
