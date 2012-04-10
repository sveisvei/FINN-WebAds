jQuery(document).ready(function(){
  "use scrict";  
  if(!FINN.webAds.loadOnReady){
    FINN.webAds.queue(FINN.data.banners);
    FINN.webAds.renderAll('Top,Left1');
  }  
});