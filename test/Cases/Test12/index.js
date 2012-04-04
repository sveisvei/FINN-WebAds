document.write('<div id="adId"></div>')
  setTimeout(function(){
    var ad = document.getElementById('adId');
    console.log('Test12 settimeout')
    ad.innerHTML = '<h1>BETTER LATE THAN NEVER</h1>';
  }, 100);
