var DEFAULT_TIMEOUT = 450;
buster.testRunner.timeout = DEFAULT_TIMEOUT;

var webAds = FINN.webAds;

function collectTestCases(cb){
  var testCases = {};
  
  testCases["should render"]   = {};
    
  testCases["should render"]["setUp"] = function() {
    $("body").append('<div id="banners"></div>');
    webAds.base         = buster.env.contextPath + "/";
    webAds.contextBase  = buster.env.contextPath + "/Cases/render/";
    webAds.iframeUrl    = buster.env.contextPath + "/iframe.html";
  };
  
  testCases["should render"]["tearDown"] = function(){
    webAds.cleanUp();
    $("#banners").remove();
    $("body").removeAttr('style').removeAttr('class');
  };

  
  function createTest(){
    var testCase = this;
    testCases["should render"][testCase.name] = function(done){
      buster.testRunner.timeout = testCase.timeout||DEFAULT_TIMEOUT;       

      var firstInFirstOutSpy = sinon.spy();
      var doneSpy = sinon.spy();
      
      var bannerInitObj = {
        name      : testCase.name,
        url       : buster.env.contextPath + testCase.url,
        container : 'banners',
        done      : doneSpy
      };
      if (testCase.forceDelay) {
        bannerInitObj.url += '?forceDelay=' + testCase.forceDelay        
      }
      if (testCase.timer){
        bannerInitObj.timer = testCase.timer;
      }
      var banner  = webAds.queue(bannerInitObj);

      refute(banner.active);
      refute(banner.resolved);
      refute(doneSpy.called);
      
      webAds.render(testCase.name, firstInFirstOutSpy);            
      webAds.render(testCase.name, function(err, banner) {
        if (testCase['expectations']){
          $.each(testCase['expectations'], function(key, val){
            if (key == 'classes') assert.equals(banner.iframe.$wrapper.attr('class'), val, key);
            else assert.equals(banner[key], val, key);
          });
        }
        assert(banner.active);
        assert(doneSpy.calledOnce);
        assert(firstInFirstOutSpy.calledOnce);

        setTimeout(function() {
          assert(banner.resolved);
          done();
        }, 100);
      });
      


      assert(banner.active);
    }
  }
  
  function createTests(d){
    $.each(d.testcases, createTest);
    testCases.debugInfo = function(){
      console.log('Generating ', d.testcases.length, ' render tests from folders in $ROOT/test/Cases/render/*');
      assert(true);
    }
    cb(testCases)
  }
  
  // WARNING: getting tests from resouces.js
  var resourceURL = buster.env.contextPath + "/testcases-render-test";
  $.getJSON(resourceURL, createTests);
} 

collectTestCases(function(cases){ 
  buster.testCase("WebAds", cases); 
});

