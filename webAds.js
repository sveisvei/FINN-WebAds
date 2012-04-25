/*global document, window, console, jQuery, setTimeout */
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
  
  Iframe = (function(document) {
    function Iframe(name, options) {
      this.name     = name;
      this.options  = options != null ? options : {};
    }

    Iframe.prototype.remove = function() {
      this.$wrapper.remove();
      return this;
    };

    Iframe.prototype.refresh = function() {
      var iframeUrl = FINN.webAds.iframeUrl || "/finn/webads";
      var currSrc   = this.$iframe.attr('src');
      var sep       = iframeUrl.indexOf('?') !== -1 ? '&' : '?';
      var url       = currSrc.indexOf('refreshWebAd') !== -1 ? (iframeUrl + "#_" + this.name) : (iframeUrl + sep + "refreshWebAd#_" + this.name);
      this.$iframe.attr('src', url);
      return this;
    };
    
    Iframe.prototype.makeIframe = function() {
      var iframeUrl = FINN.webAds.iframeUrl || "/finn/webads";
      var div       = document.createElement('div');
      var innerDiv  = document.createElement('div');
      var i         = document.createElement('iframe');      
      innerDiv.className  = 'webad-inner';      
      //div.id              = this.id;
      var divClasses = ['webad', 'webad-'+this.name];
      if (this.options.hidden) {
        divClasses.push('webad-hidden');
        div.style.display = "none";
      }
      if (this.options.sticky) { divClasses.push('webad-sticky'); }
      div.className = (divClasses.join(' ')).toLowerCase();
      i.src        = iframeUrl + "#_" + this.name;
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
  
  var DEFAULTS = {
    RETRIES: 5,
    TIMEOUT: 50,
    MINSIZE: 39,
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
      this.incomplete     = false;
      this.log('new Banner()');
    }

    Banner.prototype.log = function(msg) { 
      /*if(Date.now && !this.now) this.now = Date.now();
      if (console) {
        var prefix = (!Date.now ? new Date() : this.now - Date.now());
        console.log(prefix + "-> " + this.name + ": " + msg);
      }*/ 
    };

    Banner.prototype.config = function(key, value) {
      this.log(key+' updated');
      return (this[key] = value);
    };

    Banner.prototype.onload = function() {
      this.log('onload');
      this.$webAd = this.iframe.$iframe.contents().find("#"+this.adContainer);      
      if (this.params.hidden || this.params.skipSizeCheck) {
        this.log('HIDDEN ignoreSizeCheck');
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
      this.log('processSize');
      var w = this.$webAd.width();
      var h = this.$webAd.height();
      
      var invalidSize = this.isValidSize(w, h);
      if (invalidSize) {
        if (this.retries === DEFAULTS.RETRIES && this.hasEmptyPixel()){
          return this.fail('pixel');
        }
        return this.pollForNewSize(w, h);
      }
            
      this.resize(w, h);
      this.resolve();
      return this;
    };

    Banner.prototype.resolve = function() {
      this.log('Banner.prototype.resolve("' + this.name + '")');
      if (this.params.bodyClass && !this.failed) {
        $("body").addClass(this.params.bodyClass);
      }
      if (this.params.done && typeof this.params.done === 'function') {
        this.params.done(this);
      }
      if (!this.resolved) {
        this.resolved = true;      
        this.log('Calling FINN.webAds.resolve()');
        FINN.webAds.resolve(this.name);
      }
      // reset
      this.refreshCalled = false;
      return this;
    };

    Banner.prototype.fail = function(reason, dontSetClass) {
      this.log('Failed ' + reason);
      if (!dontSetClass && this.iframe.$wrapper) this.iframe.$wrapper.addClass('webad-failed');      
      if (this.params.bodyFailClass) {
        $("body").addClass(this.params.bodyFailClass);
      }
      this.failed = true;
      return this.resolve();
    };

    Banner.prototype.pollForNewSize = function(width, height) {
      var banner, cb;
      this.log('pollForNewSize ' + this.timer + ' retries: ' + this.retries);
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
      if (this.incomplete){
        this.fail('Cant refresh banner bacuse of invalid config.');
      }
      this.refreshCalled  = true;
      this.resolved       = false;
      if (this.failed && this.iframe && this.iframe.$wrapper){
        this.iframe.$wrapper.removeClass('webad-failed');
      }
      this.failed         = false;
      this.retries        = DEFAULTS.RETRIES;
      this.timer          = DEFAULTS.TIMEOUT;
      this.iframe.refresh();
      return this;
    };

    Banner.prototype.remove = function() {
      this.active   = false;
      this.resolved = false;
      this.iframe.remove();
      return this;
    };

    Banner.prototype.isValid = function(){
      if (typeof this.params.threshold !== 'undefined' && this.params.threshold >= this.params.windowWidth){
        return false;
      }
      return true;
    };
    
    Banner.prototype.insert = function() {
      this.log('Insert()');
      if(!this.isValid()){
        this.notValid = true;
        this.fail('notValid');
        return this;
      }
      
      if(!this.container){
        this.incomplete = true;
        this.failed     = true;
        this.log('Missing container '+this.container);        
        this.resolve();
        return this;
      }
      this.incomplete = false;
      this.resolved   = false;
      this.active     = true;
      var $container = typeof this.container === 'string' ? jQuery("#" + this.container) : this.container;
      if ($container.size() <= 0) {
        this.fail('Missing valid container on webad '+this.name, true);
        return this;
      }
      this.iframe.makeIframe();
      $container.data('webads-processed', 'processed');
      this.iframe.$wrapper.appendTo($container);
      this.log('After insert');
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
    banner.log("cb fixTopPosition");
    if (banner.failed === true){ return;}
    var width = banner.width;
    var isSmallBanner = width <= 768;
    var isNotCompanion = width >= 800 && width < 992;
    var isDominant = width > 992;
    if (banner.bodyFailClass) $("body").removeClass(banner.bodyFailClass);
    if (isSmallBanner || isNotCompanion) {
      banner.iframe.$wrapper.css("width", "980px");
    } else if (isDominant) {
      banner.iframe.$wrapper.css("margin-left", "-12px");
    }
  }

  function fixLeftPosition(banner) {
    banner.log("cb fixLeftBanner");
    if (!banner.failed && banner.width > 50) {
      banner.iframe.$wrapper.css("left", (-(banner.width + 12)) + "px");
    }
  }

  function fixWallpaper(banner) {
    banner.log("cb fixWallpaper");
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

  FINN.data.defaultConfig = $.extend(FINN.data.defaultConfig, {
    "Top": {
      "extends": "normal",
      width: 992,
      threshold: 451,
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
      threshold: 1000      
    },
    "Right2": {
      "extends": "normal",
      threshold: 1000,            
      sticky: true,
      width: 240,
      height: 500
    },
    "Right3": {
      threshold: 1000,                  
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
      container: "textbanners",
      done: function(banner){
      /*
        banner.$webAd.on('click', 'a.tf-track-helios', function(){
          var fromSite = banner.params.site || $(this).data("tf-site") || document.domain;
          var href = convertToAbsoluteUri($(this).data("tf-url") || this.href || this.action);        
          FINN.trackingHub.publish(FINN.trackingHub.tfBanner, {site: fromSite, url: href});                    
        });*/
      }
    },
    "normal": {
      container : "banners"
    },
    "all": {
      backend   : "helios"
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
  
  
})(FINN, jQuery);var FINN=FINN||{};

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
  
  var windowWidth = $(window).width();
  function createConfig(obj){
	  var extending = (defaultConfig[obj.name] && defaultConfig[obj.name]["extends"]);
	  var defaults =  extending ? defaultConfig[extending] : null;
    return $.extend({
        windowWidth: windowWidth
      }, 
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
    renderContext(parent, true);    
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
  
  function expose(name){
    name = name.replace(/^_/, ''); // Temp hack
    return bannerMap[name].expose();
  }
  
})(FINN, jQuery);