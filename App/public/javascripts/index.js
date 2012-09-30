var FINN = FINN||{};
jQuery(document).ready(function(){

  // adBlocker
  if(!FINN.webAds) return;
  
  FINN.webAds.base      = "/render/";   
  FINN.webAds.iframeUrl = "/iframe.html";
     
  FINN.webAds.getFromServer(function(err, data){
      FINN.webAds.renderAll('Top,Left1');
  });
  

  FINN.webAds.on('all-webads-resolved', function(e, banners){
    //console.warn('Resolved all:', e, banners);
  });
  
  FINN.webAds.on('webad-resolved', function(e, banners){
    //console.warn('Resolved *:', e, banners);
  });
  
  
  FINN.webAds.on('webad-resolved-top', function(e, banner){
    //console.warn('Resolved top', e, banner);
  });
  

  
  $("#tabs").on('click', 'a', function(){
    $(this).closest('ul').find('li').removeClass('active');
    $(this).parent('li').addClass('active');
    $("div.tabs-content").html(
      '<h1>'+$(this).text()+'</h1>' +
      '<p>Tab banner er rendret på nytt:</p>' +
      '<div class="mal"  data-webads="true" id="banner-tab"></div>'
    );
    FINN.webAds.renderContext('div.tabs-content', true);
    return false;
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