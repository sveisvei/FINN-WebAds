var FINN=FINN||{};

(function(F, $){
  
  F.webAds = F.webAds||{};
  
  var MARGIN  = 10;
  var TIMER   = 15;
  
  function getBannersForHeight(list, height){
    var currPos       = MARGIN;
    var toBeRendered  = [];
    var stilSearch    = true;
    var fold          = 0;
    var b;
    var maxWidth = 0;

    // Search for position from bottom and up, and collect fold
    for(var i = list.length, g = i -1; i > 0; i--, g--){
      b = list[g];
      if (b.width > maxWidth) maxWidth = b.width;
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
      sticky        : toBeRendered,
      maxWidth      : maxWidth
    };
  }
  
  var isSticky = false;
  function setSticky(list){
    if(isSticky) return true;
    isSticky = true;
    $.each(list, function(){
      this.log('activating sticky');
      this.iframe.$wrapper.css({
        position  : 'fixed',
        top       : this.stickyPos + "px"
      });
    });
  }
  
  function unsetSticky(list){
    if(!isSticky) return true;    
    isSticky = false;
    $.each(list, function(){
      this.log('de-activating sticky');      
      this.iframe.$wrapper.css({
        position  : 'static',
        top       : ''
      });
    });
  }
  
  F.webAds.sticky = function(elemId, pageSelector){
    var $elem =  $('#'+elemId);
    if ($elem.size() === 0) return false;
    var $webAds = $elem.find('.webad');
    if ($webAds.size() === 0) return false;

    var list    = $webAds.map(function(){
      return F.webAds._getBanner($(this).data('webad'));
    });
    var $win    = $(window);
    var result  = getBannersForHeight(list, $win.height());    
    
    function checker(){
      var current = $win.scrollTop();
      if (current >= result.fold){
        setSticky(result.sticky);
      } else {
        unsetSticky(result.sticky);        
      }      
    }
    
    if (pageSelector){
      var contentAndBanners = $(pageSelector).outerWidth() + (result.maxWidth / 2 );
      var isNoRoom = $win.width() <= contentAndBanners;
      if (isNoRoom){ return false; }
    }

    if (result.alwaysSticky) {
      checker();
    } else if (result.sticky.length > 0){
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