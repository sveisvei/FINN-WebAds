buster.testRunner.timeout = 1000;

buster.testCase("WebAds", {
    "setUp": function(){
      $("body").append('<div id="banners"></div>');
      FINN.webAds.iframeUrl = buster.env.path + "finn/webads";
    },
    
    "should render async banner after 1 retry": function (done) {
      
      var banner = FINN.webAds.queue({
         name       : 'tester',
         url        : buster.env.path + 'Cases/Test12/index.js',
         container  : 'banners',
         done       : function(){
         }
       });   
       
       refute(banner.active)
       refute(banner.resolved)
       
      FINN.webAds.render('tester', function(){

         assert(banner.active);
         assert.equals(banner.height, 300)
         assert.equals(banner.width, 200)
         assert.equals(banner.retries, 4)
         
         setTimeout(function(){
            assert(banner.resolved)         

            done()
         }, 0);
       });
       
       FINN.webAds.render('tester', function(){
         refute(banner.resolved)
       });
       
       assert(banner.active)

    }
});