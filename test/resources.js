var fs  = require('fs');
var _ = require("underscore");

var APP_JSON    = {'Content-Type' : 'application/json; charset=utf-8'};
/*var TEXT_PLAIN  = {'Content-Type' : 'text/plain; charset=utf-8'};
var HTML        = {'Content-Type' : 'text/html; charset=utf-8'};*/

var testCases   = [];
var testFoldersPath  = __dirname + "/Cases";
var testFolders = fs.readdirSync(testFoldersPath);

testFolders.forEach(function(folderName, i){
  if (folderName.match(/^\./)){
    return;
  }
  var testDir = testFoldersPath + "/" + folderName;
  var testDirFiles = fs.readdirSync(testDir);
  
  var describe = require(testDir + "/describe.json");
  var resultObj = {
    url: "/Cases/" + folderName + "/index.js", 
    name: describe.name||folderName
  };
  testCases.push(_.extend(describe, resultObj));
});

var resources = [{
    path    : '/finn/webads',
    backend : 'localhost:3000/finn/webads'
  },
  {
    path: "/Cases/",        
    backend: "localhost:3000/" 
  },
  {
    path: '/testcases',
    content: JSON.stringify({testcases: testCases}),
    headers: APP_JSON
  }
];

module.exports = resources;
