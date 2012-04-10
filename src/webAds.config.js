var FINN  = FINN || {};

(function(F, $){
  "use strict";
  
  FINN.data = FINN.data || {};

  function fixTopPosition(banner){
    console.log(banner.name, 'fixTopPosition');
  }
  function fixLeftBanner(banner){
    console.log(banner.name, 'fixLeftBanner');

  }
  function fixWallpaper(banner){
    console.log(banner.name, 'fixWallpaper');
  }


  FINN.data.defaultConfig = {
    "Top": {
        width: 992,
        height: 150,
        bodyFailClass:'banner-has-no-top-banner',
        done: fixTopPosition
    },  
    "Left1": {
        width: 240,
        height: 500,
        bodyClass: 'banner-has-dominant-campaign',
        done: fixLeftBanner
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
    "Position0" : {width: 500, height: 120, container: 'banners'},
    "Position1" : {container: 'banner-tab'},
    "Position2" : {container: 'banner-tab'},
    "Position3" : {container: 'banner-tab'},
    "all"       : {container: 'banners'}
  };
  
  
})(FINN, jQuery);

