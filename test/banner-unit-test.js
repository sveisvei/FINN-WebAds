buster.testCase("Banner", {
  "setUp": function() {
    FINN.webAds.base = buster.env.contextPath + "/";
    FINN.webAds.iframeUrl = buster.env.contextPath + "/iframe.html";
    $("body").append('<div id="banners" data-webads="true"></div><style id="removeStyle">* {padding:0;margin:0;}</style>');
  },
  "tearDown": function() {
    $("#banners,#test3,#removeStyle").remove();
    if (FINN._webAds) {
      FINN.webAds = FINN._webAds;
      FINN._webAds = null;
    }
    FINN.webAds.cleanUp();
  },
  "correct startup values": function() {
    var banner = new FINN.Banner({
      name: 'test',
      container: 'test'
    });
    assert.equals(banner.retries, 5);
    assert.equals(banner.timer, 50);
    assert.equals(banner.width, 0);
    assert.equals(banner.height, 0);
  },
  "should not render when missing container option hash parameter": function() {
    var banner = new FINN.Banner({ name: 'missingContainer'}, {});
    banner.insert();
    refute.defined(banner.container);
    refute(banner.active);
    assert(banner.failed);
    //todo	
    
    
  },
  "should insert banner into container and call onload": function(done) {
    var banner;
    var doneSpy = sinon.spy();
    var NAME = 'webad';

    // copy
    FINN._webAds = FINN.webAds;
    // mock
    FINN.webAds = {
      iframeUrl: FINN.webAds.iframeUrl,
      expose: function(idocument, iwindow) {
        var name = idocument.location.hash.substring(2);
        assert.equals(name, NAME);                
        var list = {
          banner: banner,
          webAds: FINN.webAds,
          _jQuery: function(selector) { return { on: function(event, cb) { cb(); } } }
        }
        $.each(list, function(k){ iwindow[k] = this; });
      },
      resolve: function(name) {
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
    });

    banner.injectScript = function(idoc, iwin) {
      idoc.write('<div style="width:100px;height:100px;">Dummeh</div>');
    }

    banner.insert();
  },
  "1x1,1x2 and 3x3 px images should trigger fail": function() {
    var banner = new FINN.Banner({      name: 'test',      container: 'test'});
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
  "should fail if windowWidth is less than threshold": function(done) {
    var banner = new FINN.Banner({
      name        : 'test2',
      container   : 'test2',
      threshold   : 100,
      windowWidth : 50
    });
    var shouldNotBeCalled = sinon.spy();
    banner.iframe.makeIframe = shouldNotBeCalled
    banner.resolve = function() {
      refute(shouldNotBeCalled.called);
      assert(banner.failed);
      assert(banner.notValid);
      done();
    };
    banner.insert();
  },
  "should pass if windowWidth is greater than threshold": function(done) {
    var banner = new FINN.Banner({
      name        : 'test',
      container   : 'test3',
      threshold   : 100,
      windowWidth : 750
    });
    $("body").append('<div id="test3"></div>');
    var spy = sinon.spy();
    var spy2 = sinon.spy();
    banner.iframe.makeIframe = spy;
    // mock
    banner.iframe.$wrapper = {
      appendTo: function() {
        assert(spy.called);
        refute(banner.failed);
        refute(banner.notValid);
        done();
      }
    }
    banner.insert();
  },
  "getBannerflag and setBannerFlag should pass to the manager": function() {
    var banner = new FINN.Banner({
      name      : 'test',
      container : 'test3'
    });
    var value = banner.setBannerFlag('testKey', 'testValue');
    var stored = banner.getBannerFlag('testKey');
    assert.equals(value, stored, 'set key should be same as retured value');
    assert.equals(value, 'testValue', 'set key should be same as result');
  },
  "should resize if default size is same as calculated size, or not resize if same": function() {
    var banner = new FINN.Banner({
      name: 'test',
      container: 'test3',
      width: 100,
      height: 150,
      threshold: 100,
      windowWidth: 750
    });
    var spy = sinon.spy();
    banner.resize = spy
    refute(banner.resized);
    banner.resizeIfNotDefault(100, 150);
    refute(spy.called, 'should not resize')
    banner.resizeIfNotDefault(101, 149);
    assert(spy.calledOnce, 'should be resize')

  },
  "//refreshing banner should not add history entry": function(done){
    //check history.length after refreshed banner
    var historyLen = history.length*1;
    var banner = FINN.webAds.queue({name:'iframeTest', url: 'dummy'});
    
    banner.injectScript = function(idoc, iwin){
      this.doc = idoc;      
      idoc.write('<div style="width:200px;height:200px;>iframeHistoryTest</div>"');
    }

    FINN.webAds.render('iframeTest', function(){
      refute(banner.failed);
      refute(banner.incomplete);
      assert.equals(history.length, historyLen);
      banner.refresh();
	  assert.equals(history.length, historyLen)
      done();
    });

  },
  "mobile bottom bannercontainer should fill whole screen": function(done) {
    
    var banner = FINN.webAds.queue({
      name      : 'mobilebottom',
      container : 'banners',
      url       : 'asd',
      done      : function(){
        buster.log('asd3')
        assert.equals(banner.iframe.$wrapper.width(), $(window).width())
        done();
      },
    });
    

    banner.injectScript = function(idoc, iwin) {
      buster.log('asd');
      idoc.write('<div style="width:320px;height:100px;">Dummeh</div>');
    }
    FINN.webAds.render('mobilebottom');
    
  }
  
});
