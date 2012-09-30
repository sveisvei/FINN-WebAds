var fs                      = require('fs');
var cases                   = fs.realpathSync(__dirname + '/../../test/Cases');
var _ = require('underscore');

function getConfigAds(key, callback){
  var path = cases + "/config/" + key;
  fs.readdir(path, function(err, files){
    if (err) throw err;
    var result = [];
    var config = require(path + '/describe.json');
    files.forEach(function(file, i){
      if (file.match(/^\./)){
        return;
      }
      var stat = fs.statSync(path + "/" + file);
      if (stat.isDirectory()){
        var config = require(path + "/" + file + "/describe.json");
        //console.log('DEBUG', config);
        result.push(_.extend({
          name: file,
          url: "/config/" + key + "/" + file + "/index.js"
        }, config));
      }
      
    });
    callback({webAds: result, config: config});
    
  });
}

function getFolders(callback){
  var path = cases + "/config/";
  fs.readdir(path, function(err, files){
    if (err) throw err;
    var result = [];
    files.forEach(function(file, i){
      if (file.match(/^\./)){
        return;
      }
      var stat = fs.statSync(path + "/" + file);
      if (stat.isDirectory()){        
        result.push(file);        
      }
      
    });
    callback({folders: result});
    
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
      result.push(_.extend({
        name: describe.name||file,
        url: "/render/" + file + "/index.js"
      }, describe));
    });
    callback({webAds: result});    
  });
}


module.exports = function(app){
  
  app.get('/', function(req, res){
    getFolders(function(folders){
      res.render('index', { title: 'Webads', layout: false, key: '', folders: folders });       
    });
  });
  
  
  app.get('/config/:key', function(req, res){
    var key = req.params.key;
      getFolders(function(folders){
        res.render('key', { 
            title: key,
            layout: false,
            key: key,
            folders: folders
        });
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