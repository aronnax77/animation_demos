/* A second canvas animation
   Author: Richard Myatt
   Date: 2 November 2017
*/

var ctx, canvasWidth, canvasHeight;

function init() {
  ctx = document.getElementById("canvas").getContext("2d");
  canvasWidth = ctx.canvas.width;
  canvasHeight = ctx.canvas.height;

  window.requestAnimationFrame(rotate);
}

function rotate() {

  // clear the noCanvas
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // move canvas origin to center point
  ctx.translate(canvasWidth / 2, canvasHeight / 2);

  // rotate 2 degrees
  ctx.rotate(Math.PI /180);

  // move origin back and draw image
  ctx.translate(-canvasWidth/2, -canvasWidth/2);

  // craw central circle
  ctx.beginPath();
  ctx.ellipse(250, 250, 5, 5, 0, 0, Math.PI * 2);
  ctx.fill();

  // draw circle to animate
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "blue";
  ctx.ellipse(250, 100, 25, 25, 0, 0, Math.PI * 2);
  ctx.stroke();

  window.requestAnimationFrame(rotate);
}
