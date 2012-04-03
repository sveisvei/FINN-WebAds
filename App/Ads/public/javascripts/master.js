jQuery(document).ready(function(){
  
  FINN.webAds.collectDataPositions()
  
  FINN.webAds.queue([
    {
      name: "Position0",
      url: "/Test01/index.js"
    },
    {
      name: "Top",
      url: "/Test01/index.js"
    },   
    {
      name: "Position1",
      url: "/Test01/index.js"
    },
    {
      name: "Position2",
      url: "/Test02/index.js"
    },
    {
      name: "Position3",
      url: "/Test03/index.js"
    },

    {
      name: "Position4",
      url: "/Test04/index.js"
    },
    {
      name: "Position5",
      url: "/Test05/index.js"
    },
    {
      name: "Position6",
      url: "/Test06/index.js"
    },
    {
      name: "Position7",
      url: "/Test07/index.js"
    }
    ,
    {
      name: "Position8",
      url: "/Test08_Canvas1/index.js"
    }
    ,
    {
      name: "Position9",
      url: "/Test09_Iframe/index.js"
    },
    {
      name: "Position10",
      url: "/Test10_Iframe2/index.js"
    },
    {
      name: "Position11",
      url: "/Test11_Image/index.js"
    }      
    ]);
  
  
  FINN.webAds.render('Top', function(){
    FINN.webAds.renderAll();    
  });
  
  
  // TODO, not working??
  $(document).on('bannerReady', function(e, banner){
    console.log('EVENT ---> BANNER READY:', banner.name);
  });
  
  
  $(document).on('bannerReady.Top', function(e, banner){
    console.log('EVENT ---> bannerReady.Top', e, banner);
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