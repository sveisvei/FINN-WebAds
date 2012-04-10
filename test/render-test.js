buster.testRunner.timeout = 1000;

var cases = [{name: "Test01", url: "/Test01/index.js", "expectations": {width: 411, height: 111, retries: 5}}];

var testCases = {};
testCases["setUp"] = function() {
  $("body").append('<div id="banners"></div>');
  FINN.webAds.iframeUrl = buster.env.path + "finn/webads";
};
testCases["tearDown"] = function(){};

testCases["Cases/"] = {};
$.each(cases, function(){
  var testCase = this;
  testCases["Cases/"][testCase.name] = function(done){

    var spy = sinon.spy();
    var banner = FINN.webAds.queue({
      name: testCase.name,
      url: buster.env.path + 'Cases' + testCase.url,
      container: 'banners',
      done: spy
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
      }, 0);
    });

    FINN.webAds.render(testCase.name, function() {
      refute(banner.resolved);
    });

    assert(banner.active);
  }
});



buster.testCase("WebAds", testCases);
