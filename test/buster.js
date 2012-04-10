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
        "src/webAds.config.js",
        "src/webAds.plugins.js",
        "src/webAds.plugin.swfobject.js",
        "src/webAds.banners.js", 
        "src/webAds.manager.js"
    ],
    tests: [
        "test/*-test.js"
    ]
};
