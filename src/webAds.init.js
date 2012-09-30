//Example
jQuery(document).ready(function(){
  "use strict";
  var FINN = FINN||{};
  // If missing FINN.webAds, webads.js is missing or adBlocker is active
  if(!FINN.webAds) {
    // Remove containers if they take up valuable space
    return;
  }

  // queue {name: 'bannername', url: 'scripturl' };
  FINN.webAds.queue(FINN.data.banners);

  // Render all, but first render commasepareted list of banner names/posisitions
  FINN.webAds.renderAll('Top,Left1,Right1');

  // hook in and add sticky when all positions are rendered
  FINN.webAds.on('all-webads-resolved', function(){
    FINN.webAds.sticky('banners-right');
  });


});