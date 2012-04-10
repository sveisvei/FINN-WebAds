document.write('<div id="adId"></div>')
setTimeout(function(){
    var ad = document.getElementById('adId');
    ad.innerHTML = '<h1 style="width:200px;height:300px;padding:0;margin:0;line-height:1.1em;">BETTER <span style="font-size:200%;">LATE</span> THAN <span style="font-size:90%;">NEVER</span></h1>';
}, 100);
