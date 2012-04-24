var FINN = FINN || {};

(function(F, $) {
  "use strict";

  FINN.data = FINN.data || {};

  function fixTopPosition(banner) {
    banner.log("cb fixTopPosition");
    if (banner.failed === true){ return;}
    var width = banner.width;
    var isSmallBanner = width <= 768;
    var isNotCompanion = width >= 800 && width < 992;
    var isDominant = width > 992;
    if (banner.bodyFailClass) $("body").removeClass(banner.bodyFailClass);
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

  FINN.data.defaultConfig = $.extend(FINN.data.defaultConfig, {
    "Top": {
      "extends": "normal",
      width: 992,
      height: 150,
      bodyFailClass: "top-position-collapsed",
      done: fixTopPosition
    },
    "Left1": {
      "extends": "normal",
      width: 240,
      height: 500,
      bodyClass: "has-dominant-campaign",
      done: fixLeftPosition
    },
    "Right1": {
      "extends": "normal",
      width: 240
    },
    "Right2": {
      "extends": "normal",
      sticky: true,
      width: 240,
      height: 500
    },
    "Right3": {
      "extends": "normal",
      width: 240
    },
    "Middle": {
      "extends": "normal",
      width: 580,
      height: 400,
      container: "banners-middle"
    },
    "Wallpaper": {
      "extends": "normal",
      hidden: true,
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
      container: "textbanners",
      done: function(banner){
      /*
        banner.$webAd.on('click', 'a.tf-track-helios', function(){
          var fromSite = banner.params.site || $(this).data("tf-site") || document.domain;
          var href = convertToAbsoluteUri($(this).data("tf-url") || this.href || this.action);        
          FINN.trackingHub.publish(FINN.trackingHub.tfBanner, {site: fromSite, url: href});                    
        });*/
      }
    },
    "normal": {
      container : "banners"
    },
    "all": {
      backend   : "helios"
    }
  });

})(FINN, jQuery);
