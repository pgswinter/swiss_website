if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

var goUp = true;
var end = null;
var interval = null;

function handle(delta) {
	var animationInterval = 20; //lower is faster
  	var scrollSpeed = 20; //lower is faster

	if (end == null) {
  		end = $(window).scrollLeft();
  	}
  	// end -= 200 * delta;
  	end -= 200 * delta;
  	goUp = delta > 0;

  	if (interval == null) {
    	interval = setInterval(function () {
	      	var scrollLeft = $(window).scrollLeft();
	      	var step = Math.round((end - scrollLeft) / scrollSpeed);

	      	if (scrollLeft <= 0 || 
	          	scrollLeft >= $(window).prop("scrollWidth") - $(window).width() ||
	          	goUp && step > -1 || 
	          	!goUp && step < 1 ) {
	        		clearInterval(interval);
	        		interval = null;
	        		end = null;
	      		}
	      	$(window).scrollLeft(scrollLeft + step );
	    }, animationInterval);
  	}
}

$.fn.set_width = function(){

	var me = $(this)
	var widthItem = $('.item-land-srll',me).width()
	var countItem = $('.item-land-srll',me).length
	me.width(widthItem * countItem)

}
$('.amc-land-srll').set_width()