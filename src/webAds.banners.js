(function() {
  var Banner, Iframe;

  if (window.FINN == null) window.FINN = {};

  if (FINN.webAds == null) FINN.webAds = {};

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
      iframeUrl = FINN.webAds.iframeUrl || "/finn/webads";
      currSrc = this.$iframe.attr('src');
      url = currSrc === ("" + iframeUrl + "?refresh#" + this.name) ? "" + iframeUrl + "#" + this.name : "" + iframeUrl + "?refresh#" + this.name;
      return this.$iframe.attr('src', url);
    };

    Iframe.prototype.makeIframe = function() {
      var div, iframe, iframeUrl, innerDiv;
      iframeUrl = FINN.webAds.iframeUrl || "/finn/webads";
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
      console.log('-> new Banner;', this.name, this.exposeObj);
    }

    Banner.prototype.config = function(key, value) {
      return this[key] = value;
    };

    Banner.prototype.onload = function() {
      var $wrapper, height, invalidSize, width;
      console.log('BANNER ONLOAD:', this.name);
      $wrapper = this.iframe.$iframe.contents().find('#webAd');
      width = $wrapper.width();
      height = $wrapper.height();
      invalidSize = width === null || width <= 25 || height === null || height <= 25;
      if (invalidSize) return this.pollForNewSize();
      this.resize(width, height);
      if (this.params.bodyClass) $("body").addClass(this.params.bodyClass);
      if (this.params.done && typeof this.params.done === 'function') {
        this.params.done(this);
      }
      return this;
    };

    Banner.prototype.pollForNewSize = function() {
      var banner, cb;
      console.warn('POLL for new size: ', this.name, ', timer:', this.timer, ' retries:', this.retries);
      this.timer += this.timer;
      this.retries -= 1;
      banner = this;
      cb = function() {
        console.log('POLL CB!', banner && banner.name);
        return banner.onload();
      };
      if (this.retries > 0) setTimeout(cb, this.timer);
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
      console.log('REFRESH', this.name);
      this.retries = 5;
      this.timer = 50;
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
      $container.addClass('webads-processed').append(this.iframe.makeIframe());
      console.log($container, $container.get());
      return this;
    };

    return Banner;

  })();

  window.FINN.Banner = Banner;

}).call(this);
