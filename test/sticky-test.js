


buster.testCase("Sticky", {
  "setUp": function(done){
    
    FINN.webAds.base      = buster.env.contextPath + "/";    
    FINN.webAds.iframeUrl = buster.env.contextPath + "/iframe.html";  
      
    $("head").append('<link id="rel="stylesheet" type="text/css" media="screen" href="'+buster.env.contextPath+'/src/css/webAds.css" />');
    $("body").append('\
    <div id="banners" data-webads="true">\
      <div id="banners-right" data-webads="true"></div>\
    </div>\
    <div class="page container wrapper" style="height: 30000px;"></div>');
    var self = this;
    
    $.getJSON(buster.env.contextPath + '/Cases/config/sticky_rightwrapper/heliosAds',function(data){
      var fixed = $.map(data.webAds, function (webAd){
        webAd.url = buster.env.contextPath + '/Cases' + webAd.url;
        return webAd;
      });
      
      FINN.webAds.queue(fixed);
      done();
    });
  },
  "tearDown" : function(){
    $("#banners").remove();
    FINN.webAds.cleanUp();
    $(window).scrollTop(0);    
  },
  "is rendering when 3 banners": function(done){
    FINN.webAds._getBanner('Right1').params.setHeight = 50;
    FINN.webAds._getBanner('Right2').params.setHeight = 50;
    FINN.webAds._getBanner('Right3').params.setHeight = 50;
    FINN.webAds.renderAll('Top,Right1,Right2,Right3', function(){
      
      assert.equals($('.webad-right1').css('position'), 'static', 'right1');
      assert.equals($('.webad-right2').css('position'), 'static', 'right2');
      assert.equals($('.webad-right3').css('position'), 'static', 'right3');
      
      FINN.webAds.sticky('banners-right');
      
      assert.equals($(window).scrollTop(), 0);
      $(window).scrollTop(2000);
      
      setTimeout(function(){
        assert.equals($(window).scrollTop(), 2000);        
        assert.equals($('.webad-right1').position().top, 2010, 'right1');        
        assert.equals($('.webad-right1').css('position'), 'fixed', 'right1');
        assert.equals($('.webad-right2').css('position'), 'fixed', 'right2');
        assert.equals($('.webad-right3').css('position'), 'fixed', 'right3');        
        
        done();
      }, 200);
    });
  },
  
  "is turning sticky on when scroll is down while loading": function(done){
    var windowHeight = $(window).height();
    FINN.webAds._getBanner('Right1').params.setHeight = 250;
    FINN.webAds._getBanner('Right2').params.setHeight = 350;
    FINN.webAds._getBanner('Right3').params.setHeight = windowHeight - 40;
    FINN.webAds.renderAll('Top,Right1,Right2,Right3', function(){
      
      assert.equals($('.webad-right1').css('position'), 'static', 'right1');
      assert.equals($('.webad-right2').css('position'), 'static', 'right2');
      assert.equals($('.webad-right3').css('position'), 'static', 'right3');
      
      FINN.webAds.sticky('banners-right');
      
      assert.equals($(window).scrollTop(), 0);
      $(window).scrollTop(2000);
      
      setTimeout(function(){
        assert.equals($(window).scrollTop(), 2000);        
        assert.equals($('.webad-right3').position().top, 2010, 'right3');        
        assert.equals($('.webad-right1').css('position'), 'static', 'right1');
        assert.equals($('.webad-right2').css('position'), 'static', 'right2');
        assert.equals($('.webad-right3').css('position'), 'fixed', 'right3');        
        
        done();
      }, 100);
    });
  } 
  
}); 