var FINN = FINN||{};

if (typeof Object.create === 'undefined') {
    Object.create = function (o) { 
        function F() {} 
        F.prototype = o; 
        return new F(); 
    };
}

(function(F, $) {
  "use strict";

  var Banner, Iframe;
  
  FINN.webAds = FINN.webAds||{};
  var webAds  = FINN.webAds;

  Iframe = (function() {
    function Iframe(name, options, id) {
      this.name     = name;
      this.options  = options != null ? options : {};
      this.id       = id != null ? id : 'webad-' + this.name;
    }

    Iframe.prototype.remove = function() {
      this.$wrapper.remove();
      return this;
    };

    Iframe.prototype.refresh = function() {
      var iframeUrl = webAds.iframeUrl || "/finn/webads";
      var currSrc   = this.$iframe.attr('src');
      var sep       = iframeUrl.indexOf('?') !== -1 ? '&' : '?';
      var url       = currSrc.indexOf('refreshWebAd') !== -1 ? (iframeUrl + "#" + this.name) : (iframeUrl + sep + "refreshWebAd#" + this.name);
      this.$iframe.attr('src', url);
      return this;
    };

    Iframe.prototype.makeIframe = function() {
      var iframeUrl = webAds.iframeUrl || "/finn/webads";
      var div       = document.createElement('div');
      var innerDiv  = document.createElement('div');
      var i         = document.createElement('iframe');
      
      innerDiv.className  = 'inner';
      
      div.id              = this.id;
      div.className = ("advertising webad " + this.id + (this.options.hidden ? ' webad-hidden' : '')).toLowerCase();
      if (this.options.hidden ){ div.style.display = "none"; }
      
      i.src        = iframeUrl + "#" + this.name;
      i.scrolling  = 'no';
      i.className  = 'webad-iframe';
      // IE 7-8      
      i.marginWidth  = 0;
      i.marginHeight = 0;
      i.frameBorder  = '0';
      i.allowTransparency = 'true';
      //Safari will will not show iframe until scroll with width/height == 0px      
      i.width         = this.options.width || 100;
      i.height        = this.options.height || 100;
      i.style.width   = (this.options.width || 100) + 'px';
      i.style.height  = (this.options.height || 100) + 'px';
      i.style.border  = '0px';      
      // Wrap iframe inside 2 divs      
      innerDiv.appendChild(i);
      div.appendChild(innerDiv);
      // Add reference for selecting injected iframe      
      this.$iframe = $(i);
      return (this.$wrapper = $(div)); // return wrapper so result can be appended
    };
    return Iframe;
  })();
  
  var DEFAULTS = {
    RETRIES: 5,
    TIMEOUT: 50,
    MINSIZE: 31,
    ADCONTAINER: 'webAd'
  };
  
  Banner = (function() {
    function Banner(params, expose) {
      this.params         = params;
      this.exposeObj      = expose !== null ? expose : {};
      this.name           = this.params.name;
      this.url            = this.params.url;
      this.container      = this.params.container;
      this.adContainer    = this.params.adContainer||DEFAULTS.ADCONTAINER;      
      this.minSize        = this.params.minSize||DEFAULTS.MINSIZE;
      this.width          = 0;
      this.height         = 0;
      this.iframe         = new Iframe(this.name, this.params);
      this.active         = false;
      this.retries        = DEFAULTS.RETRIES;
      this.timer          = DEFAULTS.TIMEOUT;
      this.resolved       = false;
      this.failed         = false;
      this.log('new Banner()');
    }

    Banner.prototype.log = function(msg) { if (console) {console.log(this.name+":"+msg);} };

    Banner.prototype.config = function(key, value) {
      return (this[key] = value);
    };

    Banner.prototype.onload = function() {
      this.log('onload');
      if (this.params.hidden || this.params.skipSizeCheck) {
        this.log('hidden ignoreSizeCheck');
        this.resolve();
      } else {
        this.$webAd = this.iframe.$iframe.contents().find("#"+this.adContainer);
        this.processSize();
      }
      return this;
    };

    Banner.prototype.processSize = function() {
      this.log('processSize');
      var w           = this.$webAd.width();
      var height      = this.$webAd.height();
      var invalidSize = w === null || w <= this.minSize || w === null || w <= this.minSize;
      
      if (invalidSize) return this.pollForNewSize(w, height);
      
      this.resize(w, height);
      this.resolve();
      return this;
    };

    Banner.prototype.resolve = function() {
      if (this.params.bodyClass && !this.failed) {
        $("body").addClass(this.params.bodyClass);
      }
      if (this.params.done && typeof this.params.done === 'function') {
        this.params.done(this);
      }
      if (!this.resolved) {
        this.resolved = true;      
        webAds.resolve(this.name);
      }
      this.refreshCalled = false;
      return this;
    };

    Banner.prototype.fail = function(reason) {
      this.log('Failed ' + reason);
      if (this.params.bodyFailClass) {
        $("body").addClass(this.params.bodyFailClass);
      }
      this.failed = true;
      this.iframe.$wrapper.addClass('webad-failed');
      return this.resolve();
    };

    Banner.prototype.pollForNewSize = function(width, height) {
      var banner, cb;
      this.log('pollForNewSize ' + this.timer + ' retries: ' + this.retries);
      this.timer += this.timer;
      this.retries -= 1;
      banner = this;
      if (this.retries > 0) {
        cb = function() {
          banner.log('pollForNewSize setTimeout');
          return banner.processSize();
        };
        setTimeout(cb, this.timer);
      } else {
        this.width = width;
        this.height = height;
        this.fail("timeout");
      }
      return this;
    };

    Banner.prototype.resize = function(width, height) {
      this.width = width;
      this.height = height;
      this.log('resize banner=> height:' + height + 'width' + width);
      this.iframe.$iframe.css({ height: height, width: width}).attr('height', height).attr('width', width);
      return this;
    };

    Banner.prototype.expose = function() {
      return $.extend({}, this.exposeObj, { banner: this });
    };

    Banner.prototype.injectScript = function(idoc, iwin) {
      this.log('injectScript');
      idoc.write('<scr' + 'ipt type="text/javascript" src="' + this.url + '"></scr' + 'ipt>');
      return this;
    };

    Banner.prototype.refresh = function() {
      this.log('refresh');
      this.refreshCalled  = true;
      this.resolved       = false;
      if (this.failed){
        this.iframe.$wrapper.removeClass('webad-failed');
      }
      this.failed         = false;
      this.retries        = DEFAULTS.RETRIES;
      this.timer          = DEFAULTS.TIMEOUT;
      return this.iframe.refresh();
    };

    Banner.prototype.remove = function() {
      this.log('remove');
      this.active = false;
      this.resolved = false;
      this.iframe.remove();
      return this;
    };

    Banner.prototype.insert = function() {
      this.log('insert');
      this.active = true;
      var $container = typeof this.container === 'string' ? jQuery("#" + this.container) : this.container;
      $container.addClass('webads-processed').append(this.iframe.makeIframe());  
      return this;
    };
    return Banner;
  })();

  FINN.Banner = Banner;

}).call(this, FINN, jQuery);
var FINN = FINN || {};

(function(F, $) {
  "use strict";

  FINN.data = FINN.data || {};

  function fixTopPosition(banner) {
    banner.log('cb fixTopPosition failed? ', banner.failed);
    if (banner.failed) {
      return;
    }
    var width = banner.width;
    var isSmallBanner = width <= 768;
    var isNotCompanion = width >= 800 && width < 992;
    var isDominant = width > 992;
    if (isSmallBanner || isNotCompanion) {
      banner.iframe.$wrapper.css('width', '980px');
    } else if (isDominant) {
      banner.iframe.$wrapper.css('margin-left', "-12px");
    }
  }

  function fixLeftPosition(banner) {
    banner.log('cb fixLeftBanner. failed? '+ banner.failed);
    if (!banner.failed && banner.width > 50) {
      banner.iframe.$wrapper.css("left", (-(banner.width + 12)) + "px");
    }
  }

  function fixWallpaper(banner) {
    banner.log('cb fixWallpaper failed', banner.failed);
    var bgImage = banner.iframe.$iframe.contents().find("img");
    if (bgImage.size() > 0 && bgImage.width() !== 1) {
      var src = bgImage.attr('src');
      if (src !== '' && src.indexOf('empty.gif') === -1) {
        var css = {
          'background': ' transparent url(\"' + src + '\") 50% 0% no-repeat',
          'background-attachment': 'fixed'
        };
        $("body").css(css).addClass('has-dominant-wallpaper');
      }
    }
  }

  FINN.data.defaultConfig = $.extend(FINN.data.defaultConfig, {
    "Top": {
      width: 992,
      height: 150,
      bodyFailClass: 'has-no-top-placement',
      done: fixTopPosition
    },
    "Left1": {
      width: 240,
      height: 500,
      bodyClass: 'has-dominant-campaign',
      done: fixLeftPosition
    },
    "Right1": {
      width: 240
    },
    "Right2": {
      width: 240,
      height: 500
    },
    "Right3": {
      width: 240
    },
    "Middle": {
      width: 580,
      height: 400,
      container: "banners_middle"
    },
    "Wallpaper": {
      hidden: true,
      done: fixWallpaper
    },
    "Survey": {
      hidden: true,      
      done: $.noop
    },
    "Txt_1": {},
    "Txt_2": {},
    "Txt_3": {},
    "Txt_4": {},
    "Txt_5": {},
    "Txt_6": {},
    "Txt_7": {},
    "Txt_8": {},
    "Txt_9": {},
    "Txt_10": {},
    "all": {
      container : 'banners',
      backend   : 'helios'
    }
  });

})(FINN, jQuery);
var FINN = FINN||{};

(function(F, $){
  "use strict";
  FINN.webAds = FINN.webAds||{};
  var plugins = FINN.webAds.plugins = FINN.webAds.plugins||{};
  
  plugins.register = function(name, value){
    plugins[name] = value;
  };
  plugins.overlay = overlay;
  plugins.popup   = popup;
  plugins.dialog  = dialog;
  plugins.search  = search;
  plugins.context = context;
  plugins.getAdContent = getAdContent;
  
  /* overlay with iframe content, or wrap ad iframe*/
  function overlay(banner){
    banner.log('PLUGIN -> Overlay ', banner.name);
  }
  
  /* window.open? */
  function popup(){
    
  }
  
  /* confirm dialog ? */
  function dialog(){
    
  }
  
  /* Search FINN */
  function search(query, callback){
    
  }
  
  /* Get current context - finnobj? */
  function context(){
      
  }
  
  /* */ 
  function getAdContent(areaid, callback){
    var url     = "/finn/realestate/homes/rotationdemo.json";    
    var res     = {};
    var params  = {"areaId":areaid};
    // SYNC
    $.ajax(url,{data:params, async:false, "success": function(data){
        res = data;
    }});
    
    return res;
  }
  
  
})(FINN, jQuery);var FINN = FINN||{};

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
  
  /*
    TODO:
    callback when all is done
    events:
      webAds.done
      webAds.done.all
      webAds.done.Top
  */
  
  var eventMap = {};
  
  w.on = on; //TODO
  function on(key, callback){
    // TODO, hooks into resolve and resolveAll
  } 
  
  function triggerEvent(name){
    
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
    helios_parameters : "" //TODO: remove this
     // TODO, add tf_recordClickToUrl?
  };
  
  var bannerMap = {};
  var callbacks = {};
  var configMap = {};
  
  function cleanUp(){
    bannerMap = {};
    callbacks = {};
    configMap = {};
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
    return $.extend({}, 
      defaultConfig ['all'], 
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
    $(selector).find("div.webads[data-banner-position]").each(function(){
      var $this = $(this);
      var position = $this.data('banner-position');
      config(position, 'container', $this);
    });
  }
  
  function resolve(name){
    if (callbacks[name] && callbacks[name].length > 0){
      $.each(callbacks[name], function(){
        if (typeof this === 'function') this(null, bannerMap[name]);
      });
      callbacks[name] = null;
      $(document).trigger('bannerReady.'+name, bannerMap[name]);
    }
    resolveAll();
  }
  
  function resolveAll(){
    var allResolved = true;
    var banner;
    for(var key in bannerMap){
      banner = bannerMap[key];      
      if (banner.resolved !== true){
        allResolved = false;
        break;
      }
    }
    if (allResolved){
      if (callbacks['all'] && callbacks['all'].length > 0){
        $.each(callbacks['all'], function(){
          if (typeof this === 'function') this(null, bannerMap);
        });
      }
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
    commaList         = commaList && typeof commaList === 'function' ? "Top" : (commaList||"Top");
    callback          = commaList && typeof commaList === 'function' ? commaList : callback;
    var priorityList  = commaList.split(',');
    
    function loop(){
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
    console.log('refresh', name)    
    bannerMap[name].refresh();
    // .refresh command resets banner.resolved
    if (cb && typeof cb === 'function'){    
      insertCallback(name, cb);      
    }   
  }
  
  function refreshAll(commaList, callback){
    console.log('REFRESH ALL', commaList);
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
          console.log('key:', key, 'bool', shouldRefresh(key));          
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