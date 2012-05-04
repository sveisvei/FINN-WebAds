var FINN = FINN || {};

(function(F, $) {
  "use strict";

  FINN.webAds = FINN.webAds || {};  
  FINN.data   = FINN.data   || {};
  
  FINN.webAds.extend = function(obj){
    if (typeof FINN.data.defaultConfig === 'undefined') {
      FINN.data.defaultConfig = obj;      
    } else {
      $.each(obj, function(k,v){ FINN.data.defaultConfig[k] = $.extend(FINN.data.defaultConfig[k]||{}, v); });      
    }
  };

  function fixTopPosition(banner) {
    banner.log("cb fixTopPosition");
    if (banner.failed === true){ 
      return;
    }
    var width           = banner.width;
    var isSmallBanner   = width <= 768;
    var isNotCompanion  = width >= 800 && width < 992;
    var isDominant      = width > 992;
    if (banner.params.bodyFailClass) {
     $("body").removeClass(banner.params.bodyFailClass); 
    }
    if (isSmallBanner || isNotCompanion) {
      banner.iframe.$wrapper.css("width", "980px");
    } else if (isDominant) {
      banner.iframe.$wrapper.css("margin-left", "-12px");
    }
  }

  function fixLeftPosition(banner) {
    banner.log("cb fixLeftBanner");
    if (!banner.failed && banner.width > 50) {
      banner.iframe.$wrapper.css("left", (-(banner.width + 12)) + "px");
    }
  }

  function fixWallpaper(banner) {
    banner.log("cb fixWallpaper");
    if (banner.failed === true){ return;}    
    var bgImage = banner.iframe.$iframe.contents().find("img");
    if (bgImage.size() > 0 && bgImage.width() !== 1) {
      var src = bgImage.attr("src");
      if (src !== "" && src.indexOf("empty.gif") === -1) {
        var css = {
          "background": " transparent url(\"" + src + "\") 50% 0% no-repeat",
          "background-attachment": "fixed"
        };
        $("body").css(css).addClass("has-dominant-wallpaper");
      }
    }
  }
  
  FINN.webAds.extend({
    "Top": {
      "extends": "normal",
      width: 992,
      threshold: 451,
      height: 150,
      bodyFailClass: "top-position-collapsed",
      done: fixTopPosition
    },
    "Left1": {
      "extends": "normal",
      width: 240,
      threshold: 1050,
      height: 500,
      bodyClass: "has-dominant-campaign",
      done: fixLeftPosition
    },
    "Right1": {
      "extends": "normal",
      width: 240,
      threshold: 1025      
    },
    "Right2": {
      "extends": "normal",
      threshold: 1025,            
      sticky: true,
      width: 240,
      height: 500
    },
    "Right3": {
      threshold: 1025,                  
      "extends": "normal",
      width: 240
    },
    "Middle": {
      "extends": "normal",
      width: 580,
      height: 400,
      threshold: 291,                  
      container: "banners-middle"
    },
    "Wallpaper": {
      "extends": "normal",
      hidden: true,
      threshold: 1050,      
      done: fixWallpaper
    },
    "Survey": {
      "extends": "normal",
      hidden: true,      
      done: $.noop
    },
    "Txt_1"   : {
      "extends": "textads"
    },
    "Txt_2"   : {
      "extends": "textads"
    },
    "Txt_3"   : {
      "extends": "textads"
    },
    "Txt_4"   : {
      "extends": "textads"
    },
    "Txt_5"   : {
      "extends": "textads"
    },
    "Txt_6"   : {
      "extends": "textads"
    },
    "Txt_7"   : {
      "extends": "textads"
    },
    "Txt_8"   : {
      "extends": "textads"
    },
    "Txt_9"   : {
      "extends": "textads"
    },
    "Txt_10"  : {
      "extends": "textads"
    },
    "BottomLeft": { 
      "extends": "bottomads"       
    },
    "BottomMiddle": { 
      "extends": "bottomads" 
    },
    "BottomRight": { 
      "extends": "bottomads" 
    },
    "BottomRight2": {
      "extends": "bottomads"       
    },
    "bottomads": {
      container: "banners-bottom"
    },
    "textads" : {
      width: 100,
      height: 46,
      container: "textbanners"
    },
    "normal": {
      container : "banners"
    },
    "all": {
      backend   : "helios"
    }
  });

})(FINN, jQuery);
