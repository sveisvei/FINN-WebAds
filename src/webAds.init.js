jQuery(document).ready(function(){
  "use strict";  
  var FINN = FINN||{};
  if(!FINN.webAds) return;  
  if(!FINN.webAds.loadOnReady){
    FINN.webAds.queue(FINN.data.banners);
    FINN.webAds.renderAll('Top,Left1');
    
    FINN.webAds.on('all-webads-resolved', function(){  
      F.webAds.sticky('banners-right'); 
    });
    
  }  
});