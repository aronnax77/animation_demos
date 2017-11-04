/* A third canvas animation
   Author: Richard Myatt
   Date: 3 November 2017
*/

var ctx, canvasWidth, canvasHeight, cube1, cube2;
var x = 0;
var angle;

function Cube(cx, cy, dim) {
  this.xY = cx - dim/2;
  this.yY = cy - dim/2;
  this.xR = cx;
  this.yR = cy - dim/2;
  this.xG = cx;
  this.yG = cy;
  this.xB = cx - dim/2;
  this.yB = cy;
  this.width = dim;
  this.height = dim;
}

Cube.prototype.render = function(canvasCtx) {
  this.ctx = canvasCtx;
  this.ctx.fillStyle = "yellow";
  this.ctx.fillRect(this.xY, this.yY, this.width/2, this.height/2);
  this.ctx.fillStyle = "red";
  this.ctx.fillRect(this.xR, this.yR, this.width/2, this.height/2);
  this.ctx.fillStyle = "green";
  this.ctx.fillRect(this.xG, this.yG, this.width/2, this.height/2);
  this.ctx.fillStyle = "blue";
  this.ctx.fillRect(this.xB, this.yB, this.width/2, this.height/2);
  this.ctx.fillStyle = "black";
};



function init() {
  ctx = document.getElementById("canvas").getContext("2d");
  canvasWidth = ctx.canvas.width;
  canvasHeight = ctx.canvas.height;
  cube1 = new Cube(150, 150, 100);
  cube2 = new Cube(450, 150, 100);

  window.requestAnimationFrame(rotate);
}

function rotate() {
  ctx.save();

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.translate(150, 150);
  ctx.rotate(angle);
  ctx.translate(-150, -150);
  cube1.render(ctx);

  ctx.restore();
  ctx.save();

  ctx.translate(450, 150);
  ctx.rotate(-angle);
  ctx.translate(-450, -150);
  cube2.render(ctx);

  ctx.restore();

  x++;
  angle = Math.PI * x/180;

  window.requestAnimationFrame(rotate);
}
