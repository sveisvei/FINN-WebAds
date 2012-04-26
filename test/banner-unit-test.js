
buster.testCase("Banner", {
  "setUp": function(){
    FINN.webAds.base      = buster.env.contextPath + "/";    
    FINN.webAds.iframeUrl = buster.env.contextPath + "/iframe.html";    
    $("body").append('<div id="banners" data-webads="true"></div>');
  },
  "tearDown" : function(){
    $("#banners,#test3").remove();
    if (FINN._webAds){
      FINN.webAds   = FINN._webAds;
      FINN._webAds  = null;
    }
    FINN.webAds.cleanUp();
  },
  "correct startup values": function(){
    var banner = new FINN.Banner({name: 'test', container: 'test'}, {})
    assert.equals(banner.retries, 5)
    assert.equals(banner.timer, 50)
    assert.equals(banner.width, 0)
    assert.equals(banner.height, 0)
  },
  "should not render when missing container option hash parameter": function(){
     var banner = new FINN.Banner({name: 'missingContainer'}, {});      
		 banner.insert();
		 assert(typeof this.container === 'undefined')
		 refute(banner.active)
		 //todo	
  },
  "should insert banner into container and call onload": function(done){
    var banner;
    var doneSpy = sinon.spy();
    var NAME    = 'webad';
    
    FINN._webAds  = FINN.webAds;
    FINN.webAds   = {
      iframeUrl: FINN.webAds.iframeUrl,
      expose: function(name){
        assert.equals(name, NAME);
        return {
          banner    : banner,
          webAds    : FINN.webAds, //"fake one"
          jQuery    : function(selector){
            return { on: function(event, cb){ cb(); } }
          }
        }
      },
      resolve: function(name){
        assert.equals(name, NAME);
        assert(doneSpy.called);
        refute(banner.failed);
        done();
      }
    };;
        
    banner = new FINN.Banner({
      name      : NAME, 
      container : 'banners',
      done      : doneSpy,
    }, {});    
    
    banner.injectScript = function(idoc, iwin){
      idoc.write('<div style="width:100px;height:100px;">Dummeh</div>');
    }

    banner.insert();
  },
  "1x1,1x2 and 3x3 px images should trigger fail": function(){
    var banner = new FINN.Banner({
      name: 'test', 
      container: 'test'
    }, {});
    banner.$webAd = $('<div id="webAd"><img src="#dummy2x1" /><img src="#empty" id="image"/><img src="#dummy2x9" /></div>')
    refute(banner.hasEmptyPixel());
    var $img = banner.$webAd.find('#image');
    $img.attr('src', '#asd1x1.gif');
    assert(banner.hasEmptyPixel());
    $img.attr('src', '#asd1x2.jpg');
    assert(banner.hasEmptyPixel());
    $img.attr('src', '#asd3x3.png');
    assert(banner.hasEmptyPixel());
  },
  "should fail if windowWidth is less than threshold": function(done){
    var banner = new FINN.Banner({
      name: 'test2', 
      container: 'test2',
      threshold: 100,
      windowWidth: 50
    }, {});
    var shouldNotBeCalled = sinon.spy();
    banner.iframe.makeIframe = shouldNotBeCalled
    banner.resolve = function(){
      refute(shouldNotBeCalled.called);
      assert(banner.failed);
      assert(banner.notValid);
      done();
    }
    banner.insert();
  }  ,
    "should pass if windowWidth is greater than threshold": function(done){
      var banner = new FINN.Banner({
        name: 'test', 
        container: 'test3',
        threshold: 100,
        windowWidth: 750
      }, {});
      $("body").append('<div id="test3"></div>');
      var spy = sinon.spy();
      var spy2 = sinon.spy();
      banner.iframe.makeIframe = spy
      banner.iframe.$wrapper = {
        appendTo: function(){
          assert(spy.called);
          refute(banner.failed);
          refute(banner.notValid);
          done();
        }
      }

      banner.insert();
    },
    "getBannerflag and setBannerFlag should pass to the manager": function(){
      var banner = new FINN.Banner({name: 'test', 
        container: 'test3'}, {});
      
      var value = banner.setBannerFlag('testKey', 'testValue');
      var stored = banner.getBannerFlag('testKey');
      
      assert.equals(value, stored, 'set key should be same as result');
      
    },
    "should not resize if default size is same as calculated size": function(){
      var banner = new FINN.Banner({
        name        : 'test', 
        container   : 'test3',
        width       : 100,
        height      : 150,
        threshold   : 100,
        windowWidth : 750
      }, {});
      var spy = sinon.spy();
      banner.resize = spy
      refute(banner.resized);
      banner.resizeIfNotDefault(100, 150);
      refute(spy.called, 'should not resize')
      banner.resizeIfNotDefault(101, 149);
      assert(spy.calledOnce, 'should be resize')
      
    }
  
}); 
