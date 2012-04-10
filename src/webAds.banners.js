(function() {
  "use strict";
  var Banner, Iframe, webAds;

  if (window.FINN == null) window.FINN = {};

  if (FINN.webAds == null) FINN.webAds = {};

  webAds = FINN.webAds;

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
      var currSrc, iframeUrl, url;
      iframeUrl = webAds.iframeUrl || "/finn/webads";
      currSrc = this.$iframe.attr('src');
      url = currSrc === ("" + iframeUrl + "?refresh#" + this.name) ? "" + iframeUrl + "#" + this.name : "" + iframeUrl + "?refresh#" + this.name;
      return this.$iframe.attr('src', url);
    };

    Iframe.prototype.makeIframe = function() {
      var div, iframe, iframeUrl, innerDiv;
      iframeUrl = webAds.iframeUrl || "/finn/webads";
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
      this.retries = 5;
      this.timer = 50;
      this.resolved = false;
      this.failed = false;
      this.now = Date.now();
      this.log('new Banner()');
    }

    Banner.prototype.log = function(msg) {
      var args;
      if (window.console && window.console.log) {
        args = [this.name + "->", Date.now() - this.now].concat(Array.prototype.slice.call(arguments));
        return console.log.apply(console, args);
      } else {
        return alert(msg);
      }
    };

    Banner.prototype.config = function(key, value) {
      return this[key] = value;
    };

    Banner.prototype.onload = function() {
      this.log('onload');
      this.processSize();
      return this;
    };

    Banner.prototype.processSize = function() {
      var $wrapper, height, invalidSize, width;
      this.log('processSize');
      $wrapper = this.iframe.$iframe.contents().find('#webAd');
      width = $wrapper.width();
      height = $wrapper.height();
      invalidSize = width === null || width <= 31 || height === null || height <= 31;
      if (invalidSize) return this.pollForNewSize();
      this.resize(width, height);
      this.resolve();
      return this;
    };

    Banner.prototype.resolve = function() {
      if (this.params.bodyClass) $("body").addClass(this.params.bodyClass);
      if (this.params.done && typeof this.params.done === 'function') {
        this.params.done(this);
      }
      if (!this.resolved) webAds.resolve(this.name);
      return this.resolved = true;
    };

    Banner.prototype.fail = function(reason) {
      this.log('Failed ' + reason);
      if (this.params.bodyFailClass) $("body").addClass(this.params.bodyFailClass);
      this.failed = true;
      return this.resolve();
    };

    Banner.prototype.pollForNewSize = function() {
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
        this.fail("timeout");
      }
      return this;
    };

    Banner.prototype.resize = function(width, height) {
      this.width = width;
      this.height = height;
      this.log('resize banner=> height:' + height + 'width' + width);
      this.iframe.$iframe.css({
        height: height,
        width: width
      }).attr('height', height).attr('width', width);
      return this;
    };

    Banner.prototype.expose = function() {
      return $.extend({}, this.exposeObj, {
        banner: this
      });
    };

    Banner.prototype.injectScript = function(idoc, iwin) {
      this.log('injectScript');
      idoc.write('<scr' + 'ipt type="text/javascript" src="' + this.url + '"></scr' + 'ipt>');
      return this;
    };

    Banner.prototype.refresh = function() {
      this.log('refresh');
      this.resolved = false;
      this.retries = 5;
      this.timer = 50;
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
      var $container;
      this.log('insert');
      this.active = true;
      $container = typeof this.container === 'string' ? jQuery("#" + this.container) : this.container;
      $container.addClass('webads-processed').append(this.iframe.makeIframe());
      return this;
    };

    return Banner;

  })();

  window.FINN.Banner = Banner;

}).call(this);
