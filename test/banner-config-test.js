var DEFAULT_TIMEOUT2 = 450;
buster.testRunner.timeout = DEFAULT_TIMEOUT2;

var webAds = FINN.webAds;



function collectTestCases(cb){
  var testCases = {};
  
  testCases["config"]   = {};  
  
  testCases["config"]["setUp"] = function() {
    // css injection here might not work because of timing issues.
    $("head").append('<link rel="stylesheet" type="text/css" media="screen" href="'+buster.env.path+'src/webAds.css" />');
    $("body").append('<div id="banners"></div>');
    webAds.base      = buster.env.path + "Cases/config/";    
    webAds.iframeUrl = buster.env.path + "iframe.html";
  };
  
  testCases["config"]["tearDown"] = function(){
    webAds.cleanUp();
    $("#banners").remove();
    $("body").removeAttr('class').attr('class', '');
  };
    
  function createTest(){
    var testCase = this;
    testCases["config"][testCase.name] = function(done){
      buster.testRunner.timeout = testCase.timeout||DEFAULT_TIMEOUT2; 
      
      var preparedWebAdsData = $.map(testCase.tests, function(test){
        test.url = buster.env.path + test.url.substring(1);
        return test;
      });
      
      
      function generalExpectations(){
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
              refute($("body").hasClass(this), 'body should not have class '+ this);
            });              
          }
        }
      }
      
      function checkBannerExpectations(){
        var len = testCase.tests.length;
        function doDone(){
          len--
          if(len <= 0){
            done();
          }
        }
        $.each(testCase.tests, function(){
          var test = this;
          webAds.render(test.name, function(err, banner){
            refute(err)
            
            if (test['expectations']){
              $.each(test['expectations'], function(key, val){
                assert.equals(banner[key], val, key);
              });
            }
            if (typeof test.isHidden !== 'undefined' && test.isHidden === true){
              assert(banner.iframe.$wrapper.is(':hidden'), 'wrapper div for ' + test.name+' should be hidden');
            }
            
            if (typeof test.setWidth !== 'undefined'){
              assert.equals(banner.width, test.setWidth, 'width via test.setWidth on '+test.name);              
            }
            if (typeof test.setHeight !== 'undefined'){
              assert.equals(banner.height, test.setHeight, 'width via test.setHeight on'+test.name);              
            }
            assert(banner.active);
            assert(banner.resolved);
            if (!(test.expectations && test.expectations.failed)){
              refute(banner.failed, testCase.name + " " + banner.name + ' failed rendring.');              
            }
            doDone();
          });
        });
        
      }

      webAds.queue(preparedWebAdsData);
      
      webAds.renderAll('Top,Left1', function(err, banners){
        assert.equals(Object.keys(banners).length, testCase.tests.length);
        generalExpectations();
        checkBannerExpectations()
      });
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

