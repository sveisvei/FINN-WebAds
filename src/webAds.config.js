var FINN = FINN || {};

(function(F, $) {
  "use strict";

  FINN.data = FINN.data || {};

  function fixTopPosition(banner) {
    banner.log('cb fixTopPosition');
    if (banner.failed) {
      return;
    }
    var width = banner.width;
    var isSmallBanner = width <= 768;
    var isNotCompanion = width >= 800 && width < 992;
    var isDominant = width > 992;
    if (isSmallBanner || isNotCompanion) {
      banner.iframe.$wrapper.css('width', '980px');
    } else if (isDominant) {
      banner.iframe.$wrapper.css('margin-left', "-12px");
    }
  }

  function fixLeftPosition(banner) {
    banner.log('cb fixLeftBanner');
    if (!banner.failed && banner.width > 50) {
      banner.iframe.$wrapper.css("left", (-(banner.width + 12)) + "px");
    }
  }

  function fixWallpaper(banner) {
    banner.log('cb fixWallpaper');
    var bgImage = banner.iframe.$iframe.contents().find("img");
    if (bgImage.size() > 0 && bgImage.width() !== 1) {
      var src = bgImage.attr('src');
      if (src !== '' && src.indexOf('empty.gif') === -1) {
        var css = {
          'background': ' transparent url(\"' + src + '\") 50% 0% no-repeat',
          'background-attachment': 'fixed'
        };
        $("body").css(css);
      }
    }
  }

  FINN.data.defaultConfig = $.extend(FINN.data.defaultConfig, {
    "Top": {
      width: 992,
      height: 150,
      bodyFailClass: 'has-no-top-placement',
      done: fixTopPosition
    },
    "Left1": {
      width: 240,
      height: 500,
      bodyClass: 'has-dominant-campaign',
      done: fixLeftPosition
    },
    "Right1": {
      width: 240
    },
    "Right2": {
      width: 240,
      height: 500
    },
    "Right3": {
      width: 240
    },
    "Middle": {
      width: 580,
      height: 400,
      container: "banners-middle"
    },
    "Wallpaper": {
      hidden: true,
      done: fixWallpaper
    },
    "Survey": {
      hidden: true,      
      done: $.noop
    },
    "Txt_1": {},
    "Txt_2": {},
    "Txt_3": {},
    "Txt_4": {},
    "Txt_5": {},
    "Txt_6": {},
    "Txt_7": {},
    "Txt_8": {},
    "Txt_9": {},
    "Txt_10": {},
    "Test01": {
      width: 500,
      height: 120,
      container: 'banners'
    },
    "Test02": {
      container: 'banner-tab'
    },
    "Test04": {
      container: 'banner-tab'
    },
    "Test05": {
      container: 'banner-tab'
    },
    "all": {
      container: 'banners'
    }
  });

})(FINN, jQuery);
