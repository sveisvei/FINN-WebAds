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
  w.updateUrls            = updateUrls;
  //w.refreshFromServer     = refreshFromServer;    //TODO
  //w.refreshAllFromServer  = refreshAllFromServer; //TODO
  //w.renderWhenVisible     = renderWhenVisible     //TODO
  w.resolve               = resolve;
  w.resolveOnload         = resolveOnload;
  w.collectDataPositions  = collectDataPositions;
  w.config                = config;
  w.getFromServer         = getFromServer;
  w.cleanUp               = cleanUp;
  w.plugins               = w.plugins||{};
  w.base                  = "/";
  
  w._length               = bannerMapLength;  
  w._getBanner            = getBanner;
  
  var eventMap = {};
  
  w.on = on;
  w.one = one;
  function on(key, callback){
    return $(document).on(key, callback);
  } 
  
  function one(key, callback){
    return $(document).one(key, callback);    
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
  var onloadCallbacks = {};
  
  function cleanUp(){
    bannerMap = {};
    callbacks = {};
    configMap = {};
    onloadCallbacks = {};
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
  
  function updateUrls(urlMap){
    for(var key in urlMap){
      if (bannerMap[key]){
        bannerMap[key].url = urlMap[key];        
      } else {
        queue({name: key, url: urlMap[key]});
      }
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
      
  function insertCallback(name, callback, list){
    list = list||callbacks;
    if (typeof callback === 'function'){
      if (list[name] && $.isArray(list[name])){
        list[name].push(callback);
      } else {
        list[name] = [callback];
      }
    }
  }    
      
  function render(name, callback, force){
    var secondIsFn = typeof callback === 'function';
    force     = secondIsFn ? force : callback;
    callback  = secondIsFn ? callback : force;
    
    var banner = bannerMap[name];
    if (!banner){
      var error = new Error('Banner '+name+' not queued');
      if (callback && typeof callback === 'function') {
        callback(error, null);        
      } else {
        resolveOnload(name, error);
      }
    } else if (!force && banner.active){
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
    $(selector).find("div[data-webad-position]").each(function(){
      var $this = $(this);
      var position = $this.data('webad-position');
      config(position, 'container', $this);
    });
  }
  
  function resolveOnload(name, error){
    if (onloadCallbacks[name] && onloadCallbacks[name].length > 0){
      $.each(onloadCallbacks[name], function(){
        if (typeof this === 'function') {          
          if (error){
            this(error, null);
          } else {
            this(null, bannerMap[name]);
          }
        }
      });
      onloadCallbacks[name] = null;
    }
    //triggerEvent('webad-onload-'+name, bannerMap[name]);
    //triggerEvent('webad-onload', bannerMap[name]);
  }
  
  function resolve(name){
    resolveOnload(name);
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
      var callbacksToCall = callbacks['all']; // copy out the callbacks
      callbacks['all'] = null; // reset map
      if (callbacksToCall && callbacksToCall.length > 0){
        $.each(callbacksToCall, function(){
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
      var name;
      if (priorityList.length <= 0){
        renderUnactive();
      } else {
        name = priorityList.shift();
        insertCallback(name, loop, onloadCallbacks);
        render(name);
      }
    }
    if (callback && typeof callback === 'function') insertCallback('all', callback);
    loop();
  }
  
  function renderLazy(parent, callback){
    $(parent).find('div[data-webads="lazy"]').attr('data-webads', 'true').data('webads', 'true');
    if (callback && typeof callback === 'function') insertCallback('all', callback);  
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
        if(!bannerMap[name]){
          return loop();
        }
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
  
  function renderContext(selector, force){
    collectDataPositions(selector);
    
    $(selector).find("div[data-webads='true']").filter(function(){
      return (force === true ? true : $(this).data('webads-processed') !== 'processed');
    }).each(function(){
      var $this = $(this);
      $this.data('webads-processed', 'processed');
      var position = $this.data('webad-position');
      var id       = $this.attr('id');
      //console.log(position, id);
      if (position){
        render(position, force);
      } else if (id) {
        //console.log('id');
        renderAdsWithContainer(id, force);
      }
    });
  }
  
  function renderAdsWithContainer(container, force){
    for(var key in bannerMap){
      if (container === bannerMap[key].container){
        render(key, force);
      }
    }
  }
  
  function expose(name){return bannerMap[name].expose();}
  
})(FINN, jQuery);