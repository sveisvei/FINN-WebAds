var fs = require('fs');
var path = require('path');

module.exports = function collectTestCases(dir, callback){
  var result = [];
  fs.readdir(dir, function(err, files){
    
    files.forEach(function(file, i){
      var testdir = dir + '/' + file;      
      var describe = require(testdir + "/describe.json");
      result.push({
        name: describe.name,
        url: "/" + file + "/index.js"
      })
    });
    callback({webAds: result});
    
  });
  
  
}