var FINN = FINN||{};

(function(F, $){
  "use strict";
  var data          = F.data = F.data||{};
  var defaultConfig = data.defaultConfig = data.defaultConfig||{};
  
  // exports
  F.webAds = F.webAds||{};
  var w = F.webAds;
  w.renderContext         = renderContext;
  w.queue                 = queue;
  w.render                = render;
  w.renderAll             = renderAll;
  w.renderLazy            = renderLazy;
  w.expose                = expose;
  w.refresh               = refresh;
  w.refreshAll            = refreshAll;
  w.refreshFromServer     = refreshFromServer; //TODO
  w.refreshAllFromServer  = refreshAllFromServer; //TODO
  w.resolve               = resolve;
  w.collectDataPositions  = collectDataPositions;
  w.config                = config;
  w.getFromServer         = getFromServer;
  w.cleanUp               = cleanUp;
  w.plugins               = w.plugins||{};
  w.base                  = "/";
  
  w._length               = bannerMapLength;  
  w._getBanner            = getBanner;
  
  var eventMap = {};
  
  w.on = on; //TODO
  function on(key, callback){
    $(document).on(key, callback);
  } 
  
  function triggerEvent(name, arg1){
    $(document).trigger(name.toLowerCase(), arg1);      
  }
    
  function refreshFromServer(){}// TODO
  function refreshAllFromServer(){}//TODO
  
  var jsub = $.sub();
  var globalExpose = {
    jQuery    : jsub,
    $         : jsub,
    inDapIf   : true,
    inFIF     : undefined,
    webAds    : w,
    plugins   : w.plugins,
    helios_parameters : "", //TODO: remove this
    tf_recordClickToUrl: window.tf_recordClickToUrl
  };
  
  var bannerMap = {};
  var callbacks = {};
  var configMap = {};
  
  function cleanUp(){
    bannerMap = {};
    callbacks = {};
    configMap = {};
  }

  function getBanner(name){
    return bannerMap[name];
  }

  function bannerMapLength(){
    var i = 0;
    for(var g in bannerMap){i++}
    return i;
  }
  
  function config(name, key, value){
    configMap[name]       = configMap[name]||{};
    configMap[name][key]  = value;
    
    if(bannerMap[name]){
      bannerMap[name].config(key, value);
    }
  }
  
  function getFromServer(url, callback, dontQueue){
    var firstArgIsUsed = (typeof url === 'function');
    dontQueue   = firstArgIsUsed ? callback     : dontQueue;
    callback    = firstArgIsUsed ? url          : callback;
    url         = firstArgIsUsed ? '/heliosAds' : url ||'/heliosAds';
    
    $.getJSON(url, function(data){
      if (typeof dontQueue === 'undefined') { queue(data.webAds); }
      if (callback && typeof callback === 'function') callback(null, data.webAds);
    }, function(err){
      if (callback && typeof callback === 'function') callback(err, null);
    });
  }
  
  function createConfig(obj){
	  var extending = defaultConfig[obj.name] && defaultConfig[obj.name].extends;
	  var defaults =  extending ? defaultConfig[extending] : null;
    return $.extend({}, 
      defaults, 
      defaultConfig.all,
      defaultConfig [obj.name], 
      configMap     [obj.name],
      obj);
  }
      
  function addToMap(){
    var banner = new F.Banner(createConfig(this), globalExpose);
    return (bannerMap[this.name] = banner);
  }
      
  function insertCallback(name, callback){
    if (typeof callback === 'function'){
      if (callbacks[name] && $.isArray(callbacks[name])){
        callbacks[name].push(callback);
      } else {
        callbacks[name] = [callback];
      }
    }
  }    
      
  function render(name, callback){
    var banner = bannerMap[name];
    if (!banner){
      callback(new Error('Banner '+name+' not queued'), null);
    } else if (banner.active){
      banner.log('banner is active');
      if (callback && typeof callback === 'function') {
        if (banner.resolved) {
          banner.log('is resolved, calling callback direct');
          callback(null, banner);          
        } else {
          banner.log('deferring callback')
          insertCallback(name, callback)          
        }
      }
      return banner;
    } else {
      banner.insert();
      insertCallback(name, callback)
      return banner;
    }
  }
  
  function collectDataPositions(selector){
    selector = selector||"body";
    $(selector).find("div.webads[data-webad-position]").each(function(){
      var $this = $(this);
      var position = $this.data('webad-position');
      config(position, 'container', $this);
    });
  }
  
  function resolve(name){
    if (callbacks[name] && callbacks[name].length > 0){
      $.each(callbacks[name], function(){
        if (typeof this === 'function') this(null, bannerMap[name]);
      });
      callbacks[name] = null;
    }
    triggerEvent('webad-resolved-'+name, bannerMap[name]);
    triggerEvent('webad-resolved', bannerMap[name]);    
    resolveAll();
  }
  
  function resolveAll(){
    var allResolved = true;
    var banner;
    for(var key in bannerMap){
      banner = bannerMap[key];      
      if (banner.resolved !== true && banner.incomplete !== true){
        allResolved = false;
        break;
      }
    }
    if (allResolved){
      if (callbacks['all'] && callbacks['all'].length > 0){
        $.each(callbacks['all'], function(){
          if (typeof this === 'function') {
            this(null, bannerMap);
          }
        });
      }
      triggerEvent('all-webads-resolved', bannerMap);
      return true;
    } else {
      return false;
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
  
  function renderAll(commaList, callback){ 
    var swapArgs = commaList && typeof commaList === 'function';
    callback          = swapArgs ? commaList : callback;    
    commaList         = swapArgs ? "Top" : (commaList||"Top");
    
    var priorityList  = commaList.split(',');
    function loop(err){
      if (priorityList.length <= 0){
        renderUnactive();
      } else {
        render(priorityList.shift(), loop);
      }
    }
    if (callback && typeof callback === 'function') insertCallback('all', callback);
    loop();
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
  
  function refresh(name, cb){
    bannerMap[name].refresh();
    // .refresh command resets banner.resolved
    if (cb && typeof cb === 'function'){    
      insertCallback(name, cb);      
    }   
  }
  
  function refreshAll(commaList, callback){
    commaList         = commaList && typeof commaList === 'function' ? "Top" : (commaList||"Top");
    callback          = commaList && typeof commaList === 'function' ? commaList : callback;
    var priorityList  = commaList.split(',');
    
    var alreadyRendered = [];
    function shouldRefresh(key){
      var res = true;
      $.each(alreadyRendered, function(){
        if (this === key){ return (res = false); }
      });
      return res;
    }
    
    function loop(){
      if (priorityList.length <= 0){
        for(var key in bannerMap){
          if (shouldRefresh(key)){
            refresh(key);
          }
        }
      } else {
        var name = priorityList.shift();
        alreadyRendered.push(name)
        refresh(name, loop);
      }
    }
    if (callback && typeof callback === 'function') insertCallback('all', callback);
    loop();
  }
  
  function remove(name){
    return bannerMap[name] && bannerMap[name].remove();
  }
  
  function removeAll(){
    for(var key in bannerMap){
      bannerMap[key] && bannerMap[key].remove();         
    }
  }
  
  function renderContext(selector){
    collectDataPositions(selector);
    
    $(selector).find(".webads").filter(function(){
      return !$(this).hasClass('webads-processed');
    }).each(function(){
      var $this = $(this);
      $this.addClass('webads-processed');
      var position = $this.data('webad-position');
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
        render(key);
      }
    }
  }
  
  function expose(name){return bannerMap[name].expose();}
  
})(FINN, jQuery);