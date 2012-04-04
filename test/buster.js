var config = module.exports;
var resources = require('./resources')

config["My tests"] = {
    env: "browser",        // or "node"
    rootPath: "../",
    resources: resources,    
    sources: [
        "App/Ads/public/javascripts/jquery.js",
        "src/webAds.*.js", 
        "src/webAds.js"
    ],
    tests: [
        "test/*-test.js"
    ]
}
