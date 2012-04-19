var FINN = FINN || {};

(function(F, $) {
  "use strict";

  FINN.data = FINN.data || {};

  FINN.data.defaultConfig = $.extend(FINN.data.defaultConfig, {
    "Test01": {
			extends: 'Tests',
      width: 500,
      height: 120,
      container: 'banners'
    },
    "Test02": {
			extends: 'Tests',
      container: 'banner-tab'
    },
    "Test04": {
			extends: 'Tests',	
      container: 'banner-tab'
    },
    "Test05": {
			extends: 'Tests',
      container: 'banner-tab'
    },
    "Right2": {
      extends: 'normal',
			sticky: false,
      width: 240,
      height: 500
    },
    "all":{
				container: 'banners',
				backend: 'helios'
		}
  });
  
})(FINN, jQuery);
