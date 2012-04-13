var FINN = FINN||{};
jQuery(document).ready(function(){
  // adBlocker
  if(!FINN.webAds) return;
  
  FINN.webAds.base      = "/render/";    
  FINN.webAds.iframeUrl = "/iframe.html";
  
  //TODO URL
  FINN.webAds.getFromServer('/companionAds', function(err, data){
      FINN.webAds.renderAll('Top,Left');
      FINN.webAds.render('Left1', function(err, banner){
        console.log(a,b);
      });
  });

});