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
                this.plugin('overlayOld', options);
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
            return handleResult({"error":true,"message":"first plugin argument/options hash is not valid JSON"});
          }
          var params = { areaId : options.customer, orgid : options.area };
          var req    = $.getJSON(url, params);
          req.success(function(list){ handleResult({'list': list}); });         
          req.error(  function(){     handleResult({"error":true, "message": "request to server failed"}); });
          
          function handleResult(obj){
            //console.log('Passing to flash=>', obj, typeof obj);
            if (typeof callback === 'string'){
              // TODO, not production ready? Do not know what element is correct in which browser.
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
        init: function(plugin){},
        run: function(options, callback){
            var w = options.width||'80%';
            var h = options.height||'400px';

            FINN.user.dialog.box({ 
                content: (options.url ? '<iframe style="width:'+w+';height:'+h+'" src="'+options.url+'"/>' : options.content)
            });
        }
    });
    
    
    /*! jQuery UI - v1.8.23 - 2012-08-15
    * https://github.com/jquery/jquery-ui
    * Includes: jquery.ui.position.js
    * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
    (function(a,b){a.ui=a.ui||{};var c=/left|center|right/,d=/top|center|bottom/,e="center",f={},g=a.fn.position,h=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return g.apply(this,arguments);b=a.extend({},b);var h=a(b.of),i=h[0],j=(b.collision||"flip").split(" "),k=b.offset?b.offset.split(" "):[0,0],l,m,n;return i.nodeType===9?(l=h.width(),m=h.height(),n={top:0,left:0}):i.setTimeout?(l=h.width(),m=h.height(),n={top:h.scrollTop(),left:h.scrollLeft()}):i.preventDefault?(b.at="left top",l=m=0,n={top:b.of.pageY,left:b.of.pageX}):(l=h.outerWidth(),m=h.outerHeight(),n=h.offset()),a.each(["my","at"],function(){var a=(b[this]||"").split(" ");a.length===1&&(a=c.test(a[0])?a.concat([e]):d.test(a[0])?[e].concat(a):[e,e]),a[0]=c.test(a[0])?a[0]:e,a[1]=d.test(a[1])?a[1]:e,b[this]=a}),j.length===1&&(j[1]=j[0]),k[0]=parseInt(k[0],10)||0,k.length===1&&(k[1]=k[0]),k[1]=parseInt(k[1],10)||0,b.at[0]==="right"?n.left+=l:b.at[0]===e&&(n.left+=l/2),b.at[1]==="bottom"?n.top+=m:b.at[1]===e&&(n.top+=m/2),n.left+=k[0],n.top+=k[1],this.each(function(){var c=a(this),d=c.outerWidth(),g=c.outerHeight(),h=parseInt(a.curCSS(this,"marginLeft",!0))||0,i=parseInt(a.curCSS(this,"marginTop",!0))||0,o=d+h+(parseInt(a.curCSS(this,"marginRight",!0))||0),p=g+i+(parseInt(a.curCSS(this,"marginBottom",!0))||0),q=a.extend({},n),r;b.my[0]==="right"?q.left-=d:b.my[0]===e&&(q.left-=d/2),b.my[1]==="bottom"?q.top-=g:b.my[1]===e&&(q.top-=g/2),f.fractions||(q.left=Math.round(q.left),q.top=Math.round(q.top)),r={left:q.left-h,top:q.top-i},a.each(["left","top"],function(c,e){a.ui.position[j[c]]&&a.ui.position[j[c]][e](q,{targetWidth:l,targetHeight:m,elemWidth:d,elemHeight:g,collisionPosition:r,collisionWidth:o,collisionHeight:p,offset:k,my:b.my,at:b.at})}),a.fn.bgiframe&&c.bgiframe(),c.offset(a.extend(q,{using:b.using}))})},a.ui.position={fit:{left:function(b,c){var d=a(window),e=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft();b.left=e>0?b.left-e:Math.max(b.left-c.collisionPosition.left,b.left)},top:function(b,c){var d=a(window),e=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop();b.top=e>0?b.top-e:Math.max(b.top-c.collisionPosition.top,b.top)}},flip:{left:function(b,c){if(c.at[0]===e)return;var d=a(window),f=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft(),g=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,h=c.at[0]==="left"?c.targetWidth:-c.targetWidth,i=-2*c.offset[0];b.left+=c.collisionPosition.left<0?g+h+i:f>0?g+h+i:0},top:function(b,c){if(c.at[1]===e)return;var d=a(window),f=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop(),g=c.my[1]==="top"?-c.elemHeight:c.my[1]==="bottom"?c.elemHeight:0,h=c.at[1]==="top"?c.targetHeight:-c.targetHeight,i=-2*c.offset[1];b.top+=c.collisionPosition.top<0?g+h+i:f>0?g+h+i:0}}},a.offset.setOffset||(a.offset.setOffset=function(b,c){/static/.test(a.curCSS(b,"position"))&&(b.style.position="relative");var d=a(b),e=d.offset(),f=parseInt(a.curCSS(b,"top",!0),10)||0,g=parseInt(a.curCSS(b,"left",!0),10)||0,h={top:c.top-e.top+f,left:c.left-e.left+g};"using"in c?c.using.call(b,h):d.css(h)},a.fn.offset=function(b){var c=this[0];return!c||!c.ownerDocument?null:b?a.isFunction(b)?this.each(function(c){a(this).offset(b.call(this,c,a(this).offset()))}):this.each(function(){a.offset.setOffset(this,b)}):h.call(this)}),a.curCSS||(a.curCSS=a.css),function(){var b=document.getElementsByTagName("body")[0],c=document.createElement("div"),d,e,g,h,i;d=document.createElement(b?"div":"body"),g={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},b&&a.extend(g,{position:"absolute",left:"-1000px",top:"-1000px"});for(var j in g)d.style[j]=g[j];d.appendChild(c),e=b||document.documentElement,e.insertBefore(d,e.firstChild),c.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",h=a(c).offset(function(a,b){return b}).offset(),d.innerHTML="",e.removeChild(d),i=h.top+h.left+(b?2e3:0),f.fractions=i>21&&i<22}()})(jQuery);;
    
    F.webAds.registerPlugin('overlay', {
      run: function(options, callback){
        var banner = this;
        var defaults = {
          width: 100,
          height: 100,
          modal: false,
          position: 'top left', // 'vertical horisontal'
          positionAgainst: 'self', // 'Top,Right1,Right' 'self'
          url: 'http://www.finn.no/finn/'
        };
        
        /*
          -> 
          -> new iframe , name= overlayAd_(this.name)
                       remoteUrl= url
          -> append to page
            -> modal? append fullpagebackground
          -> position
          -> handle ESC && click outside container
          -> double click, == only one
          
          TODO: -> iframe must be able to close itself
        */
        var name = 'overlayad'+banner.name;
        if ($(".webad-"+name.toLowerCase()).size() > 0){
          if (typeof callback === 'function') callback()
          return true;
        }
        options = $.extend({}, defaults, options);
        var iframe = new F.webAds.Iframe(name, {
          remoteUrl: options.url,
          width: options.width,
          height: options.height
        });
        iframe.makeIframe();
        iframe.$wrapper.appendTo('body');
        
        function getOrginElement(s){
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
        }
        
        iframe.$wrapper.css({position: 'absolute', 'z-index': '101'}).position({
          my: 'right top',
          of: getOrginElement(options.positionAgainst),          
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
        
        
        
        if (typeof callback === 'function') callback(function(){
          remove()
        })
        return true;
        
      }
    })


})(FINN, jQuery);