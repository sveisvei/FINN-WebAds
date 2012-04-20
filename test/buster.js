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
        "src/webAds.plugins.js",
        "src/webAds.plugin.swfobject.js",
        "src/webAds.banners.js", 
        "src/webAds.manager.js"
    ],
    tests: [
        "test/*-test.js"
        //"test/banner-config-test.js"
        //"test/banner-unit-test.js"
        //"test/manager-unit-test.js"
        //"test/render-test.js"
    ]
    //, extensions: [require("buster-lint")]    
};
