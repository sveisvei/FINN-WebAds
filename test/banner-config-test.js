var DEFAULT_TIMEOUT2 = 450;
buster.testRunner.timeout = DEFAULT_TIMEOUT2;

var webAds = FINN.webAds;

function collectTestCases(cb){
  var testCases = {};
  
  testCases["config"]   = {};  
  
  testCases["config"]["setUp"] = function() {
    // css injection here might not work because of timing issues.
    $("head").append('<link rel="stylesheet" id="webads-stylesheet" type="text/css" media="screen" href="'+buster.env.contextPath+'/src/css/webAds.css" />');
    $("body").append('<div id="banners" data-webads="true"><div id="banners-right" data-webads="true"></div></div><div id="banners-middle"></div>');
    webAds.base      = buster.env.contextPath + "/Cases/config/";    
    webAds.iframeUrl = buster.env.contextPath + "/iframe.html";
  };
  
  testCases["config"]["tearDown"] = function(){
    webAds.cleanUp();
    $("#banners,#webads-stylesheet").remove();
    $("body").removeAttr('class').removeAttr('style').attr('class', '');
  };
    
  function createTest(){
    var testCase = this;
    testCases["config"][testCase.name] = function(done){
      buster.testRunner.timeout = testCase.timeout||DEFAULT_TIMEOUT2; 
      if (testCase.setBodyClass) {
        $("body").addClass(testCase.setBodyClass);
      }
      var preparedWebAdsData = $.map(testCase.tests, function(test){
        test.url = buster.env.contextPath + test.url;
        if (test.spyClick){
          test.clickSpy = sinon.spy();
          test.done = function(banner){
            banner.$webAd.on('click', 'a', function(){
              test.clickSpy();
              return false;
            });
          };
        }
        return test;
      });
      
      
      function generalExpectations(){
        if (testCase.expectations){
          
          if (typeof testCase.expectations.bannersHeight !== 'undefined'){
            assert.equals($("#banners").height(), testCase.expectations.bannersHeight);
          }
          
          //bodyClass
          if (testCase.expectations.bodyClass){
            $.each(testCase.expectations.bodyClass, function(i){
              assert($("body").hasClass(this), 'body should have class: '+ this);
            });              
          }
          //notBodyClass
          if (testCase.expectations.notBodyClass){
            $.each(testCase.expectations.notBodyClass, function(i){
              refute($("body").hasClass(this), 'body should not have class: '+ this);
            });              
          }

        }
      }
      
      
      
      
      function checkBannerExpectations(){
        var len = testCase.tests.length;
        
        function doDone(){
          len = len - 1;
          if(len <= 0){
            done();
          }
        }

        $.each(testCase.tests, function(i){
          var test = this;
          
          webAds.render(test.name, function(err, banner){
            refute(err);
            
            if (test['expectations']){
              $.each(test['expectations'], function(key, val){
                assert.equals(banner[key], val, key + ' on ' + test.name);
              });
            }
            if (typeof test.isHidden !== 'undefined' && test.isHidden === true){
              assert(banner.iframe.$wrapper.is(':hidden'), 'wrapper div for ' + test.name+' should be :hidden');
            }
            

            
            if (typeof test.setWidth !== 'undefined'){
              //console.log(banner)
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
            
            if (test.spyClick){
              banner.$webAd.find('a').trigger('click');
              setTimeout(function(){
                assert(banner.params.clickSpy.called);                
                doDone();                
              }, 0);
            } else {
              doDone();              
            }            
          });
        });
        
      }
      
      webAds.queue(preparedWebAdsData);
      
      webAds.renderAll(testCase.renderAll||'Top,Left1', function(err, banners){
        assert.equals(getObjectLength(banners), testCase.tests.length);
        
        generalExpectations();

        checkBannerExpectations();
      
      });
    }
  }
  
  function getObjectLength(obj){
    var i = 0;
    for(var k in obj){i++}
    return i;
  }
  
  function createTests(d){
    $.each(d.testcases, createTest);
    cb(testCases)
  }
  
  // WARNING: getting tests from resouces.js
  var resourceURL = buster.env.contextPath + "/testcases-config";
  $.getJSON(resourceURL, createTests);
  
} 
collectTestCases(function(cases){ 
  buster.testCase("WebAds", cases); 
});

