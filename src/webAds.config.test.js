var FINN = FINN || {};

(function(F, $) {
  "use strict";

  FINN.webAds.extend({
    "Test01": {
      width: 500,
      height: 120,
      "extends": "Tests",
      container: "banner-tab",
      customClasses: "hurra1 hurra2 hurra3"
    },
    "Test02": {
      "extends": "Tests",
      container: "banner-tab"
    },
    "Test08": {
      "extends": "Tests",
      container: "banner-tab"
    },
    "Test10": {
      "extends": "Tests",
      container: "banner-tab"
    },
    "Test09": {
      "extends": "Tests",
      container: "banner-tab"
    },
    "Test12": {
      "extends": "Tests",  
      container: "banner-tab"
    },
    "Tests": {},
    "all":{
        container: "banners",
        backend: "helios"
    }
  });
  
})(FINN, jQuery);
