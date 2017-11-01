/* A first canvas animation
   Author: Richard Myatt
   Date: 1 November 2017
*/

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

  // move origin back and draw image
  ctx.translate(-canvasWidth/2, -canvasWidth/2);

  ctx.fillStyle = "red";
  ctx.fillRect(200, 200, 100, 50);
  ctx.fillStyle = "blue";
  ctx.fillRect(200, 250, 100, 50);

  window.requestAnimationFrame(rotate);
}

onload = init();
