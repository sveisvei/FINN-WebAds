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
