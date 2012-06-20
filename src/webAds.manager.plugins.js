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
	run: function(){
		this.plugin('overlay', {url:'http://www.finn.no',title:'Survey'});
	}
})

  /* parameters made available for third party networks */
  F.webAds.registerPlugin('contextData', {
	init: function(){},
	run: function(){ return FINN.data.banner;}
  });
  /* overlay with iframe content, or wrap ad iframe*/
  F.webAds.registerPlugin('overlay', {
    init: function(plugin){},
    run: function(options, callback){
      var w = options.width;
      var h = options.height;

      var overlay = $('<iframe />', {
        "class" : "iframe",
        "src": options.url,
        "style" : 'z-index:999999;position:fixed;width:50%;height:50%;left:30%;top:20%;background:red;'
      }).html('<h1>'+options.title+'</h1>');
      
      $("body").append(overlay);
      
      overlay.on('click', function(e){
        e.stopPropagation();                
      });
      
      $(window).on('keydown.overlay', function(e){
        if (e.which === 27){ 
          overlay.remove();
          $(window).off('keydown.overlay');
        }
      });
      
      $("body").one('click', function(){
        overlay.remove();
      });
      
      overlay.focus();
      
    }
  });
  
  
})(FINN, jQuery);