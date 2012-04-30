document.write('<div><a id="clickme" href="#asd" style="text-align:center;padding: 10px;display:block;width: 150px; height: 50px;background:yellow;">LINK</a></div>');
_jQuery(document).ready(function($){
  console.log('ready');
  $("#clickme", document).on('click', function(){
    console.log('clicked');    
    banner.plugin('overlay', {
      title: 'hurra'
    });  
    return false;
  });
  
});
