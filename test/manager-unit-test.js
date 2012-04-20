buster.testCase("Manager", {
  "setUp": function() {
    FINN.webAds.base      = buster.env.contextPath + "/Cases/render/";        
    FINN.webAds.iframeUrl = buster.env.contextPath + "/iframe.html";    
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
      $("body").append('<div class="webads" id="lazytest"></div>');     
      
      this.oldAll = FINN.data.defaultConfig.all;
      
      FINN.data.defaultConfig.all = {
        backend: 'helios'
      };
      
      this.banner = FINN.webAds.queue({
        name: 'Lazy',
        url: buster.env.contextPath + '/Cases/render/Test01/index.js'
      });
    },
    
    "tearDown": function(){
      $("#lazytest,.webads-lazy,#lazy2,#wrap").remove(); 
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
      
      FINN.webAds.renderAll(function(err, banners){
        $("body").html('<div id="wrap">\
                            <div data-webads="lazy" data-webad-position="Lazy"></div>\
                          </div>');

        assert.equals($("div[data-webad-position='Lazy']").data('webads-processed'), undefined);
        assert(lazyBanner.incomplete, 'should be incomplete when rendered without container');
        refute(lazyBanner.active,     'should not be active');      
        refute(lazyBanner.container,  'caontainer should be missing');
        
        lazyBanner.log('active     :'+ lazyBanner.active)
        lazyBanner.log('incomplete :'+ lazyBanner.incomplete)
        
        FINN.webAds.renderLazy("#wrap", function(err, banners){
          console.log('HURRA');
          assert(lazyBanner.active,       'should be active');      
          assert(lazyBanner.resolved,     'should be resolved');              
          refute(lazyBanner.incomplete,   'should not be incomplete');
          assert.equals($(lazyBanner.container).data('webads-processed'), 'processed');
          assert.equals($("div[data-webad-position='Lazy']").data('webads-processed'), 'processed');
          done();
        });
        
      });
      
    }  ,
    "renderContext should reload banners in context and ignore banner.active": function(done) {
      var lazyBanner = this.banner;
      
      lazyBanner.config('container', 'lazytest');
      refute(lazyBanner.active)
      
      FINN.webAds.render('Lazy', function(){
        assert(lazyBanner.active);
        $("#lazytest").remove();
        $("body").append('<div data-webads="true" id="lazy2">dummy</div>')
        lazyBanner.config('container', 'lazy2');
        
        FINN.webAds.on('all-webads-resolved', function(){
           $(document).off('all-webads-resolved');
           refute.equals($("#lazy2").html(), 'dummy');
           done();
        });
        
        FINN.webAds.renderContext("body", true);
      });

    }
  }

});
