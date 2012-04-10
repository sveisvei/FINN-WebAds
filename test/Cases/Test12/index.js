document.write('<div id="adId"></div>')
setTimeout(function(){
    var ad = document.getElementById('adId');
    ad.innerHTML = '<h1 style="width:200px;height:300px;padding:0;margin:0;">BETTER LATE THAN NEVER</h1>';
}, 100);
