var fs  = require('fs');
var _ = require("underscore");

var APP_JSON    = {'Content-Type' : 'application/json; charset=utf-8'};
/*var TEXT_PLAIN  = {'Content-Type' : 'text/plain; charset=utf-8'};
var HTML        = {'Content-Type' : 'text/html; charset=utf-8'};*/

var resources = [{
    path    : '/finn/webads',
    backend : 'localhost:3000/finn/webads'
  },
  {
    path: "/Cases/",        
    backend: "localhost:3000/" 
  },
  {
    path: "src/webAds.css",
    backend: "localhost:3000/webAds.css"
  },
  {
    path: "iframe.html",
    backend: "localhost:3000/iframe.html"
  }  
];

/*
  Collect testcases for render-test.js
*/
var testCases   = [];
var testFoldersPath  = __dirname + "/Cases/render";
var testFolders = fs.readdirSync(testFoldersPath);
testFolders.forEach(function(folderName, i){
  if (folderName.match(/^\./)){return;}
  var testDir = testFoldersPath + "/" + folderName;
  var testDirFiles = fs.readdirSync(testDir);
  
  var describe = require(testDir + "/describe.json");
  var resultObj = {
    url: "/Cases/render/" + folderName + "/index.js", 
    name: describe.name||folderName
  };
  testCases.push(_.extend(describe, resultObj));
});

resources.push({
  path: '/testcases-render-test',
  content: JSON.stringify({testcases: testCases}),
  headers: APP_JSON
});

/*
  Collect testcases for config tests
*/
var configTests = [];
var configFolder = __dirname + "/Cases/config";
var configSetupFolders = fs.readdirSync(configFolder);

configSetupFolders.forEach(function(folderName, i){
  if (folderName.match(/^\./)){return;}
  var setupDir = configFolder + "/" + folderName;
  var stat = fs.statSync(setupDir);
  if (stat.isDirectory()){
    var testCase = {name: folderName, tests: []}
    var describe = require(setupDir + "/describe.json");    
    _.extend(testCase, describe);
    
    var folderContent = fs.readdirSync(setupDir);
    folderContent.forEach(function(testName, g){
      if(testName.indexOf('.') !== -1){
        return;
      }
      var testDirName = setupDir + "/" + testName;
      testCase.tests.push(_.extend({
        name: testName,
        description: folderName + "-" + testName,
        url: '/Cases/config/' + folderName + '/' + testName + '/index.js',        
      }, require(setupDir + "/" + testName + "/describe.json")));    
    });
    configTests.push(testCase);    
  }  
});

resources.push({
  path: '/testcases-config',
  content: JSON.stringify({testcases: configTests}),
  headers: APP_JSON
});


module.exports = resources;
