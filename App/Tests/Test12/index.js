document.write('<div id="adId"></div>')
setTimeout(function(){
  setTimeout(function(){
    var ad = document.getElementById('adId');
    ad.innerHTML = '<h1>BETTER LATE THAN NEVER</h1>';
  }, 10);
}, 10);