var DEFAULT_TIMEOUT = 450;
buster.testRunner.timeout = DEFAULT_TIMEOUT;

var webAds = FINN.webAds;

function collectTestCases(cb){
  var testCases = {};
  
  testCases["setUp"] = function() {
    $("body").append('<div id="banners"></div>');
    webAds.base      = buster.env.path + "Cases/";    
    webAds.iframeUrl = buster.env.path + "finn/webads";
  };
  
  testCases["tearDown"] = function(){
    webAds.cleanUp();
    $("#banners").remove();
  };
  
  testCases["should render"]   = {};
  
  function createTest(){
    var testCase = this;
    testCases["should render"][testCase.name] = function(done){
      buster.testRunner.timeout = testCase.timeout||DEFAULT_TIMEOUT;       

      var firstInFirstOutSpy = sinon.spy();
      var doneSpy = sinon.spy();
      
      var bannerInitObj = {
        name      : testCase.name,
        url       : buster.env.path + testCase.url.substring(1),
        container : 'banners',
        done      : doneSpy
      };
      if (testCase.forceDelay) {
        bannerInitObj.url += '?forceDelay=' + testCase.forceDelay        
      }
      var banner  = webAds.queue(bannerInitObj);

      refute(banner.active);
      refute(banner.resolved);
      refute(doneSpy.called);
      
      webAds.render(testCase.name, firstInFirstOutSpy);            
      webAds.render(testCase.name, function() {
        if (testCase['expectations']){
          $.each(testCase['expectations'], function(key, val){
            assert.equals(banner[key], val, key);
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
    cb(testCases)
  }
  
  // WARNING: getting tests from resouces.js
  $.getJSON(buster.env.path + "testcases", createTests);
  
} 

collectTestCases(function(cases){ 
  buster.testCase("WebAds", cases); 
});

