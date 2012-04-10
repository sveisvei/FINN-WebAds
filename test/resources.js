var fs  = require('fs');
var _ = require("underscore");

var APP_JSON    = {'Content-Type' : 'application/json; charset=utf-8'};
var TEXT_PLAIN  = {'Content-Type' : 'text/plain; charset=utf-8'};
var HTML        = {'Content-Type' : 'text/html; charset=utf-8'};

var testCases   = [];
var folderPath  = __dirname + "/Cases";
var testFolders = fs.readdirSync(folderPath);

testFolders.forEach(function(folderName, i){
  var testDir = folderPath + "/" + folderName;
  var testDirFiles = fs.readdirSync(testDir);
  
  var describe = require(testDir + "/describe.json");
  var resultObj = {
    url: "/Cases/" + folderName + "/index.js", 
    name: describe.name||folderName
  };
  testCases.push(_.extend(describe, resultObj))
  
  /*testDirFiles.forEach(function(testFile, i){
    resources.push({
      path: folderName + "/" + testFile,
      content: fs.readFileSync(testDir + "/" + testFile, "utf8")
    });
  })*/
});

var resources = [
  {
    path    : '/finn/webads',
    content : fs.readFileSync('src/iframe.html', 'utf8'),
    headers : HTML
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
