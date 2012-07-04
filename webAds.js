/*global document, window, console, jQuery, setTimeout, FINN */
(function(F, $) {
  "use strict";

  var Banner, Iframe;
  
  var IFRAME_VERSION = 7;
  var DEFAULTS = {
    RETRIES: 5,
    TIMEOUT: 50,
    MINSIZE: 39,
    ADCONTAINER: 'webAd'
  };
  
  Iframe = (function(document) {
    function Iframe(name, options) {
      this.name     = name;
      this.options  = options != null ? options : {};
    }

    Iframe.prototype.remove = function() {
      this.$wrapper.remove();
      return this;
    };
    
    Iframe.prototype.getUrl = function(src){
      var url     = FINN.webAds.iframeUrl || '/html/banner/webad.html';
      var sep     = url.indexOf('?') !== -1 ? '&' : '?';
      var refresh = src && src.indexOf('refreshWebAd') === -1 ? 'refreshWebAd=true&' : '';
      return url +  (sep + 'ver=' + IFRAME_VERSION + '&' ) + refresh + "#_" + this.name;
    };

  
    Iframe.prototype.makeIframe = function() {
      var div       = document.createElement('div');
      var innerDiv  = document.createElement('div');
      var i         = document.createElement('iframe');      
      innerDiv.className  = 'webad-inner';      
      var divClasses = ['webad', 'webad-'+this.name];
      if (this.options.hidden) {
        divClasses.push('webad-hidden');
        div.style.display = "none";
      }
      if (this.options.sticky) { divClasses.push('webad-sticky'); }
      div.className = (divClasses.join(' ')).toLowerCase();
      i.src        = this.getUrl();
      i.scrolling  = 'no';
      i.setAttribute('data-automation-id', this.name);
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
      this.$iframe  = $(i);
      this.$wrapper = $(div).data('webad', this.name);
      return this;
    };
    return Iframe;
  })(document);
  

  
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
      this.incomplete     = false;
      this.resized        = false;
      this.notValid       = false;
      this.ignoreOnload   = false;
      this.insertCalled   = false;
      this.log(1, 'Banner init. (new Banner({}))');
    }
    
    Banner.prototype.log = function(level, msg) { 
      if (!msg){
        msg   = level;
        level = 1;
      }
      if (this.params.log) this.params.log(this, level, msg);
    };

    Banner.prototype.config = function(key, value) {
      this.log(3, key+' updated');
      return (this[key] = value);
    };

    Banner.prototype.track = function(){
      var banner = this;  
      if(!banner.params.trackingScriptUrl || !banner.doc ) return false;    
      setTimeout(function(){      
        var head = banner.doc.getElementsByTagName('head')[0];
        banner.log(2, 'Tracking banner with '+banner.params.trackingScriptUrl);
        if (head){
          var track = banner.doc.createElement('script'); 
          track.type = 'text/javascript'; 
          track.async = true;
          track.src = ('https:' == banner.doc.location.protocol ? 'https://' : 'http://') + banner.params.trackingScriptUrl;
          head.appendChild(track);
        }
      }, 0);
    }

    Banner.prototype.onload = function() {
      this.log(2, 'onload triggered on iframe');
      this.$webAd = this.iframe.$iframe.contents().find("#"+this.adContainer);
      this.track();
      if(this.ignoreOnload === true){
        return this.resolve();
      }
      if (this.params.hidden || this.params.skipSizeCheck) {
        this.log(2, 'HIDDEN ignoreSizeCheck');
        if (this.retries === DEFAULTS.RETRIES && this.hasEmptyPixel()){
          return this.fail('pixel');
        } else {
          this.resolve();
        }      
      } else {
        this.processSize();
      }
      FINN.webAds.resolveOnload(this.name);
      return this;
    };
    
    Banner.prototype.isValidSize = function(w, h){
      return (w === null || w <= this.minSize || w === null || w <= this.minSize);
    };
    
    Banner.prototype.isEmptyPixel = function(){
      return !!($(this).attr('src').match(/.*(1x1|3x3|1x2).*/i));
    };
    
    Banner.prototype.hasEmptyPixel = function(){
      return (this.$webAd.find('img').filter(this.isEmptyPixel).length > 0);
    };
    
    Banner.prototype.processSize = function() {      
      var w = this.$webAd.width();
      var h = this.$webAd.height();
      this.log(2, 'Checking if valid size: '+w+'x'+h);
      if (this.isValidSize(w, h)) {
        if (this.retries === DEFAULTS.RETRIES && this.hasEmptyPixel()){
          return this.fail('pixel');
        }
        return this.pollForNewSize(w, h);
      }            
      this.resizeIfNotDefault(w, h);
      this.resolve();
      return this;
    };

    Banner.prototype.resolve = function() {
      this.log(1, ' resolved as '+ (this.failed ? 'failed' : 'rendered'));
      if (this.params.bodyClass && !this.failed) {
        $("body").addClass(this.params.bodyClass);
      }
      if (this.params.done && typeof this.params.done === 'function') {
        this.params.done(this);
      }
      if (!this.resolved) {
        this.resolved = true;      
        this.log(2, 'Calling FINN.webAds.resolve()');
        FINN.webAds.resolve(this.name);
      }
      // reset
      this.refreshCalled = false;
      return this;
    };

    Banner.prototype.fail = function(reason, dontSetClass) {
      this.log(1, 'Failed:' + reason);
      if (!dontSetClass && this.iframe.$wrapper) this.iframe.$wrapper.addClass('webad-failed');      
      if (this.params.bodyFailClass) {
        $("body").addClass(this.params.bodyFailClass);
      }
      this.failed = true;
      return this.resolve();
    };

    Banner.prototype.pollForNewSize = function(width, height) {
      var banner, cb;
      this.log(2, 'pollForNewSize ' + this.timer + ' retries: ' + this.retries);
      this.timer += this.timer;
      this.retries -= 1;
      banner = this;
      if (this.retries > 0) {
        cb = function() { banner.processSize(); };
        setTimeout(cb, this.timer);
      } else {
        this.width  = width;
        this.height = height;
        this.fail("timeout");
      }
      return this;
    };

    Banner.prototype.isDefaultSize = function(width, height){
      if (this.resized){ return false; }
      if (this.params.width > 0 && this.params.width === width && this.params.height === height ){
        return true;
      }
    };
    
    Banner.prototype.resizeIfNotDefault = function(w, h){
      this.width  = w;
      this.height = h;
      if ( !this.isDefaultSize(w, h) ){ this.resize(); } 
      return this;
    };

    Banner.prototype.resize = function(w, h) {
      if (typeof w !== 'undefined') this.width = w;
      if (typeof h !== 'undefined') this.height = h;
      this.iframe.$iframe.css({ "height": this.height, "width": this.width}).attr('height', this.height).attr('width', this.width);
      this.resized = true;
      this.log(1, 'resized to height:' + this.height + ' and width:' + this.width);
      return this;
    };

    Banner.prototype.expose = function() {
      return $.extend({}, this.exposeObj, { banner: this });
    };

    Banner.prototype.injectScript = function(idoc, iwin) {
      this.log(3, 'injectScript');
      this.doc = idoc;
      idoc.write('<scr' + 'ipt type="text/javascript" src="' + this.url + '"></scr' + 'ipt>');
      return this;
    };

    Banner.prototype.refresh = function() {
      if (this.incomplete){
        this.fail('Cant refresh bacause of not valid config.');
      }
      this.refreshCalled  = true;
      this.resolved       = false;
      if (this.failed && this.iframe && this.iframe.$wrapper){
        this.iframe.$wrapper.removeClass('webad-failed');
      }
      this.failed         = false;
      this.retries        = DEFAULTS.RETRIES;
      this.timer          = DEFAULTS.TIMEOUT;

      if (this.doc) {
        var url = this.iframe.getUrl(this.doc.location.href);
        this.doc.location.replace(url);
      }
      return this;
    };

    Banner.prototype.remove = function() {
      this.active   = false;
      this.resolved = false;
      this.iframe.remove();
      return this;
    };

    Banner.prototype.isValid = function(){
      this.log(2, 'Not valid if '+this.params.threshold+' is less than '+this.params.windowWidth);
      if (typeof this.params.threshold !== 'undefined' && this.params.windowWidth <= this.params.threshold){
        return false;
      }
      return true;
    };
    
    Banner.prototype.getClassName = function(){
      return "webad-" + this.name.toLowerCase();
    };
    
    Banner.prototype.insert = function() {
      this.insertCalled = true;
      this.log(3, 'Insert()');
      if(!this.isValid()){
        this.notValid = true;
        this.fail('notValid');
        return this;
      }
      
      if(!this.container){
        this.incomplete = true;
        this.failed     = true;
        this.log(1, 'Missing container '+this.container);        
        this.resolve();
        return this;
      }
      if (this.active && this.$webAd && $("."+this.getClassName()).length > 0) {
        this.log(1, 'iframe present in page');
        return this;
      }
      
      this.incomplete = false;
      this.resolved   = false;
      this.active     = true;
      var $container = typeof this.container === 'string' ? jQuery("#" + this.container) : this.container;
      if ($container.size() <= 0) {
        this.fail('Missing valid container on '+this.name, true);
        return this;
      }
      this.log(3, 'Inserting iframe/banner');      
      this.iframe.makeIframe();
      $container.data('webads-processed', 'processed');
      this.iframe.$wrapper.appendTo($container);
      return this;
    };

    Banner.prototype.getBannerFlag = function(key){
      return FINN.webAds.getBannerFlag(key);
    };
    
    Banner.prototype.setBannerFlag = function(key, value){
      return FINN.webAds.setBannerFlag(key, value);  
    };
    
    Banner.prototype.plugin = function(name){
      var plugin = FINN.webAds.getPlugin(name);
      if (!plugin){ return plugin; }
      var args = Array.prototype.slice.call(arguments, 1);
      return plugin.apply(this, args);
    };
    
    return Banner;
  })();

  FINN.Banner = Banner;

}).call(this, FINN, jQuery);
var FINN = FINN || {};

(function(F, $) {
  "use strict";

  FINN.webAds = FINN.webAds || {};  
  FINN.data   = FINN.data   || {};
  
  FINN.webAds.extend = function(obj){
    if (typeof FINN.data.defaultConfig === 'undefined') {
      FINN.data.defaultConfig = obj;      
    } else {
      $.each(obj, function(k,v){ FINN.data.defaultConfig[k] = $.extend(FINN.data.defaultConfig[k]||{}, v); });      
    }
  };

  function fixTopPosition(banner) {
    banner.log(2, "cb fixTopPosition");
    if (banner.failed === true){ 
      return;
    }
    var width           = banner.width;
    var isSmallBanner   = width <= 768;
    var isNotCompanion  = width >= 800 && width < 992;
    var isDominant      = width > 992;
    if (banner.params.bodyFailClass) {
     $("body").removeClass(banner.params.bodyFailClass); 
    }
    if (isSmallBanner || isNotCompanion) {
      banner.iframe.$wrapper.css("width", "980px");
    } else if (isDominant) {
      banner.iframe.$wrapper.css("margin-left", "-12px");
    }
  }

  function fixLeftPosition(banner) {
    banner.log(2, "cb fixLeftBanner");
    if (!banner.failed && banner.width > 50) {
      banner.iframe.$wrapper.css("left", (-(banner.width + 12)) + "px");
    }
  }

  function fixWallpaper(banner) {
    banner.log(2, "cb fixWallpaper");
    if (banner.failed === true){ return;}    
    var bgImage = banner.iframe.$iframe.contents().find("img");
    if (bgImage.size() > 0 && bgImage.width() !== 1) {
      var src = bgImage.attr("src");
      if (src !== "" && src.indexOf("empty.gif") === -1) {
        var css = {
          "background": " transparent url(\"" + src + "\") 50% 0% no-repeat",
          "background-attachment": "fixed"
        };
        $("body").css(css).addClass("has-dominant-wallpaper");
      }
    }
  }

  function addCloseButton(banner){
    banner.iframe.$wrapper.append('<button class=dismiss-sticky>X</button>');
    banner.iframe.$wrapper.on("click", '.dismiss-sticky', function(){
        banner.iframe.$wrapper.remove();
    });
  }
  
  FINN.webAds.extend({
    "Top": {
      "extends": "normal",
      width: 992,
      threshold: 600,
      height: 150,
      bodyFailClass: "top-position-collapsed",
      done: fixTopPosition
    },
    "Left1": {
      "extends": "normal",
      width: 240,
      threshold: 1050,
      height: 500,
      bodyClass: "has-dominant-campaign",
      done: fixLeftPosition
    },
    "Right1": {
      "extends": "normal",
      width: 240,
      threshold: 1025      
    },
    "Right2": {
      "extends": "normal",
      threshold: 1025,            
      sticky: true,
      width: 240,
      height: 500
    },
    "Right3": {
      threshold: 1025,                  
      "extends": "normal",
      width: 240
    },
    "Middle": {
      "extends": "normal",
      width: 580,
      height: 400,
      threshold: 291,                  
      container: "banners-middle"
    },
    "Wallpaper": {
      "extends": "normal",
      hidden: true,
      threshold: 1050,      
      done: fixWallpaper
    },
    "Survey": {
      "extends": "normal",
      hidden: true,      
      done: $.noop
    },
    "Txt_1"   : {
      "extends": "textads"
    },
    "Txt_2"   : {
      "extends": "textads"
    },
    "Txt_3"   : {
      "extends": "textads"
    },
    "Txt_4"   : {
      "extends": "textads"
    },
    "Txt_5"   : {
      "extends": "textads"
    },
    "Txt_6"   : {
      "extends": "textads"
    },
    "Txt_7"   : {
      "extends": "textads"
    },
    "Txt_8"   : {
      "extends": "textads"
    },
    "Txt_9"   : {
      "extends": "textads"
    },
    "Txt_10"  : {
      "extends": "textads"
    },
    "BottomLeft": { 
      "extends": "bottomads"       
    },
    "BottomMiddle": { 
      "extends": "bottomads" 
    },
    "BottomRight": { 
      "extends": "bottomads" 
    },
    "BottomRight2": {
      "extends": "bottomads"       
    },
    "bottomads": {
      container: "banners-bottom"
    },
    "textads" : {
      width: 100,
      height: 46,
      container: "textbanners"
    },
	  "mobilebottom" : {
	    width: 320,
	    "extends": "normal",
	    done: addCloseButton
	  },
    "normal": {
      container : "banners"
    },
    "all": {
      backend   : "helios"
    }
  });

})(FINN, jQuery);
var FINN=FINN||{};

(function(F, $){
  
  F.webAds = F.webAds||{};
  
  var MARGIN  = 10;
  var TIMER   = 15;
  
  function getBannersForHeight(list, height, index){
    var currPos       = MARGIN;
    var toBeRendered  = [];
    var stilSearch    = true;
    var fold          = 0;
    var b;
    var maxWidth = 0;

    // Search for position from bottom and up, and collect fold
    for(var i = list.length, g = i -1; i > 0; i--, g--){
      b = list[g];
      if (b.width > maxWidth) maxWidth = b.width;
      // check if height will outgrow avail window height
      if (stilSearch && (b.height + currPos + (MARGIN*toBeRendered.length)) <= height){
        toBeRendered.push(b);
        currPos   += (b.height + MARGIN);
      } else {
        stilSearch = false;
        fold      += (b.height + MARGIN);
      }
    }
    
    // Iterate positions to be rendered and set position from top when in sticky mode
    var currPosFromTop = MARGIN;
    for(i = toBeRendered.length, g = i -1; i > 0; i--, g--){
      b = toBeRendered[g];
      b.stickyPos = currPosFromTop + 0;
      currPosFromTop += b.height + MARGIN;      
    }
    
    return {
      alwaysSticky  : toBeRendered.length > 0 && toBeRendered.length === list.length,
      fold          : fold,
      sticky        : toBeRendered,
      maxWidth      : maxWidth
    };
  }
  
  var isSticky = false;
  function setSticky(list){
    if(isSticky) return true;
    isSticky = true;
    $.each(list, function(){
      this.log('activating sticky');
      this.iframe.$wrapper.css({
        position  : 'fixed',
        top       : this.stickyPos + "px"
      });
    });
  }
  
  function unsetSticky(list){
    if(!isSticky) return true;    
    isSticky = false;
    $.each(list, function(){
      this.log('de-activating sticky');      
      this.iframe.$wrapper.css({
        position  : 'static',
        top       : ''
      });
    });
  }
  
  F.webAds.sticky = function(elemId, pageSelector){
    var $elem =  $('#'+elemId);
    if ($elem.size() === 0) return false;
    var $webAds = $elem.find('.webad');
    if ($webAds.size() === 0) return false;

    var list    = $webAds.map(function(i){ return F.webAds._getBanner($(this).data('webad')); });    
    var $win    = $(window);
    var result  = getBannersForHeight(list, $win.height());    
    
    function checker(){
      var current = $win.scrollTop();
      if (current >= result.fold){
        setSticky(result.sticky);
      } else {
        unsetSticky(result.sticky);        
      }      
    }
    
    if (pageSelector){
      var contentAndBanners = $(pageSelector).outerWidth() + 12 + 10 + result.maxWidth;
      var isNoRoom = $win.width() <= contentAndBanners;
      if (isNoRoom){ return false; }
    }
    
    if (result.alwaysSticky) {
      checker();
    } else if (result.sticky.length > 0){
      var scrollTimer;
      // check if currently scrolled past fold;
      checker();

      $win.bind("scroll", function() {
        clearInterval(scrollTimer);
        scrollTimer = setTimeout(checker, TIMER);
      });
    }    
  };
    
})(FINN, jQuery);var FINN = FINN||{};

(function(F, $){
  var data          = F.data = F.data||{};
  var defaultConfig = data.defaultConfig = data.defaultConfig||{};
  var logger;
  var loggerConfig  = function(){
    if (logger) return logger;
    if (!FINN.webAds||!FINN.webAds.logger) return {log:function(){}};
    logger = FINN.webAds.logger('FINN WebAds');
    return logger;
  };
  
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
  w.base                  = "/";
  
  w.getBannerFlag         = getBannerFlag;
  w.setBannerFlag         = setBannerFlag;
  w._length               = bannerMapLength;  
  w._getBanner            = getBanner;
  w.defaultReady          = defaultReady;
  
  var eventMap = {};
  
  w.on = on;
  w.one = one;
  function on(key, callback){
    return $(document).on(key, callback);
  } 
  
  function one(key, callback){
    return $(document).one(key, callback);    
  }
  
  function defaultReady(){
    // Load banners
    FINN.webAds.queue(FINN.data.banners);
    // collect data
    FINN.webAds.collectDataPositions();
    FINN.webAds.renderAll('Top,Left1,Right2');
  }
  
  function triggerEvent(name, arg1){
    $(document).trigger(name.toLowerCase(), arg1);      
  }
    
  function refreshFromServer(){}// TODO
  function refreshAllFromServer(){}//TODO
  
  var globalExpose = {
    _jQuery   : jQuery,
    inDapIf   : true,
    inFIF     : undefined,
    webAds    : w,
    helios_parameters : "", //TODO: remove this
    tf_recordClickToUrl: window.tf_recordClickToUrl
  };
  
  var bannerMap   = {};
  var bannerFlags = {};
  var callbacks   = {};
  var configMap   = {};
  var onloadCallbacks = {};

  function cleanUp(){
    bannerMap   = {};
    bannerFlags = {};    
    callbacks   = {};
    configMap   = {};
    onloadCallbacks = {};
  }

  function getBanner(name){
    return bannerMap[name];
  }
  
  function getBannerFlag(key){
    return (bannerFlags[key]||null);
  }
  
  function setBannerFlag(key, value){
    if(!key) return null;
    return (bannerFlags[key] = value);
  }

  function bannerMapLength(){
    var i = 0;
    for(var g in bannerMap){i++;}
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
  
  var windowWidth = $(window).width();
  function createConfig(obj){
	  var extending = (defaultConfig[obj.name] && defaultConfig[obj.name]["extends"]);
	  var defaults =  extending ? defaultConfig[extending] : null;
    return $.extend({
        windowWidth: windowWidth
      },
      loggerConfig(),
      defaults, 
      defaultConfig.all,
      defaultConfig [obj.name], 
      configMap     [obj.name],
      obj);
  }
  
  function addToMap(){
    var config = createConfig(this);
    var banner = new F.Banner(config, globalExpose);
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
      banner.log(1, 'banner is active');
      if (callback && typeof callback === 'function') {
        if (banner.resolved) {
          banner.log(2, 'is resolved, calling callback direct');
          callback(null, banner);          
        } else {
          banner.log(2, 'deferring callback');
          insertCallback(name, callback);
        }
      }
      return banner;
    } else {
      banner.insert();
      insertCallback(name, callback);
      return banner;
    }
  }
  
  function collectDataPositions(selector){
    selector = selector||"body";
    $(selector).find("div[data-webad-position]").each(function(){
      var $this = $(this);
      if ($this.data('webads') && $this.data('webads') !== 'lazy') {
        config($this.data('webad-position'), 'container', $this);        
      }
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
      var callbacksToCall = callbacks.all; // copy out the callbacks
      callbacks.all = null; // reset map
      if (callbacksToCall && callbacksToCall.length > 0){
        $.each(callbacksToCall, function(){
          if (typeof this === 'function') {
            this(null, bannerMap);
          }
        });
      }
      triggerEvent('all-webads-resolved', bannerMap);
      loggerConfig().log({name: 'WEBADS'}, 1, 'All webAds processed.');
      return true;
    } else {
      return false;
    }
  }

  function renderUntouched(){
    var banner;
    for(var key in bannerMap){
      banner = bannerMap[key];      
      if (banner.insertCalled === false){
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
        renderUntouched();
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
    renderContext(parent, true);    
  }
  
  function queue(obj){    
    if ($.isArray(obj)){
      loggerConfig().log({name: 'WEBADS'},2, 'Queued '+obj.length+' positions');            
      $.each(obj, addToMap);
    } else {
      loggerConfig().log({name: 'WEBADS'},2, 'Queued '+obj.name+'.');      
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
        alreadyRendered.push(name);
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
      if (bannerMap[key]) bannerMap[key].remove();
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
      if (position){
        render(position, force);
      } else if (id) {
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
  
  function expose(idocument, iwindow){
    var name = idocument.location.hash.substring(2);
    var list = bannerMap[name].expose();
    $.each(list, function(k){ iwindow[k] = this; });
  }
  
})(FINN, jQuery);var FINN = FINN||{};

(function(F, $){
    "use strict";
    F.webAds = F.webAds||{};

    var plugins = {};
    F.webAds.registerPlugin = function(name, plug){
        var plugin = {};
        plugin.run = plug.run||$.noop;
        if (typeof plug.init === 'function'){
            plug.init(plugin);
        }
        plugins[name] = plugin;
    };

    F.webAds.getPlugin = function(name){
        return (plugins[name].run||null);
    };

    F.webAds.registerPlugin('survey', {
        run: function(options, callback){
            var daysForCookieToLive = 21;
            var percentageToHit     = options.percent;
            var cookieName          = options.surveyName||'qbFINN';
            var cookie              = getCookie(cookieName);

            function checkPopUp() {
                var popRandom = (100 * Math.random());
                return  ((popRandom + percentageToHit) > 100) && !(cookie);
            }

            function setExpDate(daysToLive) {
                var today = new Date();
                var expire = new Date(today.getTime() + daysToLive * 24 * 60 * 60 * 1000);
                expire = expire.toGMTString();
                return expire;
            }

            function setCookie(cookieName, cookieValue, daysToLive) {
                var cookieLife = setExpDate(daysToLive);
                document.cookie = cookieName + "=" + cookieValue + "; expires=" + cookieLife + "; domain=.finn.no; path=/";
            }

            function getCookie(name) {
                var currentCookie = document.cookie;
                var index = currentCookie.indexOf(name + "=");
                if (index == -1) return null;
                index = currentCookie.indexOf("=", index) + 1; // first character
                var endstr = currentCookie.indexOf(";", index);
                if (endstr == -1) endstr = currentCookie.length; // last character
                return unescape(currentCookie.substring(index, endstr));
            }

            if (checkPopUp()) {
                var newCookieValue = cookie ? cookie + 1 : 1;
                setCookie(cookieName, newCookieValue, daysForCookieToLive);
                //display questback
                this.plugin('overlay', options);
            }

        }
    })

    /* parameters made available for third party networks */
    F.webAds.registerPlugin('contextData', {
        init: function(){},
        run: function(){ return FINN.data.banner;}
    });
    /* overlay with iframe content, or wrap ad iframe*/
    F.webAds.registerPlugin('overlay', {
        init: function(plugin){},
        run: function(options, callback){
            var w = options.width||'80%';
            var h = options.height||'400px';
            var content;


            if (options.url){
                content = '<iframe style="width:'+w+';height:'+h+'" src="'+options.url+'"/>';
            } else if (options.content){
                content = options.content;
            }
            FINN.user.dialog.box({ content: content });

        }
    });


})(FINN, jQuery);