ctx = document.getElementById("canvas").getContext("2d");
var canvasWidth = ctx.canvas.width;
var canvasHeight = ctx.canvas.height;

function init() {
  ctx.fillRect(200, 200, 100, 100);

  window.requestAnimationFrame(rotate);
}

function rotate() {

  // clear the noCanvas
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // move canvas origin to center point
  ctx.translate(canvasWidth / 2, canvasHeight / 2);

  // rotate 2 degrees
  ctx.rotate(Math.PI /180);



  // Move registration point back to the top left corner of canvas
  ctx.translate(-canvasWidth/2, -canvasWidth/2);

  ctx.fillStyle = "red";
  ctx.fillRect(200, 200, 100, 50);
  //context.fillRect(canvasWidth/4, canvasWidth/4, canvasWidth/2, canvasHeight/4);
  ctx.fillStyle = "blue";
  ctx.fillRect(200, 250, 100, 50);
  //ctx.fillRect(canvasWidth/4, canvasWidth/2, canvasWidth/2, canvasHeight/4);

  window.requestAnimationFrame(rotate);
}

onload = init();
