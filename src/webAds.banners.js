/*global document, window, jQuery, setTimeout, FINN */
(function(F, $) {
  "use strict";
  F.webAds = F.webAds || {};
  var Banner, Iframe;

  var IFRAME_VERSION = 7;
  var DEFAULTS = {
    RETRIES: 5,
    TIMEOUT: 200,
    MINSIZE: 39,
    ADCONTAINER: 'webAd'
  };

  Iframe = (function(document) {
    function Iframe(name, options) {
      this.name     = name;
      this.options  = options !== null ? options : {};
    }

    Iframe.prototype.remove = function() {
      this.$wrapper.remove();
      return this;
    };

    Iframe.prototype.getUrl = function(src){
      var url     = F.webAds.iframeUrl || '/html/banner/webad.html';
      var sep     = url.indexOf('?') !== -1 ? '&' : '?';
      var refresh = src && src.indexOf('refreshWebAd') === -1 ? 'refreshWebAd=true&' : '';
      return url +  (sep + 'ver=' + IFRAME_VERSION + '&' ) + refresh + "#banner_" + this.name;
    };


    Iframe.prototype.makeIframe = function() {
      var div       = document.createElement('div');
      var innerDiv  = document.createElement('div');
      var i         = document.createElement('iframe');
      innerDiv.className  = 'webad-inner';
      var divClasses = ['webad', 'webad-'+this.name];
      if (this.options.customClasses){
        divClasses.push(this.options.customClasses);
      }
      if (this.options.hidden) {
        divClasses.push('webad-hidden');
        div.style.display = "none";
      }
      if (this.options.sticky && F.webAds.getBannerFlag('disableSticky') !== true) {
        divClasses.push('webad-sticky');
      }
      div.className = (divClasses.join(' ')).toLowerCase();
      i.src        = this.options.remoteUrl||this.getUrl();
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
      this.refreshedTimes = 0;
      this.active         = false;
      this.retries        = DEFAULTS.RETRIES;
      this.timer          = this.params.timer||DEFAULTS.TIMEOUT;
      this.resolved       = false;
      this.failed         = false;
      this.incomplete     = false;
      this.resized        = false;
      this.notValid       = false;
      this.ignoreOnload   = false;
      this.insertCalled   = false;
      this.responsive     = false;
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
      key = key.split('.');
      if (key[1] && this[key[0]]){
        this[key[0]][key[1]] = value;
      } else {
        this[key] = value;
      }
      return this;

    };

    
    Banner.prototype.isResponsive = function(height){
      height = height||this.$webAd.height();
      this.log(2, 'checking responsive height:'+ height);
      this.responsive = (height === 225);
      return this.responsive;
    };

    var css = [
      'object, embed, div, img, iframe { display: block; vertical-align:bottom;}',
      'body,html { overflow: hidden; background: transparent; display: inline; }',
      '#webAd {display: inline-block; vertical-align:bottom;}'
    ].join('\n');

    function insertCss(css, doc) {
        doc = doc||document;
        var head = doc.getElementsByTagName('head')[0];
        var style = doc.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(doc.createTextNode(css));
        }

        head.appendChild(style);
    }

    Banner.prototype.onload = function() {
      this.log(2, 'onload triggered on iframe');
      this.$webAd = this.iframe.$iframe.contents().find("#"+this.adContainer);

      if (!this.isResponsive()){
        // inject CSS so sizechecking works
        insertCss(css, this.doc);
      } else {
        this.responsive = true;
      }

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
      F.webAds.resolveOnload(this.name);
      return this;
    };

    Banner.prototype.isValidSize = function(w, h){
      return (w === null || w <= this.minSize || h === null || h <= this.minSize);
    };

    Banner.prototype.isEmptyPixel = function(){
      return !!($(this).attr('src').match(/.*(1x1|3x3|1x2).*/i));
    };

    Banner.prototype.hasEmptyPixel = function(){
      return (this.$webAd.find('img').filter(this.isEmptyPixel).length > 0);
    };

    Banner.prototype.processSize = function() {
      var w = this.params.staticAvailableWidth||this.$webAd.width();
      var h = this.$webAd.height();
      this.log(2, 'Checking if valid size: '+w+'x'+h);
      if (this.isValidSize(w, h)) {
        if (this.retries === DEFAULTS.RETRIES && this.hasEmptyPixel()){
          return this.fail('pixel');
        }
        return this.pollForNewSize(w, h);
      }
      this.responsive = this.isResponsive(h);
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
        F.webAds.resolve(this.name);
      }
      // reset
      this.refreshCalled = false;
      return this;
    };

    Banner.prototype.fail = function(reason, dontSetClass) {
      this.log(1, 'Failed:' + reason);
      if (reason == 'timeout' && this.iframe && this.iframe.$iframe){
        var html = this.iframe.$iframe.contents()
          .find('#webAd').html().replace(/</gm, '&lt;').replace(/>/gmi, '&gt;');
        this.log(2, 'html: ' + html);
      }
      if (!dontSetClass && this.iframe && this.iframe.$wrapper) this.iframe.$wrapper.addClass('webad-failed');
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
        //console.log(this.name, this.timer);
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
      var width = this.responsive ? '100%' : this.width;
      this.iframe.$iframe.css({ "height": this.height, "width": width}).attr('height', this.height).attr('width', width);
      this.resized = true;
      //console.log(this.name, 'resize', w, h, this.width, this.height);

      this.log(1, 'resized to height:' + this.height + ' and width:' + this.width);
      return this;
    };

    Banner.prototype.expose = function() {
      return $.extend({}, this.exposeObj, { banner: this });
    };

    Banner.prototype.injectScript = function(idoc) {
      if (typeof this.params.before === 'function'){
        this.params.before(this);
      }
      this.log(3, 'injectScript');
      this.doc = idoc;
      var ad = '<scr' + 'ipt type="text/javascript" src="' + this.url + '"></scr' + 'ipt>';



      // Only run the tag through 3rd party Burt Tracking if it has been loaded
     if (this.params.trackBurt && window.burt_api && window.burt_api.site && typeof burt_api.site.trackFinnAd === 'function') {
       try {
         var _ad = ad;
         ad = burt_api.site.trackFinnAd(this, ad);
       } catch(err){
         ad = _ad;
       }
      }

      idoc.write(ad);
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
      this.timer          = this.params.timer||DEFAULTS.TIMEOUT;

      // if iframe is removed, this will throw
      try {
        var url = this.iframe.getUrl(this.doc.location.href);
        this.doc.location.replace(url);
      } catch (err) {
        if (this.active) {
          F.webAds.remove(this.name);
          F.webAds.render(this.name);
        }
      }
      this.refreshedTimes =  this.refreshedTimes + 1;
      return this;
    };

    Banner.prototype.remove = function() {
      this.active   = false;
      this.resolved = false;
      this.iframe.remove();
      return this;
    };

    Banner.prototype.isValid = function(){
      this.log(2, 'Not valid if '+this.params.windowWidth+' is less than '+this.params.threshold);
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
      this.failed     = false;
      this.resolved   = false;
      this.active     = true;
      var $container = typeof this.container === 'string' ? jQuery("#" + this.container) : this.container;
      if ($container.size() <= 0) {
        this.fail('Missing valid container on '+this.name, true);
        return this;
      }
      this.log(3, 'Creating and inserting iframe/banner');
      if (!this.iframe){
        this.iframe = new Iframe(this.name, this.params);
      }
      this.iframe.makeIframe();
      $container.data('webads-processed', 'processed');
      this.iframe.$wrapper.appendTo($container);
      return this;
    };

    Banner.prototype.getBannerFlag = function(key){
      return F.webAds.getBannerFlag(key);
    };

    Banner.prototype.setBannerFlag = function(key, value){
      return F.webAds.setBannerFlag(key, value);
    };

    Banner.prototype.plugin = function(name, a, b, c){
      var plugin = F.webAds.getPlugin(name);
      if (!plugin){ return plugin; }
      plugin.called[this.name] = plugin.called[this.name] ? plugin.called[this.name] + 1 : 1;
      return plugin.run.apply(plugin, [this, a, b, c]);
    };

    return Banner;
  })();

  F.webAds.Banner = Banner;
  F.webAds.Iframe = Iframe;

}).call(this, FINN, jQuery);
