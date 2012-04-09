buster.testRunner.timeout = 1000

buster.testCase("WebAds", {
    "setUp": function(){
      $("body").append('<div id="banners"></div>');
      FINN.webAds.iframeUrl = buster.env.path + "finn/webads";
    },
    "should render async banner after 1 retry": function (done) {
      
      
      
       FINN.webAds.queue({
         name: 'test',
         url: buster.env.path + 'Cases/Test12/index.js',
         container: 'banners'
       });       
       
       var topBanner = FINN.webAds.render('test', function(){
         // is this onload?
         assert(topBanner.active);
         assert.equals(topBanner.height, undefined)
         assert.equals(topBanner.width, undefined)
         assert.equals(topBanner.retries, 4)
         // banner actually there? this fails....
         // content injected?
       });
       /*
       TODO, need rewrite of callbacks from render. Need to be sure all internals are done before calling done();
       resolve calls callbacks now, but isnt a good idea.
       
       topBanner.on('complete', function(){
         
         
         done();
       });*/
       
       assert(topBanner.active)
       //mhm, why do we not get a callback from the iframe?
       
       //done()
       
    }
});