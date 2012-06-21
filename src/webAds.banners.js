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

    Banner.prototype.onload = function() {
      this.log(2, 'onload triggered on iframe');
      this.$webAd = this.iframe.$iframe.contents().find("#"+this.adContainer);
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

    /*Banner.prototype.isHidden = function(w, h){
      this.log('checking if hidden ' +  w + 'x'+ h +   '  ' + this.$webAd.is('hidden'));
      return (w === 0 && h === 0 && this.$webAd.is(':hidden'));
    };*/
    
    /*Banner.prototype.swapHiddenContainer = function(){
      this.log('SHOULD swap hidden container');
      console.error('should', this.iframe.$wrapper.is(':hidden'));
      this.iframe.$wrapper.parent().css({ position: "absolute", visibility: "hidden", display:"block" });
      console.error('should', this.$webAd.width(), this.$webAd.height());
      console.log(this.iframe.$wrapper.closest(':visible'));
      this.iframe.$wrapper.parent().css({ position: "static", visibility: "visible", display:"none" });      
    };*/
    
    Banner.prototype.processSize = function() {      
      var w = this.$webAd.width();
      var h = this.$webAd.height();
      this.log(2, 'Checking if valid size: '+w+'x'+h);
      if (this.isValidSize(w, h)) {
        if (this.retries === DEFAULTS.RETRIES && this.hasEmptyPixel()){
          return this.fail('pixel');
        }/* else if (this.isHidden(w, h)){
          this.swapHiddenContainer(w, h);
        }*/
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
