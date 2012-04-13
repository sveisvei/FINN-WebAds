var FINN = FINN||{};
jQuery(document).ready(function(){

  // adBlocker
  if(!FINN.webAds) return;
  
  FINN.webAds.base      = "/render/";    
  FINN.webAds.collectDataPositions()
  
  FINN.webAds.getFromServer(function(err, data){
      console.log('GOT FROM SERVER', err, data);
      FINN.webAds.renderAll('Top,Left1');
  });
  
  FINN.webAds.queue([{
      name: "Left1",
      url: "/render/Test01/index.js"
  }]);
  
  
  // TODO, not working??
  $(document).on('bannerReady', function(e, banner){
    console.warn('EVENT ---> BANNER READY:', banner.name);
  });
  
  
  $(document).on('bannerReady.Top', function(e, banner){
    console.warn('EVENT ---> bannerReady.Top', e, banner);
  });
  

  
  $("ul.tabs").on('click', 'li', function(){
    $("div.tabs").html('<h1>'+$(this).text()+'</h1><p>Oh lalala</p><div class="webads" id="banner-tab"></div>');
    FINN.webAds.renderContext('div.tabs');
  });
  
  $("#refreshAll").on('click', function(){
    FINN.webAds.refreshAll();
    return false;
  })
  
});