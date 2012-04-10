banner.log('start script')
var swfobject = webAds.plugins.swfobject(document, window);
banner.log('swf loaded')
swfobject.embedSWF(webAds.base+"Test03/980x150.swf", "flashbanner", "980", "150", "9.0.0");
banner.log('embeded swf')
