document.write('<div><div id="flash_data_collector"></div></div>');
banner.log('start script')
var swfobject = banner.plugin('swfobject', document, window);
banner.log('swf loaded')
swfobject.embedSWF(webAds.base+"plugins/datacollector/flash.swf", "flash_data_collector", "980", "150", "9.0.0");
banner.log('embeded swf')
