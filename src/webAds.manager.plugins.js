var FINN = FINN||{};

(function(F, $){
  "use strict";
  FINN.webAds = FINN.webAds||{};

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

  /* overlay with iframe content, or wrap ad iframe*/
  F.webAds.registerPlugin('overlay', {
    init: function(plugin){},
    run: function(options, callback){
      var w = options.width;
      var h = options.height;
      var overlay = $('<div></div>', {
        "class" : "asd",
        "style" : 'z-index:999999;position:fixed;width:50%;height:50%;left:10%;top:10%;background:red;'
      }).html('<h1>'+options.title+'</h1>');
      $("body").append(overlay).on('click', function(){
        console.log('click');
      })
    }
  });
  
  
  /* window.open? */
  //plugins.popup   = function popup(){}
  
  /* confirm dialog ? */
  /*plugins.dialog  = function dialog(){
    
    return {
      close: function(){}
    };
  }*/
  
  /* Search FINN */
  /*plugins.search = function search(query, callback){
    
    return {
      params: {},
      result: []
    }
  }*/
  
  /* Get current context - finnobj? */
  /*plugins.context = function context(){
      
      
      return {
        currentUrl: document.location.toString(),
        selectedObject: [],
        objects: []
      };
  }*/
  
  /* 
  
  async must be true.
  
  */ 
  /*plugins.getAdContent = function getAdContent(areaid, callback){
    var url     = "/finn/realestate/homes/rotationdemo.json";    
    var res     = {};
    var params  = {"areaId":areaid};
    // SYNC
    $.ajax(url,{data:params, async:false, "success": function(data){
        res = data;
    }});
    
    return res;
  }*/
  
  
})(FINN, jQuery);