document.write('<div id="flashbanner"><a href="#asd"><img src="'+webAds.contextBase+'Test05/1270736.jpeg" /></a></div>');
var swfobject = banner.plugin('swfobject', document, window);
swfobject.embedSWF(webAds.contextBase+"Test05/1270735.swf", "flashbanner", "980", "150", "9.0.0");