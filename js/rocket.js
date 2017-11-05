/* rocket in the stars
   Author: Richard Myatt
   Date: 5 November 2017
*/

var bg = new Image();
var rocket = new Image();
var background, ctx, cW, cH;
var num;  // records the number of animations after set and reset
var rx = 0; // initial x coordinate of rocket sprite
var delay;  // delay between burst of rocket engine


function Background() {
  this.x = 0;
  this.y = 0;
  this.w = bg.width;
  this.h = bg.height;
}

Background.prototype.render = function () {
  ctx.drawImage(bg, this.x--, 0);
  if(this.x <= -249) {
    this.x = 0;
  }
};

function init() {
  ctx = document.getElementById("my_canvas").getContext("2d");
  cW  = ctx.canvas.width;
  cH  = ctx.canvas.height;
  bg.src = "images/stars2.png";
  rocket.src = "images/strip_small.png";
  background = new Background();
  num = 0;
  delay = 120;

  animate();
  window.requestAnimationFrame(animate);
}

function animate() {

  ctx.clearRect(0, 0, cW, cH);

  background.render();
  ctx.drawImage(rocket, rx * 120, 0, 120, 120, 100, -75, 360, 360);

  num++;

  if(num % delay === 0) {
    (rx)++;
  } else if(num === (delay * 3 - 1)){
    num = 0;
    rx = 0;
  }

  window.requestAnimationFrame(animate);
}
