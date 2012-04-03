var FINN  = FINN || {};
FINN.data = FINN.data || {};

function fixTopPosition(){}
function fixLeftBanner(){}
function fixWallpaper(){}


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
  "Right2": {
      width: 240,
      height: 500
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
  "Position0" : {width: 500, height: 120, container: 'banners'},
  "Position1" : {container: 'banner-tab'},
  "Position2" : {container: 'banner-tab'},
  "Position3" : {container: 'banner-tab'},
  "all"       : {container: 'banners'}
};