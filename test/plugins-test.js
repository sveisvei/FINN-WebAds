buster.testCase("Banner", {
  "setUp": function() {
    FINN.webAds.base      = buster.env.contextPath + "/";
    FINN.webAds.iframeUrl = buster.env.contextPath + "/iframe.html";
    $("body").append('<div id="banners" data-webads="true"></div>');
  },
  "tearDown": function() {
    $("#banners,#test3").remove();
    if (FINN._webAds) {
      FINN.webAds = FINN._webAds;
      FINN._webAds = null;
    }
    FINN.webAds.cleanUp();
  },
  "plugin context data": {
  "should return FINN.data.banner": function(){
	FINN.data = FINN.data||{};
	FINN.data.banner = {parameters: "testparam=testvalue"};
    var banner = new FINN.Banner({name: "test"});
    var result = banner.plugin('contextData');
    assert.equals(FINN.data.banner, result);
}
},

  "plugins should be in place": function(){
    
    assert(true);
  }
});