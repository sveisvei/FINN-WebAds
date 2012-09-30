buster.testCase("Plugin", {
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
  "contextData": {
    "should return FINN.data.banner": function(done){
      FINN.data = FINN.data||{};
      FINN.data.banner = {parameters: "testparam=testvalue"};
      assert(FINN.webAds.Banner);
      var banner = new FINN.webAds.Banner({name: "Top", container: "banners"});

      var result = banner.plugin('contextData');
      assert.equals(FINN.data.banner, result);

      banner.plugin('contextData', function(result2){
        assert.equals(FINN.data.banner, result2, 'Should return correct obj in callback');
        done();
      });
    }
  },
  "getAdData":{
    "setUp": function(){
      this.banner = new FINN.webAds.Banner({name: "Top", container: "banners"});
    },
    "tearDown": function(){
      this.banner = null;
    },
    "should return correct data": function(done){
      var plugin = banner.plugin('getAdData', function(){

      });
    }
  },

  "plugins should be in place": function(){

    assert(true);
  }
});