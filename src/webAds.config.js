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
    banner.log(2, "cb fixTopPosition");

    // temp hack for ipad top position
    if (banner.responsive === true){
      banner.$webAd.css({'display':'block', 'width':'100%'});
      banner.iframe.$wrapper.css({'width': '100%'});
      banner.iframe.$iframe.css({'height': '225px'});
      // make wrapper fill screen
      $('#banners').css({'max-width': '100%'});
      return;
    }

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
      banner.setBannerFlag('disableSticky', true);
      banner.iframe.$wrapper.css("margin-left", "-12px");
    }
  }

  function fixLeftPosition(banner) {
    banner.log(2, "cb fixLeftBanner");
    if (!banner.failed && banner.width > 50) {
      banner.iframe.$wrapper.css("left", (-(banner.width + 12)) + "px");
    }
  }

  function fixWallpaper(banner) {
    banner.log(2, "cb fixWallpaper");
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

  function addCloseButton(banner){
    banner.iframe.$wrapper.append('<button class=dismiss-sticky>X</button>');
    banner.iframe.$wrapper.on("click", '.dismiss-sticky', function(){
      banner.iframe.$wrapper.remove();
    });
  }

  function setMaxWidth(banner){
    if (banner.params.width){
      var $container = typeof banner.container === 'string' ? jQuery("#" + banner.container) : banner.container;
      var availWidth = banner.params.windowWidth - (banner.iframe.$wrapper.position().left + $container.position().left);
      banner.params.staticAvailableWidth = (availWidth-10) > banner.params.width ? (availWidth-10) : banner.params.width;
    }
  }

  FINN.webAds.extend({
    "Top": {
      "extends": "normal",
      width: 992,
      threshold: 769,
      height: 150,
      bodyFailClass: "top-position-collapsed",
      done: fixTopPosition,
      trackBurt: true
    },
    "Top_ipad": {
      "extends": "normal",
      width: 986,
      height: 150,
      bodyFailClass: "top-position-collapsed",
      done: fixTopPosition,
      trackBurt: true
    },
    "Left1": {
      "extends": "normal",
      width: 240,
      threshold: 1050,
      height: 500,
      bodyClass: "has-dominant-campaign",
      done: fixLeftPosition,
      trackBurt: true
    },
    "Right1": {
      "extends": "normal",
      width: 240,
      threshold: 1025,
      trackBurt: true
    },
    "Right2": {
      "extends": "normal",
      threshold: 1025,
      sticky: true,
      width: 240,
      height: 500,
      before: setMaxWidth,
      trackBurt: true
    },
    "Right3": {
      threshold: 1025,
      "extends": "normal",
      width: 240,
      trackBurt: true
    },
    "Middle": {
      "extends": "normal",
      width: 580,
      height: 400,
      threshold: 291,
      container: "banners-middle",
      trackBurt: true
    },
    "Middle_ipad": {
      "extends": "normal",
      width: 580,
      height: 400,
      threshold: 291,
      container: "banners-middle",
      trackBurt: true
    },
    "Txt1": {
      "extends": "normal",
      width: 320,
      threshold: 291,
      container: "banners-txt1",
      trackBurt: true
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
    "Survey_ipad": {
      "extends": "normal",
      hidden: true,
      done: $.noop
    },
    "Inline1": {
      width: 320,
      container: "banners-inline1"
    },
    "Inline2": {
      width: 320,
      container: "banners-inline2"
    },
    "BottomLeft": {
      "extends": "bottomads",
      trackBurt: true
    },
    "BottomLeft_ipad": {
      "extends": "bottomads",
      trackBurt: true
    },
    "BottomMiddle": {
      "extends": "bottomads",
      trackBurt: true
    },
    "BottomMiddle_ipad": {
      "extends": "bottomads",
      trackBurt: true
    },
    "BottomRight": {
      "extends": "bottomads",
      trackBurt: true
    },
    "BottomRight_ipad": {
      "extends": "bottomads",
      trackBurt: true
    },
    "BottomRight2": {
      "extends": "bottomads",
      trackBurt: true
    },
    "BottomRight2_ipad": {
      "extends": "bottomads",
      trackBurt: true
    },
    "bottomads": {
      container: "banners-bottom"
    },
    "MobileBottom" : {
      width: 320,
      "extends": "normal",
      done: addCloseButton
    },
    "normal": {
      container : "banners"
    },
    "Bildekarusell": {
      width: 500,
      height: 320
    },
    "all": {
      backend   : "helios"
    }
  });

})(FINN, jQuery);