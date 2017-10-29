function changeBG(el,clr){
	var elem = document.getElementById(el);
	elem.style.transition = "background-color 1.0s linear 0s";
	elem.style.background = clr;
}

function reveal() {
  var elem = document.getElementById('fadeIn');
  elem.style.transition = "opacity 6s linear 0s";
  elem.style.opacity = 1;
}
