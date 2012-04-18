buster.testCase("Manager", {
  "setUp": function(){
    
  },
  "tearDown" : function(){
    FINN.webAds.cleanUp();
  },
  "should start with zero banners": function(){
    assert.equals(FINN.webAds._length(), 0);
    FINN.webAds.queue({name:"Test01",url: "asdtest"});
    assert.equals(FINN.webAds._length(), 1);
  },
 "should lazy load banner": function(){
   
  },
 "renderContext should reload banners in context and ignore banner.active": function(){

  }
  
}); 
