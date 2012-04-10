var FINN = FINN||{};

(function(F, $){
  "use strict";
  var data          = F.data = F.data||{};
  var defaultConfig = data.defaultConfig = data.defaultConfig||{};
  
  // exports
  F.webAds = F.webAds||{};
  var w = F.webAds;
  w.renderContext  = renderContext;
  w.queue          = queue;
  w.render         = render;
  w.renderAll      = renderAll;
  w.renderLazy     = renderLazy;
  w.expose         = expose;
  w.refresh        = refresh;
  w.refreshAll     = refreshAll;
  w.resolve        = resolve;
  w.collectDataPositions = collectDataPositions;
  w.config         = config;
  w.plugins        = w.plugins||{};
  
  var jsub = $.sub();
  var globalExpose = {
    jQuery    : jsub,
    $         : jsub,
    inDapIf   : true,
    inFIF     : undefined,
    webAds    : w,
    plugins   : w.plugins
  };
  
  var bannerMap = {};
  var callbacks = {};
  var configMap = {};
  
  function config(name, key, value){
    configMap[name]       = configMap[name]||{};
    configMap[name][key]  = value;
    
    if(bannerMap[name]){
      bannerMap[name].config(key, value);
    }
  }
      
  function addToMap(){
    var objWithDefaults = $.extend(
      {}, 
      defaultConfig.all, 
      defaultConfig[this.name], 
      configMap[this.name],
      this);
    var banner = new F.Banner(objWithDefaults, globalExpose);
    return (bannerMap[this.name] = banner);
  }
      
  function render(name, callback){
    console.log('RENDER', name);
    var banner = bannerMap[name];
    if (!banner || banner.active){
      console.log('BANNER active =>', banner && banner.name, ':', banner && banner.active);
      if (callback && typeof callback === 'function') callback(banner);
      return banner;
    } else {
      banner.insert();
      if (typeof callback === 'function'){
        if (callbacks[name] && $.isArray(callbacks[name])){
          callbacks[name].push(callback);
        } else {
          callbacks[name] = [callback];
        }
      }
      return banner;
    }
  }
  
  function collectDataPositions(selector){
    selector = selector||"body";
    $(selector).find("div.webads[data-banner-position]").each(function(){
      var $this = $(this);
      var position = $this.data('banner-position');
      config(position, 'container', $this);
    });
  }
  
  function resolve(name){
    if (callbacks[name] && callbacks[name].length > 0){
      $.each(callbacks[name], function(){
        if (typeof this === 'function') this(bannerMap[name]);
      });
      callbacks[name] = null;
      $(document).trigger('bannerReady.'+name, bannerMap[name]);
    }
  }

  function renderUnactive(){
    var banner;
    for(var key in bannerMap){
      banner = bannerMap[key];      
      if (banner.active === false){
        banner.insert();
      }
    }
  }
  
  function renderAll(commaList){ 
    commaList         = commaList || "Top,Right1";
    var priorityList  = commaList.split(',');
    var next          = priorityList.shift();
    
    function loop(){
      if (priorityList.length <= 0){
        renderUnactive();
      } else {
        render(priorityList.shift(), loop);
      }
    }
    
    render(next, loop);    
  }
  
  function renderLazy(parent){
    $(parent).find('.webads-lazy').removeClass('webads-lazy').addClass('webads');
    renderContext(parent);
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
    for(var key in bannerMap){
      bannerMap[name] && bannerMap[key].remove();         
    }
  }
  
  function renderContext(selector){
    console.log('renderContext', selector);
    collectDataPositions(selector);
    
    $(selector).find(".webads").filter(function(){
      return !$(this).hasClass('webads-processed');
    }).each(function(){
      var $this = $(this);
      $this.addClass('webads-processed');
      var position = $this.data('banner-position');
      var id       = $this.attr('id');
      if (position){
        render(position);
      } else if (id) {
        renderAdsWithContainer(id);
      }
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