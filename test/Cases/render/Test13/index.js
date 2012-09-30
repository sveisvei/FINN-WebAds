document.write('<div id="replaceMe"><div style="background:red;width:400px;height:140px;"><p style="display:block;padding:10px;">Server delayed</p></div></div>');
var replace =  document.getElementById('replaceMe');
replace.innerHTML = '<div><img src="'+webAds.contextBase+'Test13/980150.gif?forceDelay=1500"/></div>';