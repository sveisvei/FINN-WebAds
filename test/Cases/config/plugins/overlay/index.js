document.write('<div id="hurra" style="background:blue;color: white; text-decoration: underline;cursor:pointer;width:'
  +banner.params.staticAvailableWidth+'px;height:700px;">Rendered width:'
  +banner.params.staticAvailableWidth+'px</div><style>body{background:yellow;}</style>');
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
      width: 500,
      height: 400,
      modal: false,
      position: 'top left',
      url: webAds.contextBase+"plugins/overlay/index.html"
    }, function(remove){
      active = true;
      removeCallback = remove;
    })
  }
});


