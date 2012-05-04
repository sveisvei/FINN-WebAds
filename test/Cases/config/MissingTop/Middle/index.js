document.write('<div><a id="clickme" href="#asd" style="text-align:center;padding: 10px;display:block;background:yellow;">LINK</a></div>');
banner.ignoreOnload = true;
banner.resize(250, 100);
banner.resolve();
_jQuery("#clickme", document)
  .css({display: 'block'})
  .animate({width: 200, height: 100}, 1000)
  .on('click', function(){
  banner.plugin('overlay', {
    title: 'superoverlay',
    url: 'http://www.vg.no'
  });
});