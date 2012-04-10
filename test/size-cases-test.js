buster.testRunner.timeout = 250;

function collectTestCases(callback){
  var testCases = {};
  
  testCases["setUp"] = function() {
    $("body").append('<div id="banners"></div>');
    FINN.webAds.base      = buster.env.path + "Cases/";    
    FINN.webAds.iframeUrl = buster.env.path + "finn/webads";
  };
  testCases["tearDown"] = function(){};
  testCases["should render"]   = {};
  
  function ready(cases){
    $.each(cases, function(){
      var testCase = this;
      testCases["should render"][testCase.name] = function(done){
        buster.testRunner.timeout = testCase.timeout||250;       

        var spy = sinon.spy();
        var banner = FINN.webAds.queue({
          name      : testCase.name,
          url       : buster.env.path + testCase.url.substring(1),
          container : 'banners',
          done      : spy
        });

        refute(banner.active);
        refute(banner.resolved);
        refute(spy.called);

        FINN.webAds.render(testCase.name, function() {
          $.each(testCase.expectations, function(k, v){
            assert.equals(banner[k], v, k)
          });
          assert(banner.active);

          setTimeout(function() {
            assert(banner.resolved);
            assert(spy.called);
            done();
          }, 100);
        });

        FINN.webAds.render(testCase.name, function() {
          refute(banner.resolved);
        });

        assert(banner.active);
      }
    });
    callback(testCases)
  }
    
  $.getJSON(buster.env.path + "testcases", function(data){
    ready(data.testcases);
  });
  
} 

collectTestCases(function(cases){ buster.testCase("WebAds", cases); })

