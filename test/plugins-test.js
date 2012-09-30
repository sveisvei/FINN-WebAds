buster.testCase("Plugin", {
  "setUp": function() {
    FINN.webAds.base        = buster.env.contextPath + "/";
    FINN.webAds.contextBase = buster.env.contextPath + "/Cases/config/";
    FINN.webAds.iframeUrl   = buster.env.contextPath + "/iframe.html";
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
    "should return correct data": function(done){
      var banner = new FINN.webAds.Banner({
        name: "Top",
        container: "banners"
      });
      banner.plugin('getAdData', {}, function(obj){
        refute(obj.error, 'Should not return error');
        assert(obj.list && obj.list.length > 0);
        done();
      });
    },
    "should embed flash and flash should call plugin": function(done){

      var timeout = buster.testRunner.timeout;
      buster.testRunner.timeout = 2000;

      var banner = FINN.webAds.queue({
          name: "Top",
          container: "banners",
          url: FINN.webAds.contextBase + 'plugins/datacollector/index.js'
      });
      var plugin = FINN.webAds.getPlugin('getAdData');
      var called = plugin.called[banner.name]||0;

      FINN.webAds.render('Top');

      setTimeout(function(){
          var called2  = plugin.called[banner.name];
          assert(called+1 === called2);
          //reset
          buster.testRunner.timeout = timeout;
          FINN.webAds.cleanUp();
          done();
      }, 500);

    }
  },

  "plugins should be in place": function(){

    assert(true);
  }
});