document.write('<div id="hurra" style="background:blue;color: white; text-decoration: underline;cursor:pointer;width:'
  +banner.params.staticWidth+'px;height:100px;">Rendered width:'
  +banner.params.staticWidth+'px</div><style>body{background:yellow;}</style>');
var elem  = document.getElementById('hurra');

var active = false;
var removeCallback;
elem.addEventListener('click', function(){
  if (active){
    removeCallback();
    active = false;
  } else {
    elem.innerHTML = 'Calculated in overlay plugin width: ' + banner.width + 'x' + banner.height;
    banner.plugin('overlay', {
      width: 200,
      height: 100,
      modal: false,
      position: 'top left',
      url: webAds.base+"plugins/overlay/index.html"
    }, function(remove){
      active = true;
      removeCallback = remove;
    })
  }
});


