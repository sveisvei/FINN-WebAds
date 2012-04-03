jQuery(document).ready(function(){
  
  FINN.webAds.queue([{
      name: "Top",
      url: "/Test1/test_ad1.js"
    },   
    {
      name: "Position2",
      url: "/Test2/test_ad2.js"
    },
    {
      name: "Position3",
      url: "/Test3/test_ad3.js"
    },
    {
      name: "Position0",
      url: "/Test1/test_ad1.js"
    },
    {
      name: "Position1",
      url: "/Test1/test_ad1.js"
    },
    {
      name: "Position4",
      url: "/Test4/test_ad4.js"
    },
    {
      name: "Position5",
      url: "/Test5/test_ad5.js"
    },
    {
      name: "Position6",
      url: "/Test6/test_ad6.js"
    },
    {
      name: "Position7",
      url: "/Test7/test_ad7.js"
    }
      
    ]);
  
  
  FINN.webAds.render('Top', function(){
    FINN.webAds.renderAll();    
  });
  
  $(document).on('Top.ready', function(e, banner){
    console.log('huzzla', e, banner);
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