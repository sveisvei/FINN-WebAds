var FINN = FINN||{};

(function(F, $){
  var data          = F.data = F.data||{};
  var defaultConfig = data.defaultConfig = data.defaultConfig||{};
  
  // exports
  F.webAds = {
    renderContext : renderContext,
    queue         : queue,
    render        : render,
    renderAll     : renderAll,
    expose        : expose,
    refreshAll    : refreshAll,
    resolve       : resolve
  };
  
  var jsub = $.sub();
  var globalExpose = {
    jQuery    : jsub,
    $         : jsub,
    inDapIf   : true,
    inFIF     : undefined,
    swfobject : window.swfobject,
    webAds    : F.webAds
  };
  
  var bannerMap = {};
  var callbacks = {};
    
  
  function addToMap(){
    var defaults  = defaultConfig[this.name]||defaultConfig.all;
    var obj       = $.extend({}, defaults, this);
    return (bannerMap[this.name] = new F.Banner(obj, globalExpose));
  }
      
  function render(name, callback){
    bannerMap[name].render();
    bannerMap[name].insert();
    if (typeof callback === 'function'){
      if (callbacks[name] && $.isArray(callbacks[name])){
        callbacks[name].push(callback);
      } else {
        callbacks[name] = [callback];
      }
    }
  }

  
  function resolve(name){
    if (callbacks[name] && callbacks[name].length > 0){
      $.each(callbacks[name], function(){
        if (typeof this === 'function') this();
      });
      callbacks[name] = null;
      $(document).trigger(name+'.ready', bannerMap[name]);
    }
  }

  function renderAll(){
    //loop keys, render all that isnt rendered.
    var banner;
    for(var key in bannerMap){
      banner = bannerMap[key];      
      if (banner.active === false){
        banner.render().insert();
      }      
    }
  }
  
  function queue(obj){
    if ($.isArray(obj)){
      $.each(obj, addToMap);
    } else {
      return addToMap.call(obj);      
    }
  }
  
  function refresh(name){
    return bannerMap[name] && bannerMap[name].refresh();    
  }
  
  function refreshAll(){
    var banner;
    for(var key in bannerMap){
      bannerMap[key].refresh();         
    }
  }
  
  function remove(name){
    return bannerMap[name] && bannerMap[name].remove();
  }
  
  function removeAll(){
    var banner;
    for(var key in bannerMap){
      bannerMap[key].remove();         
    }
  }
  
  function renderContext(selector){
    $(selector).find(".webads").filter(function(){
      return !$(this).hasClass('webads-processed');
    }).each(function(){
      var $this = $(this);
      $this.addClass('webads-processed');
      renderAdsWithContainer($this.attr('id'));
    });
  }
  
  function renderAdsWithContainer(container){
    for(var key in bannerMap){
      if (container === bannerMap[key].container){
        bannerMap[key].insert();
      }
    }
  }
  
  function expose(name){return bannerMap[name].expose();}
  

  
})(FINN, jQuery);

/*


var webAds = webAds.add([{name: "left", url: "", insert: "banner"}]);

webAds.autoRender = false;

webAds.config('Faktabox', {insert: "bannerTop"})
webAds.render("Faktabox");

webAds.on('done.Top', function(){
  webAds.renderAll();
});


webAds.

*/