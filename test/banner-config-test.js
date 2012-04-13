var DEFAULT_TIMEOUT = 450;
buster.testRunner.timeout = DEFAULT_TIMEOUT;

var webAds = FINN.webAds;



function collectTestCases(cb){
  var testCases = {};
  
  testCases["setUp"] = function() {
    $("body").append('<div id="banners"></div>');
    webAds.base      = buster.env.path + "Cases/config/";    
    webAds.iframeUrl = buster.env.path + "finn/webads";
  };
  
  testCases["tearDown"] = function(){
    webAds.cleanUp();
    $("#banners").remove();
  };
  
  testCases["config"]   = {};
  
  function createTest(){
    var testCase = this;
    testCases["config"][testCase.name] = function(done){
      buster.testRunner.timeout = testCase.timeout||DEFAULT_TIMEOUT; 
      
      var preparedWebAdsData = $.map(testCase.tests, function(test){
        test.url = buster.env.path + test.url.substring(1);
        return test;
      });
 

      webAds.queue(preparedWebAdsData);
      
      webAds.render('Top', function(topbanner){
        webAds.render('Left1', function(leftbanner){
          webAds.renderAll();
          assert(true);
          if (testCase.expectations){
            //bodyClass
            if (testCase.expectations.bodyClass){
              $.each(testCase.expectations.bodyClass, function(i){
                assert($("body").hasClass(this), 'body has class '+ this);
              });              
            }
            //notBodyClass
            if (testCase.expectations.notBodyClass){
              $.each(testCase.expectations.notBodyClass, function(i){
                assert(!$("body").hasClass(this), 'body should not have class '+ this);
              });              
            }
          }
          done();
        })
      });
      
      /*buster.testRunner.timeout = testCase.timeout||DEFAULT_TIMEOUT;       

      var doneSpy = sinon.spy();
      
      var bannerInitObj = {
        name      : testCase.name,
        url       : buster.env.path + testCase.url.substring(1),
        container : 'banners',
        done      : doneSpy
      };

      var banner  = webAds.queue(bannerInitObj);

      refute(banner.active);
      refute(banner.resolved);
      refute(doneSpy.called);
      
      webAds.render(testCase.name, function() {
        assert(banner.active);
        assert(doneSpy.calledOnce);
        assert(firstInFirstOutSpy.calledOnce);

        setTimeout(function() {
          assert(banner.resolved);
          done();
        }, 100);
      });
      


      assert(banner.active);*/
    }
  }
  
  function createTests(d){
    $.each(d.testcases, createTest);
    cb(testCases)
  }
  
  // WARNING: getting tests from resouces.js
  $.getJSON(buster.env.path + "testcases-config", createTests);
  
} 

collectTestCases(function(cases){ 
  buster.testCase("WebAds", cases); 
});

