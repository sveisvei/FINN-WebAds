var FINN = FINN||{};

(function(F, $){
  "use strict";
  F.webAds = F.webAds||{};

  var plugins = {};
  F.webAds.registerPlugin = function(name, plug){
    if (typeof plug.init == 'function'){
      plug.init.call(plug);
    }
    plug.called = {};
    plugins[name] = plug;
  };

  F.webAds.getPlugin = function(name){
    return ((plugins[name] && plugins[name].run) ? plugins[name] : null);
  };

  F.webAds.registerPlugin('survey', {
    run: function(banner, options, callback){
      var daysForCookieToLive = 21;
      var percentageToHit     = options.percent;
      var cookieName          = options.surveyName||'qbFINN';
      var cookie              = getCookie(cookieName);


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

      function isValid() {
        var popRandom = (100 * Math.random());
        return  ((popRandom + percentageToHit) > 100) && !(cookie);
      }

      if (isValid()) {
        var newCookieValue = cookie ? cookie + 1 : 1;
        setCookie(cookieName, newCookieValue, daysForCookieToLive);
        //display questback
        banner.plugin('overlayOld', options);
      }

    }
  });

  /* parameters made available for third party networks */
  F.webAds.registerPlugin('contextData', {
    run: function(banner, callback){
      if (typeof callback === 'function'){
        callback(FINN.data.banner);
      } else {
        return FINN.data.banner;
      }
    }
  });

  F.webAds.registerPlugin('getAdData', {
    init : function(){
      this.dataUrl = "finn/advertising/banner/api/adinbannerdemo.json";
    },
    run: function(banner, options, callback) {
      try {
        options = $.parseJSON(options);
      } catch(e){
        return handleResult({
          "error":true,
          "message":"first plugin argument/options hash is not valid JSON"
        });
      }
      var params = { 'BANNER_ORGGROUPREF' : options.customer, 'BANNER_AREAID' : options.area };
      var req    = $.getJSON(FINN.webAds.base + this.dataUrl, params);
      req.success(function(list){
        handleResult({'list': list});
      });
      req.error(  function(){
        handleResult({"error":true, "message": "request to server failed"});
      });

      function handleResult(obj){
        //console.log('Passing to flash=>', obj, typeof obj);
        if (typeof callback === 'string'){
          var flash         = banner.$webAd.find("embed").first().get()[0];
          if (!flash) flash = banner.$webAd.find("object").first().get()[0];
          if (flash){
            try {
              flash[callback](obj);
            } catch(e){
              if (console && console.log) console.log(e, callback, obj);
            }
          }
        } else if (typeof callback === 'function'){
          callback(obj);
        }
      }
    }
  });

  /* overlay with iframe content, or wrap ad iframe*/
  F.webAds.registerPlugin('overlayOld', {
    run: function(banner, options, callback){
      var w = options.width||'80%';
      var h = options.height||'400px';

      FINN.user.dialog.box({
        content: (options.url ? '<iframe style="width:'+w+';height:'+h+'" src="'+options.url+'"/>' : options.content)
      });
    }
  });

  F.webAds.registerPlugin('overlay', {
    getOrginElement: function(banner, s){
      var res;
      if (typeof s === 'string'){
        if (s === 'self'){
          res = banner.iframe.$wrapper;
        } else if (F.webAds._getBanner(s)) {
          res = F.webAds._getBanner(s).iframe.$wrapper;
        }
      } else {
        res = $(s);
      }
      return res;
    },
    run: function(banner, options, callback){
      var defaults = {
        width: 100,
        height: 100,
        modal: false,
        position: 'top left', // 'vertical horisontal'
        positionAgainst: 'self', // 'Top,Right1,Right' 'self'
        url: 'http://www.finn.no/finn/'
      };

      var name = 'overlayad'+banner.name;
      // Check if already loaded
      if ($(".webad-"+name.toLowerCase()).size() > 0){
        if (typeof callback === 'function') callback();
        return true;
      }

      options = $.extend({}, defaults, options);
      var sep = options.url.indexOf('?') != -1 ? '&' : '?';
      var remoteUrl = options.url + sep + 'width=' + options.width + '&height=' + options.height;
      var iframe = new F.webAds.Iframe(name, {
        remoteUrl: remoteUrl,
        width: options.width,
        height: options.height
      });
      iframe.makeIframe();
      iframe.$wrapper.appendTo('body');


      // position
      iframe.$wrapper.css({position: 'absolute', 'z-index': '101'}).position({
        my: 'right top',
        of: this.getOrginElement(banner, options.positionAgainst),
        at: 'left top',
        collision: 'none'
      });

      if (options.modal){
        options.modal = $("<div></div>").css({
          width: $(document).width(),
          height: $(document).height(),
          position: 'absolute',
          top: 0,
          left: 0,
          background: 'white',
          opacity: '0.5',
          'z-index': '100'
        }).appendTo('body');
      }

      function remove(){
        $(window).off('keydown.'+banner.name);
        $("html").off('click.'+banner.name);
        if (options.modal){
          options.modal.remove();
        }
        iframe.remove();
      }

      $(window).on('keydown.'+banner.name, function(e){
        if (e.which === 27){
          remove();
        }
      });

      $("html").on('click.'+banner.name, function(e){
        remove();
      });



      if (typeof callback === 'function') {
        callback(function(){ remove(); });
      }  
      return true;

    }
  })


})(FINN, jQuery);