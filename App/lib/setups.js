var fs                      = require('fs');
var cases                   = fs.realpathSync(__dirname + '/../../test/Cases');
var _ = require('underscore');

function getConfigAds(key, callback){
  var path = cases + "/config/" + key;
  fs.readdir(path, function(err, files){
    if (err) throw err;
    var result = [];
    files.forEach(function(file, i){
      if (file.match(/^\./)){
        return;
      }
      var stat = fs.statSync(path + "/" + file);
      if (stat.isDirectory()){
        console.log(file, i);
        result.push(_.extend({
          name: file,
          url: "/config/" + key + "/" + file + "/index.js"
        }, require(path + "/" + file + "/describe.json")));        
      }
      
    });
    callback({webAds: result});
    
  });
}

function collectTestCases(dir, callback){
  var result = [];
  fs.readdir(dir, function(err, files){
    
    files.forEach(function(file, i){
      if (file.match(/^\./)){
        return;
      }
      var testdir = dir + '/' + file;      
      var describe = require(testdir + "/describe.json");
      result.push({
        name: describe.name||file,
        url: "/render/" + file + "/index.js"
      });
    });
    callback({webAds: result});    
  });
}


module.exports = function(app){
  
  
  app.get('/config/:key', function(req, res){
    var key = req.params.key;
    res.render('key', { 
        title: 'Webads setup' + key, 
        layout: false,
        key: key
    });
  });
  
  app.get('/config/:key/heliosAds', function(req, res){

      getConfigAds(req.params.key, function(result){
        res.send(result);
      });
  });
  
  


  // helios.server
  app.get('/heliosAds', function(req, res){
    collectTestCases(cases + "/render", function(result){ 
      res.send(result); 
    });
  });
  
  
};