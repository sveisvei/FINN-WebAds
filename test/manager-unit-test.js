buster.testCase("Manager", {
  "setUp": function() {
    FINN.webAds.base      = buster.env.path + "Cases/render/";        
    FINN.webAds.iframeUrl = buster.env.path + "iframe.html";    
  },
  
  "tearDown": function() {
    FINN.webAds.cleanUp();
  },
  
  "should start with zero banners": function() {
    assert.equals(FINN.webAds._length(), 0);
    FINN.webAds.queue({
      name: "Test01",
      url: "asdtest"
    });
    assert.equals(FINN.webAds._length(), 1);
  },
  
  "and lazy load banner": {
    "setUp": function(){
      $("body").append('<div id="lazytest"></div>');     
      
      this.oldAll = FINN.data.defaultConfig.all;
      
      FINN.data.defaultConfig.all = {
        backend: 'helios'
      };
      
      this.banner = FINN.webAds.queue({
        name: 'Lazy',
        url: buster.env.path + 'Cases/render/Test01/index.js'
      });
    },
    
    "tearDown": function(){
      $("#lazytest").remove(); 
      FINN.data.defaultConfig.all = this.oldAll;    
    },
    
    "should fail with incomplete": function(done){
      var banner = this.banner;
      assert(typeof banner.container === 'undefined', 'banner.container should be undefined');
      FINN.webAds.renderAll(function(){
        assert(banner.incomplete, banner.name + ' incomplete should be on');
        refute(banner.active, banner.name + ' should not be active after calling render');
        done();
      });      
    },
    "should render after setting container": function(done){
      var banner = this.banner;
      banner.config('container', 'lazytest');
      FINN.webAds.renderAll(function(){
        refute(banner.incomplete, banner.name + ' incomplete should be on');
        assert(banner.active, banner.name + ' should not be active after calling render');
        done();
      });
    },
    "should pickup position container from position": function(done){
      var lazyBanner = this.banner;
      FINN.webAds.renderAll(function(){
        
        $("body").append('<div class="webads-lazy" data-webad-position="Lazy"></div>');
        
        assert(lazyBanner.incomplete, 'should be incomplete');
        
        FINN.webAds.on('all-webads-resolved', function(e, banners){
          assert(banners)
          assert(banners.Lazy.active);      
          assert(banners.Lazy.resolved);              
          refute(banners.Lazy.incomplete, 'should not be incomplete');
          $(document).off('all-webads-resolved');
          done();
        });
        
        refute(lazyBanner.active);      
        
        FINN.webAds.renderLazy("body");
        
        assert(lazyBanner.active);
      });
    }
  },
  "//renderContext should reload banners in context and ignore banner.active": function() {
    
  }

});
