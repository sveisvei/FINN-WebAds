document.write('<canvas style="padding:0;margin:0;display:block;" id="canvasId" width="165px" height="145px"><div style="width:165px;height:145px;">canvas fallback</div></canvas>')

function render(canvas){
  var context = canvas.getContext("2d");
  var width = 125;  // Triangle Width
  var height = 105; // Triangle Height
  var padding = 20;

  // Draw a path
  context.beginPath();
  context.moveTo(padding + width/2, padding);        // Top Corner
  context.lineTo(padding + width, height + padding); // Bottom Right
  context.lineTo(padding, height + padding);         // Bottom Left
  context.closePath();

  // Fill the path
  context.fillStyle = "#ffc821";
  context.fill();
}

var canvas = document.getElementById('canvasId');
if (canvas.getContext) {
  
  render(canvas);

  setTimeout(function(){
    canvas.width = '500';
    canvas.height = '145';

    render(canvas);

    banner.processSize();
  }, 2000); 
}
