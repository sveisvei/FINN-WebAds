var FINN  = FINN || {};

(function(F, $){
  "use strict";
  
  FINN.data = FINN.data || {};

  function fixTopPosition(banner){
    console.log(banner.name, 'fixTopPosition');
  }
  function fixLeftPosition(banner){
    console.log(banner.name, 'fixLeftBanner');

  }
  function fixWallpaper(banner){
    console.log(banner.name, 'fixWallpaper');
  }


  FINN.data.defaultConfig = $.extend(FINN.data.defaultConfig, {
    "Top": {
        width: 992,
        height: 150,
        bodyFailClass:'has-no-top-placement',
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
        width: 0,
        height: 0,
        onload: fixWallpaper
    },
    "Survey": {
        width: 0,
        height: 0,
        onload: $.noop
    },
    "Txt_1"   : {},
    "Txt_2"   : {},
    "Txt_3"   : {},
    "Txt_4"   : {},
    "Txt_5"   : {},
    "Txt_6"   : {},
    "Txt_7"   : {},
    "Txt_8"   : {},
    "Txt_9"   : {},
    "Txt_10"  : {},
    "Test01"  : {width: 500, height: 120, container: 'banners'},
    "Test02"  : {container: 'banner-tab'},
    "Test04"  : {container: 'banner-tab'},
    "Test05"  : {container: 'banner-tab'},
    "all"     : {container: 'banners'}
  });
  
  
})(FINN, jQuery);

