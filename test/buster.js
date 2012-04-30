var config = module.exports;
var resources = require('./resources');

config["My tests"] = {
    env: "browser",
    rootPath: "../",
    resources: resources,    
    libs: [
      "App/public/javascripts/jquery.js"
    ],
    sources: [
        "src/webAds.config.js",
        "src/webAds.config.test.js",        
        "src/webAds.banners.js", 
        "src/webAds.manager.js",
        "src/webAds.manager.plugins.js",
        "src/webAds.plugin.swfobject.js",
        "src/webAds.sticky.js"        
    ],
    tests: [
        "test/*-test.js"
    ]
    //, extensions: [require("buster-lint")]    
};
