var FINN = FINN||{};

(function(F, $){
    "use strict";
    F.webAds = F.webAds||{};

    var plugins = {};
    F.webAds.registerPlugin = function(name, plug){
        var plugin = {};
        plugin.run = plug.run||$.noop;
        if (typeof plug.init === 'function'){
            plug.init(plugin);
        }
        plugins[name] = plugin;
    };

    F.webAds.getPlugin = function(name){
        return (plugins[name].run||null);
    };

    F.webAds.registerPlugin('survey', {
        run: function(options, callback){
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
                this.plugin('overlay', options);
            }

        }
    });
    
    /* parameters made available for third party networks */
    F.webAds.registerPlugin('contextData', {
        init: function(){},
        run: function(callback){ 
            if (typeof callback === 'function'){
                callback(FINN.data.banner);
            } else {
                return FINN.data.banner;
            }            
        }
    });
    
    var url = "/finn/advertising/banner/api/adinbannerdemo.json";
    F.webAds.registerPlugin('getAdData', {
        init: function(plugin){},
        run: function(options, callback) {
          var banner = this;
          try {
            options = $.parseJSON(options);
          } catch(e){
            return handleResult('{"error":true,"message":"first plugin argument/options hash is not valid JSON"}');
          }
          var params = { areaId : options.customer, orgid : options.area };
          var req = $.get(url, params);
          req.success(handleResult);         
          req.error(function(){
            handleResult('{"error":true, "message": "request to server failed"}');
          });
          
          function handleResult(obj){
            if (typeof callback === 'string'){
              var flash = banner.$webAd.find( "object,embed").first().get()[0];
              if (flash){ flash[callback](obj); }       
            } else if (typeof callback === 'function'){
              callback(data);
            }
          }
        }
    }); 
    
    /* overlay with iframe content, or wrap ad iframe*/
    F.webAds.registerPlugin('overlay', {
        init: function(plugin){},
        run: function(options, callback){
            var w = options.width||'80%';
            var h = options.height||'400px';

            FINN.user.dialog.box({ 
                content: (options.url ? '<iframe style="width:'+w+';height:'+h+'" src="'+options.url+'"/>' : options.content);
            });
        }
    });


})(FINN, jQuery);