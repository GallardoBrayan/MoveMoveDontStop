var scrollY = 0;
var distance = 25;
var speed = 40;

function autoScrollTo(el) {
	var currentY = window.pageYOffset;
	var targetY = document.getElementById(el).offsetTop;
	var bodyHeight = document.body.offsetHeight;
	var yPos = currentY + window.innerHeight;
	var animator = setTimeout('autoScrollTo(\'' + el +'\')', speed);
	if (yPos > bodyHeight) {
		clearTimeout(animator);
	} else {
		if (currentY < targetY - distance) {
			scrollY = currentY+distance;
			window.scroll(0,scrollY);
		} else {
			clearTimeout(animator);
		}
	}
}