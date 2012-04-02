(function() {
  var Banner, Iframe;

  if (window.FINN == null) window.FINN = {};

  Iframe = (function() {

    function Iframe(name, options, id) {
      this.name = name;
      this.options = options != null ? options : {};
      this.id = id != null ? id : 'webad-' + this.name;
    }

    Iframe.prototype.remove = function() {
      return this.$wrapper.remove();
    };

    Iframe.prototype.html = function() {
      var div, iframe, innerDiv;
      div = document.createElement('div');
      innerDiv = document.createElement('div');
      iframe = document.createElement('iframe');
      innerDiv.className = 'inner';
      div.id = this.id;
      div.className = 'advertising webads ' + this.id;
      iframe.src = '/finn/webads#' + this.name;
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
      this.active = false;
      console.log('new Banner;', this.name, this.exposeObj);
    }

    Banner.prototype.onload = function() {
      var $body, size;
      console.log('loaded:', this.name);
      $body = this.iframe.$iframe.contents().find('body');
      size = {
        width: $body.outerWidth(),
        height: $body.outerHeight()
      };
      this.iframe.$iframe.css(size).attr('height', size.height).attr('width', size.width);
      return console.log('iframe:', size);
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

    Banner.prototype.resize = function() {};

    Banner.prototype.refresh = function() {
      return this.iframe.$wrapper.replaceWith(this.iframe.html());
    };

    Banner.prototype.remove = function() {
      this.active = false;
      this.iframe.remove();
      return this;
    };

    Banner.prototype.render = function() {
      console.log('render:', this.name);
      this.iframe = new Iframe(this.name, this.params);
      return this;
    };

    Banner.prototype.insert = function() {
      console.log('insert;', this.name);
      this.active = true;
      jQuery("#" + this.container).addClass('webads-processed').append(this.iframe.html());
      return this;
    };

    return Banner;

  })();

  window.FINN.Banner = Banner;

}).call(this);
