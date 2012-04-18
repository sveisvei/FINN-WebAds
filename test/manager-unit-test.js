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
  }
  
}); 
