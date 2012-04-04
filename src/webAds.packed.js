(function() {
  var Banner, Iframe, iframeUrl;

  if (window.FINN == null) window.FINN = {};

  if (FINN.webAds == null) FINN.webAds = {};

  iframeUrl = FINN.webAds.iframeUrl = FINN.webAds.iframeUrl || "/finn/webads";

  Iframe = (function() {

    function Iframe(name, options, id) {
      this.name = name;
      this.options = options != null ? options : {};
      this.id = id != null ? id : 'webad-' + this.name;
    }

    Iframe.prototype.remove = function() {
      return this.$wrapper.remove();
    };

    Iframe.prototype.refresh = function() {
      var currSrc, url;
      currSrc = this.$iframe.attr('src');
      url = currSrc === ("" + iframeUrl + "?refresh#" + this.name) ? "" + iframeUrl + "#" + this.name : "" + iframeUrl + "?refresh#" + this.name;
      return this.$iframe.attr('src', url);
    };

    Iframe.prototype.html = function() {
      var div, iframe, innerDiv;
      div = document.createElement('div');
      innerDiv = document.createElement('div');
      iframe = document.createElement('iframe');
      innerDiv.className = 'inner';
      div.id = this.id;
      div.className = "advertising webads " + this.id;
      iframe.src = "" + iframeUrl + "#" + this.name;
      iframe.scrolling = 'no';
      iframe.className = 'webad-iframe';
      iframe.marginWidth = 0;
      iframe.marginHeight = 0;
      iframe.frameBorder = '0';
      iframe.allowTransparency = 'true';
      iframe.width = this.options.width || 100;
      iframe.height = this.options.height || 100;
      iframe.style.border = '0px';
      iframe.style.width = (this.options.width || 100) + 'px';
      iframe.style.height = (this.options.height || 100) + 'px';
      innerDiv.appendChild(iframe);
      div.appendChild(innerDiv);
      this.$iframe = $(iframe);
      return this.$wrapper = $(div);
    };

    return Iframe;

  })();

  Banner = (function() {

    function Banner(params, exposeObj) {
      this.params = params;
      this.exposeObj = exposeObj != null ? exposeObj : {};
      this.name = this.params.name;
      this.url = this.params.url;
      this.container = this.params.container;
      this.width = this.params.width;
      this.height = this.params.height;
      this.iframe = new Iframe(this.name, this.params);
      this.active = false;
      console.log('-> new Banner;', this.name, this.exposeObj);
    }

    Banner.prototype.config = function(key, value) {
      return this[key] = value;
    };

    Banner.prototype.onload = function() {
      var $wrapper;
      console.log('onload:', this.name);
      $wrapper = this.iframe.$iframe.contents().find('#webAd');
      this.resize($wrapper.width(), $wrapper.height());
      if (this.params.done && typeof this.params.done === 'function') {
        this.params.done(this);
      }
      return this;
    };

    Banner.prototype.resize = function(width, height) {
      this.width = width;
      this.height = height;
      console.log('iframe: ', this.name, '. resize:', height, 'width', width);
      this.iframe.$iframe.css({
        height: height,
        width: width
      }).attr('height', height).attr('width', width);
      return this;
    };

    Banner.prototype.setContainer = function(container) {
      this.container = container;
    };

    Banner.prototype.expose = function() {
      return $.extend({}, this.exposeObj, {
        banner: this
      });
    };

    Banner.prototype.injectScript = function(idoc, iwin) {
      console.log('inject:', this.name);
      idoc.write('<scr' + 'ipt type="text/javascript" src="' + this.url + '"></scr' + 'ipt>');
      return this;
    };

    Banner.prototype.refresh = function() {
      return this.iframe.refresh();
    };

    Banner.prototype.remove = function() {
      this.active = false;
      this.iframe.remove();
      return this;
    };

    Banner.prototype.insert = function() {
      var $container;
      console.log('insert;', this.name);
      this.active = true;
      $container = typeof this.container === 'string' ? jQuery("#" + this.container) : this.container;
      $container.addClass('webads-processed').append(this.iframe.html());
      return this;
    };

    return Banner;

  })();

  window.FINN.Banner = Banner;

}).call(this);
var FINN  = FINN || {};
FINN.data = FINN.data || {};

function fixTopPosition(banner){
  console.log(banner.name, 'fixTopPosition')
}
function fixLeftBanner(banner){
  console.log(banner.name, 'fixLeftBanner')
  
}
function fixWallpaper(banner){
  console.log(banner.name, 'fixWallpaper')
  
}


FINN.data.defaultConfig = {
  "Top": {
      width: 992,
      height: 150,
      bodyFailClass:'banner-has-no-top-banner',
      done: fixTopPosition
  },  
  "Left1": {
      width: 240,
      height: 500,
      bodyClass: 'banner-has-dominant-campaign',
      done: fixLeftBanner
  },
  "Right2": {
      width: 240,
      height: 500
  },
  "Middle": {
      width: 580,
      height: 400,
      container: "banners-middle"
  },
  "Wallpaper": {
      width: 0,
      height: 0,
      onload: fixWallpaper
  },
  "Survey": {
      width: 0,
      height: 0,
      onload: $.noop
  },
  "Position0" : {width: 500, height: 120, container: 'banners'},
  "Position1" : {container: 'banner-tab'},
  "Position2" : {container: 'banner-tab'},
  "Position3" : {container: 'banner-tab'},
  "all"       : {container: 'banners'}
};var FINN = FINN||{};

(function(F, $){
  "use scrict";
  FINN.webAds = FINN.webAds||{};
  var plugins = FINN.webAds.plugins = FINN.webAds.plugins||{};
  
  plugins.overlay = overlay;
  plugins.popup   = popup;
  plugins.dialog  = dialog;
  plugins.search  = search;
  plugins.context = context;
  plugins.getAdContent = getAdContent;
  
  function overlay(banner){
    console.log('PLUGIN -> Overlay ', banner.name);
    //alert("huzzlaas");
  }
  
  function popup(){
    
  }
  
  function dialog(){
    
  }
  
  /* Search FINN */
  function search(query, callback){
    
  }
  
  /* Get current context - finnobj? */
  function context(){
      
  }
  
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
  var data          = F.data = F.data||{};
  var defaultConfig = data.defaultConfig = data.defaultConfig||{};
  
  // exports
  F.webAds = F.webAds||{};
  var w = F.webAds;
  w.renderContext  = renderContext;
  w.queue          = queue;
  w.render         = render;
  w.renderAll      = renderAll;
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
    bannerMap[name].insert();
    if (typeof callback === 'function'){
      if (callbacks[name] && $.isArray(callbacks[name])){
        callbacks[name].push(callback);
      } else {
        callbacks[name] = [callback];
      }
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
        if (typeof this === 'function') this();
      });
      callbacks[name] = null;
      $(document).trigger('bannerReady.'+name, bannerMap[name]);
    }
  }

  function renderAll(){
    //loop keys, render all that isnt rendered.
    var banner;
    for(var key in bannerMap){
      banner = bannerMap[key];      
      if (banner.active === false){
        banner.insert();
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
    collectDataPositions(selector);
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