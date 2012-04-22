var FINN=FINN||{};

(function(F, $){
  
  F.webAds = F.webAds||{};
  
  var MARGIN  = 10;
  var TIMER   = 75;
  
  function getAvailFnOnList(list, height, index){
    var currPos       = MARGIN;
    var toBeRendered  = [];
    var stilSearch    = true;
    var fold = 0;
    var b;

    // Search for position from bottom and up, and collect fold
    for(var i = list.length, g = i -1; i > 0; i--, g--){
      b = list[g];
      // check if height will outgrow avail window height
      if (stilSearch && (b.height + currPos + (MARGIN*toBeRendered.length)) <= height){
        toBeRendered.push(b);
        currPos   += (b.height + MARGIN);
      } else {
        stilSearch = false;
        fold      += (b.height + MARGIN);
      }
    }
    
    // Iterate positions to be rendered and set position from top when in sticky mode
    var currPosFromTop = MARGIN;
    for(i = toBeRendered.length, g = i -1; i > 0; i--, g--){
      b = toBeRendered[g];
      b.stickyPos = currPosFromTop + 0;
      currPosFromTop += b.height + MARGIN;      
    }
    
    return {
      alwaysSticky  : toBeRendered.length > 0 && toBeRendered.length === list.length,
      fold          : fold,
      toBeRendered  : toBeRendered
    };
  }
  
  var isSticky = false;
  function setSticky(list){
    if(isSticky) return true;
    isSticky = true;
    $.each(list, function(){
      this.iframe.$wrapper.css({
        position: 'fixed',
        top: this.stickyPos + "px"
      });
    });
  }
  
  function unsetSticky(list){
    if(!isSticky) return true;    
    isSticky = false;
    $.each(list, function(){
      this.iframe.$wrapper.css({
        position: 'static',
        top: ''
      });
    });
  }
  
  F.webAds.sticky = function(elemId){
    var $elem =  $('#'+elemId);
    if ($elem.size() === 0) return false;
    var $webAds = $elem.find('.webad');
    if ($webAds.size() === 0) return false;

    var list =  $webAds.map(function(i){
      return F.webAds._getBanner($(this).data('webad'));    
    });
    
    var $win    = $(window);
    var height  = $win.height();
    var result  = getAvailFnOnList(list, height);    
    var sticky  = result.toBeRendered;
    var fold    = result.fold;
    
    function checker(){
      var current = $win.scrollTop();
      if (current >= fold){
        setSticky(sticky);
      } else {
        unsetSticky(sticky);        
      }      
    }
    
    if (result.alwaysSticky) {
      checker();
    } else if (sticky.length > 0){
      var scrollTimer;
      // check if currently scrolled past fold;
      checker();

      $win.bind("scroll", function() {
        clearInterval(scrollTimer);
        scrollTimer = setTimeout(checker, TIMER);
      });
    }    
  };
    
})(FINN, jQuery);