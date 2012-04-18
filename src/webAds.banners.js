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
      var iframeUrl = FINN.webAds.iframeUrl || "/finn/webads";
      var currSrc   = this.$iframe.attr('src');
      var sep       = iframeUrl.indexOf('?') !== -1 ? '&' : '?';
      var url       = currSrc.indexOf('refreshWebAd') !== -1 ? (iframeUrl + "#" + this.name) : (iframeUrl + sep + "refreshWebAd#" + this.name);
      this.$iframe.attr('src', url);
      return this;
    };

    Iframe.prototype.makeIframe = function() {
      var iframeUrl = FINN.webAds.iframeUrl || "/finn/webads";
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
      this.$iframe  = $(i);
      this.$wrapper = $(div)
      return this;
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
      if (!this.container){
        throw new Error('Missing container parameter on banner '+this.name);
      }
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

    Banner.prototype.log = function(msg) { 
      if (console) {console.log(this.name+":"+msg);} 
    };

    Banner.prototype.config = function(key, value) {
      return (this[key] = value);
    };

    Banner.prototype.onload = function() {
      this.log('onload');
      if (this.params.hidden || this.params.skipSizeCheck) {
        this.log('HIDDEN ignoreSizeCheck');
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
      this.log('! Resolving...' + this.name);
      if (this.params.bodyClass && !this.failed) {
        $("body").addClass(this.params.bodyClass);
      }
      if (this.params.done && typeof this.params.done === 'function') {
        this.params.done(this);
      }
      if (!this.resolved) {
        this.log('!! inner resolving...'+ this.name)        
        this.resolved = true;      
        this.log('calling global resolve');
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
        cb = function() {
          banner.log('pollForNewSize setTimeout');
          return banner.processSize();
        };
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
      this.log('refresh');
      this.refreshCalled  = true;
      this.resolved       = false;
      if (this.failed && this.iframe && this.iframe.$wrapper){
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
      if ($container.size() <= 0) {
        this.fail('Missing valid container on webad '+this.name, true);
        return this;
      }
      this.log('insert before make iframe')
      this.iframe.makeIframe();
      this.log('iframe made')
      $container.addClass('webads-processed');
      this.log('appending...')
      this.iframe.$wrapper.appendTo($container);
      this.log('after insert')
      return this;
    };
    return Banner;
  })();

  FINN.Banner = Banner;

}).call(this, FINN, jQuery);
