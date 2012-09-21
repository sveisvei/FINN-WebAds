document.write('<div><div id="flash_data_collector"></div></div>');
banner.log('start script')
var swfobject = banner.plugin('swfobject', document, window);
banner.log('swf loaded')
var flashvars = {};
var params = {};
var attributes = {};

params.allowscriptaccess = "always";
swfobject.embedSWF(
  'http://127.0.0.1:3000' + webAds.base+"plugins/datacollector/flash.swf", 
  "flash_data_collector", 
  "980", 
  "150", 
  "9.0.0",
  "expressInstall.swf",
   flashvars, params, attributes
);
banner.log('embeded swf')
