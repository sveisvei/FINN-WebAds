var config = module.exports;
var resources = require('./resources');

config["My tests"] = {
    env: "browser",        // or "node"
    rootPath: "../",
    resources: resources,    
    libs: [
      "App/Ads/public/javascripts/jquery.js"
    ],
    sources: [
        "src/webAds.*.js", 
        "src/webAds.js"
    ],
    tests: [
        "test/*-test.js"
    ]
};
