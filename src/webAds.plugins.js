var FINN = FINN||{};

(function(F, $){
  "use strict";
  FINN.webAds = FINN.webAds||{};
  var plugins = FINN.webAds.plugins = FINN.webAds.plugins||{};
  
  plugins.register = function(name, value){
    plugins[name] = value;
  };
  plugins.overlay = overlay;
  plugins.popup   = popup;
  plugins.dialog  = dialog;
  plugins.search  = search;
  plugins.context = context;
  plugins.getAdContent = getAdContent;
  
  function overlay(banner){
    console.log('PLUGIN -> Overlay ', banner.name);
    //alert("huzzlaas");
  }
  
  function popup(){
    
  }
  
  function dialog(){
    
  }
  
  /* Search FINN */
  function search(query, callback){
    
  }
  
  /* Get current context - finnobj? */
  function context(){
      
  }
  
  function getAdContent(areaid, callback){
    var url     = "/finn/realestate/homes/rotationdemo.json";    
    var res     = {};
    var params  = {"areaId":areaid};
    // SYNC
    $.ajax(url,{data:params, async:false, "success": function(data){
        res = data;
    }});
    
    return res;
  }
  
  
})(FINN, jQuery);