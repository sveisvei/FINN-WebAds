var fs                      = require('fs');
var collectRenderTestCases  = require('./collectTestCases.js');

var cases                   = fs.realpathSync(__dirname + '/../../test/Cases');

function getConfigAds(key, callback){
  
  
}


module.exports = function(app){
  
  
  app.get('/config/:key', function(req, res){
    var key = req.params.key;
    getConfigAds(key, function(ads){
      res.render(key, { 
        title: 'Webads setup' + key, 
        layout: false,
        ads: ads
      });
      
    });
  });
  


  // helios.server
  app.get('/heliosAds', function(req, res){
    collectRenderTestCases(cases + "/render", function(result){ 
      res.send(result); 
    });
  });
  
  
};