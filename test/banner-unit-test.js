
buster.testCase("Banner", {
  "setUp": function(){
    FINN.webAds.base      = buster.env.path + "/";    
    FINN.webAds.iframeUrl = buster.env.path + "iframe.html";    
    $("body").append('<div id="banners"></div>');
  },
  "tearDown" : function(){
    $("#banners").remove();
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
        assert(doneSpy.called)      
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
    banner.$webAd = $('<div id="webAd"><img src="dummy2x1" /><img src="empty" id="image"/><img src="dummy2x9" /></div>')
    refute(banner.hasEmptyPixel());
    var $img = banner.$webAd.find('#image');
    $img.attr('src', 'asd1x1.gif');
    assert(banner.hasEmptyPixel());
    $img.attr('src', 'asd1x2.jpg');
    assert(banner.hasEmptyPixel());
    $img.attr('src', 'asd3x3.png');
    assert(banner.hasEmptyPixel());
  }
  
}); 
