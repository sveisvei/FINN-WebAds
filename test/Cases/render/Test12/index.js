document.write('<div id="adId"></div>')
setTimeout(function(){
    var ad = document.getElementById('adId');
    ad.innerHTML = '<h1 id="title" style="padding:10px;width:200px;height:300px;text-transform:uppercase;margin:0;line-height:16px;"></h1>';
    var funny = ['', 'Better', 'Late', 'Than', 'Never', '.', '', '', '><', '', ''];
    var inner = document.getElementById('title')
    var longRunning = setInterval(function(){
      var fun = funny[Math.round(Math.random() * 10)];
      if (fun === '') return;
      var span = document.createElement('span');
      span.style['-webkit-transition'] = 'margin 1s ease';
      span.style['-o-transition'] = 'margin 1s ease';
      span.style['transition'] = 'margin 3s ease';
      span.style['font-size'] = (Math.round(Math.random() * 10) * 10) + "%";
      span.style['display'] = 'inline-block';
      span.style['margin'] = '0 ' + Math.round(Math.random() * 100)+'px 0 0';
      span.innerHTML = fun;
      inner.appendChild(span)
      setTimeout(function(){
        span.style['margin'] = '0 5px 0 0';        
      }, 400);
    }, 500);
    
    setTimeout(function(){
      clearInterval(longRunning)
    }, 60000);
}, 100);
