/* A fourth canvas animation
   Author: Richard Myatt
   Date: 4 November 2017
*/

var ctx, canvasWidth, canvasHeight, cube1, cube2;
var x = 0;
var angle;

function Bauble(cx, cy, dim) {
  this.r    = dim/4;
  this.xDR1 = cx - dim/4;
  this.yDR1 = cy - dim/4;
  this.xDR2 = cx + dim/4;
  this.yDR2 = cy + dim/4;
  this.xR1  = cx + dim/4;
  this.yR1  = cy - dim/4;
  this.xR2  = cx - dim/4;
  this.yR2  = cy + dim/4;
  this.xY   = cx;
  this.yY   = cy;
}

Bauble.prototype.render = function(canvasCtx) {
  this.ctx = canvasCtx;
  this.ctx.fillStyle = "darkred";
  this.ctx.beginPath();
  this.ctx.ellipse(this.xDR1, this.yDR1, this.r, this.r, 0, 0, Math.PI * 2);
  this.ctx.ellipse(this.xDR2, this.yDR2, this.r, this.r, 0, 0, Math.PI * 2);
  this.ctx.fill();
  this.ctx.beginPath();
  this.ctx.fillStyle = "red";
  this.ctx.ellipse(this.xR1, this.yR1, this.r, this.r, 0, 0, Math.PI * 2);
  this.ctx.ellipse(this.xR2, this.yR2, this.r, this.r, 0, 0, Math.PI * 2);
  this.ctx.fill();
  this.ctx.beginPath();
  this.ctx.fillStyle = "yellow";
  this.ctx.ellipse(this.xY, this.yY, this.r, this.r, 0, 0, Math.PI * 2);
  this.ctx.fill();
};


function init() {
  ctx = document.getElementById("canvas").getContext("2d");
  canvasWidth = ctx.canvas.width;
  canvasHeight = ctx.canvas.height;
  x = 0;
  angle = Math.PI * x/180;
  bauble1 = new Bauble(80, 250, 100);
  bauble2 = new Bauble(420, 250, 100);
  bauble3 = new Bauble(250, 80, 100);
  bauble4 = new Bauble(250, 420, 100);

  window.requestAnimationFrame(rotate);
}

function rotate() {

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.translate(250, 250);
  ctx.rotate(Math.PI * 1/180);
  ctx.translate(-250, -250);

  // craw central circle
  ctx.beginPath();
  ctx.ellipse(250, 250, 5, 5, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.save();

  ctx.translate(80, 250);
  ctx.rotate(-angle);
  ctx.translate(-80, -250);
  bauble1.render(ctx);

  ctx.restore();
  ctx.save();

  ctx.translate(420, 250);
  ctx.rotate(-angle);
  ctx.translate(-420, -250);
  bauble2.render(ctx);

  ctx.restore();
  ctx.save();

  ctx.translate(250, 80);
  ctx.rotate(-angle);
  ctx.translate(-250, -80);
  bauble3.render(ctx);

  ctx.restore();
  ctx.save();

  ctx.translate(250, 420);
  ctx.rotate(-angle);
  ctx.translate(-250, -420);
  bauble4.render(ctx);

  ctx.restore();

  if(x >= 178) {
    x = 0;
  } else {
    x += 2;
  }

  angle = Math.PI * x/180;

  window.requestAnimationFrame(rotate);
}
