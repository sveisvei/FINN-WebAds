var FINN = FINN || {};

(function(F, $) {
  "use strict";

  FINN.webAds.extend({
    "Test01": {
      "extends": "Tests",
      width: 500,
      height: 120,
      container: "banners"
    },
    "Test02": {
      "extends": "Tests",
      container: "banner-tab"
    },
    "Test04": {
      "extends": "Tests",  
      container: "banner-tab"
    },
    "Test05": {
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
