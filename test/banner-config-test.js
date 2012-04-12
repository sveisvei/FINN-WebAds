buster.testCase("Configuration combination", {
  "setUp": function(){
    webAds.base      = buster.env.path + "Cases/";    
    webAds.iframeUrl = buster.env.path + "finn/webads";
  },
  "tearDown" : function(){
    
  }
}); 
