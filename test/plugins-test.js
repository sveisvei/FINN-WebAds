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
  "plugins should be in place": function(){
    
    assert(true);
  }
});