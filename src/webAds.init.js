jQuery(document).ready(function(){
  "use scrict";  
  var FINN = FINN||{};
  if(!FINN.webAds) return;  
  if(!FINN.webAds.loadOnReady){
    FINN.webAds.queue(FINN.data.banners);
    FINN.webAds.renderAll('Top,Left1');
  }  
});