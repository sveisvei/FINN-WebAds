document.write('<canvas id="canvasId" width="165px" height="145px"></canvas>')
function render(){
  var canvas = document.getElementById('canvasId');
  if (!canvas.getContext) return;
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

render();

setTimeout(function(){
  var canvas = document.getElementById('canvasId');
  
  canvas.width = '500';
  canvas.height = '145';
  
  render();
  
  banner.onload()
}, 2000);

