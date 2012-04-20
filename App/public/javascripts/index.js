var FINN = FINN||{};
jQuery(document).ready(function(){

  // adBlocker
  if(!FINN.webAds) return;
  
  FINN.webAds.base      = "/render/";   
  FINN.webAds.iframeUrl = "/iframe.html";
     
  FINN.webAds.getFromServer(function(err, data){
      FINN.webAds.renderAll('Top,Left1');
  });
  
  
  // TODO, not working??
  FINN.webAds.on('all-webads-resolved', function(e, banners){
    console.warn('Resolved all:', e, banners);
  });
  
  FINN.webAds.on('webad-resolved', function(e, banners){
    console.warn('Resolved *:', e, banners);
  });
  
  
  FINN.webAds.on('webad-resolved-top', function(e, banner){
    console.warn('Resolved top', e, banner);
  });
  

  
  $("ul.tabs").on('click', 'li', function(){
    $("div.tabs").html('<h1>'+$(this).text()+'</h1><p>Oh lalala</p><div data-webads="true" id="banner-tab"></div>');
    FINN.webAds.renderContext('div.tabs', true);
  });
  
  $("#refreshAll").on('click', function(){
    FINN.webAds.refreshAll();
    return false;
  });
  
  $("#lazyLoad").on('click', function(){
    FINN.webAds.queue([{
        name: "lazy",
        url: "/render/Test01/index.js"
    }]);
    
    FINN.webAds.renderLazy("body");
    return false;
  })
  
});