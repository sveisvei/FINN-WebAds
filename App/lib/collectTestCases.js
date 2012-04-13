var fs = require('fs');
var path = require('path');

module.exports = function collectTestCases(dir, callback){
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
      })
    });
    callback({webAds: result});    
  });
}